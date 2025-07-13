import React, { createContext, useContext, useReducer, useEffect } from 'react'

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

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
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
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => 
            !(item.id === action.payload.id && item.type === action.payload.type)
          )
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.type === action.payload.type
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.type === action.payload.type)
        )
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

  const updateQuantity = (id, quantity, type = 'product') => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity, type } })
  }

  const removeItem = (id, type = 'product') => {
    dispatch({ type: CART_ACTIONS.REMOVE_ITEM, payload: { id, type } })
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
    const phoneNumber = "919876543210" // Replace with your actual WhatsApp number
    const items = state.items.map(item => {
      const type = item.type === 'collection' ? 'Pack' : 'Sticker'
      return `• ${item.title} ${type} ×${item.quantity} – ₹${item.price * item.quantity}`
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
    addCollection,
    updateQuantity,
    removeItem,
    clearCart,
    getItemCount,
    getTotalPrice,
    generateWhatsAppMessage
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
