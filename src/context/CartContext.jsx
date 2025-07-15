import React, { createContext, useContext, useReducer, useEffect } from 'react'

// Global material pricing configuration
const MATERIAL_OPTIONS = {
  paper: {
    name: 'Paper Stickers',
    priceMultiplier: 1,
    waterproof: false,
    tearResistant: false
  },
  vinyl: {
    name: 'Vinyl Stickers', 
    priceMultiplier: 1.6,
    waterproof: true,
    tearResistant: true
  }
}

// Cart Context
const CartContext = createContext()

// Cart Actions
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  ADD_COLLECTION: 'ADD_COLLECTION'
}

// Helper function to create unique item keys based on id, material, and type
const getItemKey = (item) => `${item.id}-${item.material || 'default'}-${item.type || 'default'}`

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const newItemKey = getItemKey(action.payload)
      const existingItem = state.items.find(item => getItemKey(item) === newItemKey)
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            getItemKey(item) === newItemKey
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      }

    case CART_ACTIONS.ADD_COLLECTION:
      const collection = action.payload
      const existingCollection = state.items.find(item => item.id === collection.id && item.type === 'collection')
      if (existingCollection) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === collection.id && item.type === 'collection'
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...collection, quantity: 1, type: 'collection' }]
      }

    case CART_ACTIONS.UPDATE_QUANTITY:
      const targetKey = `${action.payload.id}-${action.payload.material || 'default'}-${action.payload.type || 'default'}`
      
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => getItemKey(item) !== targetKey)
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          getItemKey(item) === targetKey
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }

    case CART_ACTIONS.REMOVE_ITEM:
      const removeKey = `${action.payload.id}-${action.payload.material || 'default'}-${action.payload.type || 'default'}`
      
      return {
        ...state,
        items: state.items.filter(item => getItemKey(item) !== removeKey)
      }

    case CART_ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: []
      }

    default:
      return state
  }
}

// Cart Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('stixnvibes-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        parsedCart.items.forEach(item => {
          if (item.type === 'collection') {
            dispatch({ type: CART_ACTIONS.ADD_COLLECTION, payload: item })
          } else {
            dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: item })
          }
        })
      } catch (error) {
        console.error('Error loading cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stixnvibes-cart', JSON.stringify(state))
  }, [state])

  // Cart utilities
  const addItem = (item) => {
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { ...item, type: 'product' } })
  }

  const addCollection = (collection) => {
    dispatch({ type: CART_ACTIONS.ADD_COLLECTION, payload: collection })
  }

  // Material pricing utilities
  const calculateMaterialPrice = (basePrice, material = 'paper') => {
    if (!basePrice) return 0
    return Math.round(basePrice * MATERIAL_OPTIONS[material].priceMultiplier)
  }

  const getMaterialOptions = () => MATERIAL_OPTIONS

  const addItemWithMaterial = (item, material = 'paper') => {
    const adjustedPrice = calculateMaterialPrice(item.basePrice || item.price, material)
    const itemWithMaterial = {
      ...item,
      price: adjustedPrice,
      material: material,
      materialName: MATERIAL_OPTIONS[material].name,
      basePrice: item.basePrice || item.price
    }
    dispatch({ type: CART_ACTIONS.ADD_ITEM, payload: { ...itemWithMaterial, type: 'product' } })
  }

  const updateQuantity = (id, quantity, type = 'product', material = null) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity, type, material } })
  }

  const removeItem = (id, type = 'product', material = null) => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id, type, material } })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART })
  }

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const generateWhatsAppMessage = () => {
    const phoneNumber = "917744020601" // Replace with your actual WhatsApp number
    const items = state.items.map(item => {
      const type = item.type === 'collection' ? 'Pack' : 'Sticker'
      let itemDescription = `• ${item.title} ${type}`
      
      // Add material information if present
      if (item.material && item.type !== 'Collection') {
        const materialInfo = MATERIAL_OPTIONS[item.material]
        const materialName = materialInfo ? materialInfo.name : item.material
        itemDescription += ` (${materialName})`
        
        // Add material benefits
        if (materialInfo) {
          const benefits = []
          if (materialInfo.waterproof) benefits.push('Waterproof')
          if (materialInfo.tearResistant) benefits.push('Tear-resistant')
          if (benefits.length > 0) {
            itemDescription += ` - ${benefits.join(', ')}`
          }
        }
      }
      
      itemDescription += ` ×${item.quantity} – ₹${item.price * item.quantity}`
      return itemDescription
    }).join('\n')
    
    const total = getTotalPrice()
    const message = encodeURIComponent(
      `Hey Stix N Vibes! 🎨\n\nI'd like to order the following:\n${items}\n\nTotal: ₹${total}\n\nPlease confirm and send payment details :)`
    )
    
    return `https://wa.me/${phoneNumber}?text=${message}`
  }

  const value = {
    items: state.items,
    addItem,
    addItemWithMaterial,
    addCollection,
    updateQuantity,
    removeItem,
    clearCart,
    getItemCount,
    getTotalPrice,
    generateWhatsAppMessage,
    calculateMaterialPrice,
    getMaterialOptions
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Cart Hook
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
