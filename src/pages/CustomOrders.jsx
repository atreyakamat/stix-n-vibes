import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Settings, Layers, Droplets, Hash, CheckCircle, MessageCircle, Camera, Mail, Monitor, Zap, User } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { Footer } from '../components/Footer'
import { PageMeta } from '../components/PageMeta'
import { submitFormBackup } from '../lib/formBackup'

export default function CustomOrders() {
  const [stickerType, setStickerType] = useState('die-cut')
  const [size, setSize] = useState('3x3')
  const [finish, setFinish] = useState('matte')
  const [quantity, setQuantity] = useState(100)
  const [uploadedImage, setUploadedImage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [name, setName] = useState('')
  const [contactInfo, setContactInfo] = useState('')
  const fileInputRef = useRef(null)

  const preloadedTemplates = [
    { name: 'Laptop Pack', url: '/images/packs/laptop-pack.webp' },
    { name: 'Daily Vibes', url: '/images/packs/daily-vibes-pack.webp' },
    { name: 'Goa Series', url: '/images/packs/goa-pack.webp' },
  ]

  const [selectedPreview, setSelectedPreview] = useState(preloadedTemplates[0].url)

  const getUnitPrice = () => {
    let base = stickerType === 'kiss-cut' ? 25 : 30
    const sizeMultipliers = { '2x2': 0.8, '3x3': 1.0, '4x4': 1.4, custom: 1.8 }
    let price = base * (sizeMultipliers[size] || 1.0)
    if (finish === 'glossy') price += 6
    if (finish === 'extra-glossy') price += 10
    if (quantity >= 1000) price *= 0.5
    else if (quantity >= 500) price *= 0.65
    else if (quantity >= 250) price *= 0.8
    else if (quantity >= 100) price *= 0.9
    return price
  }

  const unitPrice = getUnitPrice()
  const subtotal = unitPrice * quantity

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setUploadedImage(reader.result)
        setSelectedPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleOrderSubmit = (e) => {
    e.preventDefault()
    if (!name || !contactInfo) return
    setIsSuccess(true)

    // Compile details
    const orderDetails = {
      name,
      contactInfo,
      stickerType: stickerType === 'die-cut' ? 'Die-Cut' : 'Kiss-Cut',
      dimensions: size === '2x2' ? '2"x2"' : size === '3x3' ? '3"x3"' : size === '4x4' ? '4"x4"' : 'Custom',
      finish: finish.replace('-', ' ').toUpperCase(),
      quantity: `${quantity} units`,
      pricePerUnit: `₹${unitPrice.toFixed(2)}`,
      totalPrice: `₹${subtotal.toLocaleString('en-IN')}`
    }

    // Background backup submit
    submitFormBackup(orderDetails, "Custom Sticker Configurator")

    const text = `Hey Stix and Vibes! I'd like to Place the Vibe!\n\n` +
      `Name: ${name}\n` +
      `Contact: ${contactInfo}\n` +
      `Cut Type: ${orderDetails.stickerType}\n` +
      `Size: ${orderDetails.dimensions}\n` +
      `Finish: ${orderDetails.finish}\n` +
      `Quantity: ${orderDetails.quantity}\n` +
      `Unit: ${orderDetails.pricePerUnit} | Total: ${orderDetails.totalPrice}\n\n` +
      `Let's go! 🌴`
    window.open(`https://wa.me/917744020601?text=${encodeURIComponent(text)}`, '_blank')
  }

  const sizeOptions = [
    { id: '2x2', label: '2" × 2"', desc: 'Pocket Size' },
    { id: '3x3', label: '3" × 3"', desc: 'Standard' },
    { id: '4x4', label: '4" × 4"', desc: 'Statement' },
    { id: 'custom', label: 'Custom', desc: 'Bespoke' },
  ]

  return (
    <div className="min-h-screen select-none">
      <PageMeta title="Custom Orders" description="Design and configure your own custom die-cut or kiss-cut vinyl stickers. Upload your artwork, choose sizes and finishes, and get volume discounts." />
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="Custom Configurator"
            segments={[
              { text: 'Configure your stickers. ', className: 'text-brand-dark font-normal' },
              { text: 'Uploaded by you, ', className: 'italic font-serif text-electricBlue' },
              { text: 'cut by us.', className: 'text-brand-dark font-normal' },
            ]}
            subtitle="Upload your design, configure dimensions, specify finishes, and preview with instant volume-based pricing."
            headingSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      {/* Configurator */}
      <section className="bg-cream pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ─── LEFT: Control Panel ───────────────────────────── */}
          <form onSubmit={handleOrderSubmit} className="lg:col-span-7 bg-white border border-black/5 rounded-sticker p-6 sm:p-8 space-y-7 shadow-card">

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Configuration Locked</h3>
                <p className="text-brand-muted text-sm max-w-md mx-auto">
                  Your custom sticker configuration is being sent via WhatsApp. Our team will confirm your mock-ups shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="bg-cream text-brand-dark hover:bg-cream-300 border border-black/5 font-semibold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all cursor-pointer"
                >
                  Configure Another
                </button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Upload */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <Upload className="w-4 h-4 text-electricBlue" />
                    <span>1. Choose or upload design</span>
                  </div>
                  <div
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-black/8 hover:border-electricBlue/40 bg-cream-50 rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-colors group/drop"
                  >
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
                    <div className="w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center mx-auto text-brand-muted group-hover/drop:text-electricBlue transition-colors">
                      <Upload className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm mt-3 text-brand-dark">Drop your graphic here</h4>
                    <p className="text-brand-muted text-xs mt-1">PNG, JPG or SVG (transparent bg preferred)</p>
                  </div>
                  <div className="flex items-center gap-3 bg-cream-50 p-3 rounded-xl border border-black/5">
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold shrink-0">Templates:</span>
                    <div className="flex gap-2">
                      {preloadedTemplates.map((tp) => (
                        <button
                          key={tp.name}
                          type="button"
                          onClick={() => { setSelectedPreview(tp.url); setUploadedImage('') }}
                          className={`text-[10px] px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                            selectedPreview === tp.url && !uploadedImage
                              ? 'bg-brand-dark text-white border-brand-dark'
                              : 'bg-white text-brand-muted border-black/5 hover:border-black/10'
                          }`}
                        >
                          {tp.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 2: Size */}
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <Settings className="w-4 h-4 text-neonGreen" />
                    <span>2. Select Dimensions</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {sizeOptions.map((sz) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setSize(sz.id)}
                        className={`rounded-xl p-3 text-left border transition-all cursor-pointer ${
                          size === sz.id
                            ? 'bg-cream border-brand-dark/20 shadow-sm'
                            : 'bg-cream-50 border-black/5 hover:border-black/10'
                        }`}
                      >
                        <h4 className="font-bold text-sm text-brand-dark">{sz.label}</h4>
                        <p className="text-brand-muted text-[10px] mt-0.5">{sz.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Cut Type */}
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <Layers className="w-4 h-4 text-neonYellow" />
                    <span>3. Cut Geometry</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'die-cut', title: 'Die-Cut Stickers', desc: 'Cut through backing to match your graphic\'s exact shape.' },
                      { id: 'kiss-cut', title: 'Kiss-Cut Stickers', desc: 'Cut vinyl layer only, leaving protective square backing.' },
                    ].map((cut) => (
                      <button
                        key={cut.id}
                        type="button"
                        onClick={() => setStickerType(cut.id)}
                        className={`rounded-xl p-4 text-left border transition-all cursor-pointer ${
                          stickerType === cut.id
                            ? 'bg-cream border-brand-dark/20 shadow-sm'
                            : 'bg-cream-50 border-black/5 hover:border-black/10'
                        }`}
                      >
                        <h4 className="font-bold text-sm text-brand-dark">{cut.title}</h4>
                        <p className="text-brand-muted text-xs mt-1 leading-relaxed">{cut.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Finish */}
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <Droplets className="w-4 h-4 text-electricBlue" />
                    <span>4. Premium Finish</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['matte', 'glossy', 'extra-glossy'].map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFinish(f)}
                        className={`rounded-xl p-3 text-center uppercase tracking-wider text-xs font-semibold transition-all cursor-pointer border ${
                          finish === f
                            ? 'bg-brand-dark text-white border-brand-dark'
                            : 'bg-cream-50 border-black/5 hover:border-black/10 text-brand-muted'
                        }`}
                      >
                        {f.replace('-', ' ')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 5: Quantity */}
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex justify-between items-center text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-neonGreen" />
                      <span>5. Quantity</span>
                    </div>
                    <span className="text-brand-dark text-base font-bold font-sans">{quantity} units</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full accent-brand-dark h-1.5 rounded-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-brand-muted">
                    <span>50</span>
                    <span>100 (10% off) · 250 (20%) · 500 (35%) · 1000+ (50%)</span>
                    <span>2000</span>
                  </div>
                </div>

                {/* Step 6: Contact Information */}
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-muted">
                    <User className="w-4 h-4 text-electricBlue" />
                    <span>6. Contact Information</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Email or Phone</label>
                      <input
                        type="text"
                        required
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        placeholder="hello@example.com / Phone"
                        className="w-full bg-cream-50 border border-black/8 p-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                      />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="pt-5 border-t border-black/5 space-y-3">
                  <span className="text-brand-muted text-[10px] uppercase tracking-widest font-semibold block">Summary</span>
                  <div className="bg-cream-50 rounded-xl p-4 border border-black/5 text-xs space-y-1.5 text-brand-muted">
                    <div className="flex justify-between"><span>Cut:</span><span className="text-brand-dark font-bold">{stickerType === 'die-cut' ? 'Die-Cut' : 'Kiss-Cut'}</span></div>
                    <div className="flex justify-between"><span>Size:</span><span className="text-brand-dark font-bold">{size === '2x2' ? '2"×2"' : size === '3x3' ? '3"×3"' : size === '4x4' ? '4"×4"' : 'Custom'}</span></div>
                    <div className="flex justify-between"><span>Finish:</span><span className="text-brand-dark font-bold capitalize">{finish.replace('-', ' ')}</span></div>
                    <div className="flex justify-between"><span>Quantity:</span><span className="text-brand-dark font-bold">{quantity}</span></div>
                    <div className="flex justify-between pt-2 border-t border-black/5">
                      <span>Discount:</span>
                      <span className="text-emerald-600 font-bold">
                        {quantity >= 1000 ? '50% OFF' : quantity >= 500 ? '35% OFF' : quantity >= 250 ? '20% OFF' : quantity >= 100 ? '10% OFF' : 'Base'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-5 border-t border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-brand-muted text-[10px] uppercase tracking-widest font-semibold block">Estimated Total</span>
                    <div className="flex items-baseline justify-center sm:justify-start gap-1.5">
                      <span className="text-brand-dark font-bold text-2xl sm:text-3xl">₹{subtotal.toLocaleString('en-IN')}</span>
                      <span className="text-brand-muted text-xs">(₹{unitPrice.toFixed(2)}/unit)</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-brand-dark text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl hover:bg-brand-charcoal transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sticker"
                  >
                    Place the Vibe
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </form>

          {/* ─── RIGHT: Preview & Contact ──────────────────────── */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Preview */}
            <div className="bg-white border border-black/5 rounded-sticker p-6 sm:p-8 flex flex-col items-center shadow-card">
              <div className="flex items-center gap-2 mb-5 text-brand-muted text-xs font-semibold uppercase tracking-wider">
                <Monitor className="w-4 h-4 text-electricBlue" />
                <span>Live Preview</span>
              </div>

              {/* Laptop mockup */}
              <div className="relative w-full max-w-[300px] aspect-[16/10] bg-cream-300/40 border-2 border-cream-400 rounded-xl flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none" />
                <motion.div
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{ rotateY: 8, rotateX: -6 }}
                  className="relative cursor-grab z-10"
                >
                  <div className={`flex items-center justify-center relative rounded-full transition-all duration-500 border-2 ${
                    size === '2x2' ? 'w-20 h-20' : size === '3x3' ? 'w-32 h-32' : size === '4x4' ? 'w-40 h-40' : 'w-36 h-36'
                  } ${
                    finish === 'extra-glossy'
                      ? 'bg-white border-brand-dark/20 shadow-[0_8px_30px_rgba(0,0,0,0.15)]'
                      : finish === 'glossy'
                        ? 'bg-white border-brand-dark/15 shadow-xl'
                        : 'bg-white border-brand-dark/10 shadow-lg'
                  }`}>
                    {(finish === 'glossy' || finish === 'extra-glossy') && (
                      <motion.div
                        animate={{ x: [-150, 150] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-20 rounded-full"
                      />
                    )}
                    <img
                      src={selectedPreview}
                      alt="Custom Sticker Preview"
                      className="w-full h-full object-contain rounded-full p-2"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="w-[320px] h-2.5 bg-cream-300 rounded-b-lg mt-0" />

              {/* Preview meta */}
              <div className="w-full grid grid-cols-3 gap-2 mt-5 pt-5 border-t border-black/5 text-center text-xs text-brand-muted">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider">Cut</span>
                  <span className="text-brand-dark font-bold block mt-0.5">{stickerType === 'die-cut' ? 'Die-Cut' : 'Kiss-Cut'}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider">Size</span>
                  <span className="text-brand-dark font-bold block mt-0.5">{size === '2x2' ? '2"×2"' : size === '3x3' ? '3"×3"' : size === '4x4' ? '4"×4"' : 'Custom'}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider">Finish</span>
                  <span className="text-brand-dark font-bold block mt-0.5 capitalize">{finish.replace('-', ' ')}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-white border border-black/5 rounded-sticker p-6 shadow-card space-y-4">
              <h3 className="text-brand-dark font-bold text-sm">Prefer direct booking?</h3>
              <p className="text-brand-muted text-xs leading-relaxed">
                Have a specific request? Reach out on our verified channels.
              </p>
              <div className="space-y-2">
                {[
                  { icon: MessageCircle, label: 'WhatsApp', value: '+91 77440 20601', href: 'https://wa.me/917744020601', color: 'text-emerald-600' },
                  { icon: Camera, label: 'Instagram', value: '@stixnvibes', href: 'https://instagram.com/stixnvibes', color: 'text-pink-500' },
                  { icon: Mail, label: 'Email', value: 'hello@stixnvibes.com', href: 'mailto:hello@stixnvibes.com', color: 'text-brand-dark' },
                ].map((ch) => {
                  const Icon = ch.icon
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={ch.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-3 p-3 bg-cream-50 border border-black/5 rounded-xl hover:shadow-sm transition-all cursor-pointer group"
                    >
                      <div className="w-8 h-8 bg-white border border-black/5 rounded-lg flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${ch.color}`} />
                      </div>
                      <div>
                        <span className="text-[9px] text-brand-muted block uppercase tracking-wider">{ch.label}</span>
                        <span className="text-brand-dark text-xs font-semibold group-hover:text-electricBlue transition-colors">{ch.value}</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
