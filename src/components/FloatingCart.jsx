import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { items, getItemCount, getTotalPrice, updateQuantity, removeItem, generateWhatsAppMessage, clearCart } = useCart()

  const itemCount = getItemCount()
  const totalPrice = getTotalPrice()

  useEffect(() => {
    const handleToggleCart = () => {
      setIsOpen(prev => !prev)
    }

    window.addEventListener('toggleCart', handleToggleCart)
    return () => window.removeEventListener('toggleCart', handleToggleCart)
  }, [])

  if (itemCount === 0) return null

  return (
    <>
      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#e92932] text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center relative hover:bg-[#d61f27] transition-colors"
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
            <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16H40.85L69.42,147.57A24,24,0,0,0,92.27,168H200a8,8,0,0,0,0-16H92.27a8,8,0,0,1-7.87-6.57L81.44,128H204.16a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm128,0a16,16,0,1,1-16-16A16,16,0,0,1,224,216Z"/>
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-[#e92932] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </motion.div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Cart Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-6 border-b border-[#f3e7e8] flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#1b0e0f]">Your Cart</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-[#f3e7e8] rounded-full transition-colors"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                    </svg>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                  {items.length === 0 ? (
                    <div className="text-center text-[#974e52] py-8">
                      <div className="text-4xl mb-4">🛒</div>
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {items.map((item) => (
                        <motion.div
                          key={`${item.id}-${item.material || 'default'}-${item.type || 'default'}`}
                          className="flex items-center gap-4 p-3 border border-[#f3e7e8] rounded-lg"
                          layout
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-[#1b0e0f] text-sm">
                              {item.title}
                              {item.type === 'collection' && (
                                <span className="text-xs text-[#e92932] ml-1">(Pack)</span>
                              )}
                            </h3>
                            <div className="flex items-center gap-2">
                              <p className="text-[#974e52] text-xs">₹{item.price} each</p>
                              {item.material && item.type !== 'Collection' && (
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">
                                    {item.material === 'vinyl' ? '💧' : '📄'}
                                  </span>
                                  <span className="text-xs text-[#666] capitalize">
                                    {item.material}
                                  </span>
                                  {item.material === 'vinyl' && (
                                    <span className="bg-[#42c4ef] text-white px-1 py-0.5 rounded text-xs">
                                      Waterproof
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.type, item.material)}
                              className="w-6 h-6 rounded-full bg-[#f3e7e8] flex items-center justify-center text-sm hover:bg-[#e7d0d1] transition-colors"
                            >
                              -
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.type, item.material)}
                              className="w-6 h-6 rounded-full bg-[#f3e7e8] flex items-center justify-center text-sm hover:bg-[#e7d0d1] transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.type, item.material)}
                            className="p-1 text-[#974e52] hover:text-[#e92932] transition-colors"
                          >
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"/>
                            </svg>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                  <div className="p-6 border-t border-[#f3e7e8] bg-[#fcf8f8]">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-[#1b0e0f]">Total:</span>
                      <span className="text-xl font-bold text-[#e92932]">₹{totalPrice}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <a
                        href={generateWhatsAppMessage()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-[#25d366] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#22c55e] transition-colors"
                      >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5L128,136a79.93,79.93,0,0,1-31.16-31.16l6.66-19.54a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,80.73,40a56.26,56.26,0,0,0-48.26,48.26c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,48.26-48.26A8,8,0,0,0,187.58,144.84Z"/>
                        </svg>
                        Order via WhatsApp
                      </a>
                      
                      <button
                        onClick={clearCart}
                        className="w-full border border-[#e7d0d1] text-[#974e52] py-2 px-4 rounded-lg font-medium hover:bg-[#f3e7e8] transition-colors"
                      >
                        Clear Cart
                      </button>
                    </div>

                    <p className="text-xs text-[#974e52] text-center mt-4">
                      Free delivery on orders above ₹500
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingCart
