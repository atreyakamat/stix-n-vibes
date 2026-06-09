import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { User, Send, Check, ChevronRight, Sparkles, MessageCircle, Package, Palette, Building2 } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactButtons } from '../components/ContactButtons'
import { Footer } from '../components/Footer'

const serviceOptions = [
  { id: 'packs', label: 'Sticker Packs', icon: Package, desc: 'Buy curated sticker collections' },
  { id: 'custom', label: 'Custom Orders', icon: Palette, desc: 'Upload your design, we print' },
  { id: 'b2b', label: 'Brand Collab', icon: Building2, desc: 'Bulk B2B sticker partnerships' },
  { id: 'other', label: 'Something Else', icon: Sparkles, desc: 'Ask us anything' },
]

export default function Inquiries() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, service: serviceId })
    setStep(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSubmitted(true)

    const serviceName = serviceOptions.find(s => s.id === formData.service)?.label || 'General'
    const text = `Hey Stix and Vibes! Inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${serviceName}\n\nMessage:\n${formData.message}\n\nLet's vibe! 🌴`
    window.open(`https://wa.me/917744020601?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen select-none">
      {/* Header */}
      <section className="bg-cream pt-28 sm:pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <SectionHeading
            label="Get in Touch"
            segments={[
              { text: 'Let\'s talk ', className: 'text-brand-dark font-normal' },
              { text: 'stickers.', className: 'italic font-serif text-electricBlue' },
            ]}
            subtitle="Whether it's a quick question, a bulk order, or a brand collab — we're here to help."
            headingSize="text-3xl sm:text-4xl md:text-5xl"
          />
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-cream px-6 pb-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <ContactButtons className="justify-center" variant="full" />
        </div>
      </section>

      {/* Form Wizard */}
      <section ref={ref} className="bg-cream pb-20 px-6 relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white border border-black/5 rounded-sticker p-6 sm:p-10 shadow-card"
        >
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step >= s
                    ? 'bg-brand-dark text-white'
                    : isSubmitted && s === 3
                      ? 'bg-emerald-500 text-white'
                      : 'bg-cream-300 text-brand-muted border border-black/5'
                }`}>
                  {isSubmitted && s === 3 ? <Check className="w-3.5 h-3.5" /> : s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-[2px] rounded ${step > s ? 'bg-brand-dark' : 'bg-cream-300'} transition-colors`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* ─── SUCCESS ───────────────────────────────── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 space-y-5"
              >
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Message Sent!</h3>
                <p className="text-brand-muted text-sm max-w-md mx-auto">
                  Your inquiry has been sent via WhatsApp. Our team typically responds within a few hours.
                </p>
                <button
                  onClick={() => { setIsSubmitted(false); setStep(1); setFormData({ name: '', email: '', message: '', service: '' }) }}
                  className="bg-cream text-brand-dark hover:bg-cream-300 border border-black/5 font-semibold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Another
                </button>
              </motion.div>
            ) : step === 1 ? (
              /* ─── STEP 1: SERVICE SELECTION ─────────────── */
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">What are you looking for?</h3>
                  <p className="text-brand-muted text-xs">Select the option that best describes your interest.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {serviceOptions.map((svc) => {
                    const Icon = svc.icon
                    const isSelected = formData.service === svc.id
                    return (
                      <button
                        key={svc.id}
                        onClick={() => handleServiceSelect(svc.id)}
                        className={`rounded-xl p-4 text-left border transition-all cursor-pointer group flex items-start gap-3 ${
                          isSelected
                            ? 'bg-cream border-brand-dark/20 shadow-sm'
                            : 'bg-cream-50 border-black/5 hover:border-black/10 hover:bg-cream'
                        }`}
                      >
                        <div className="w-9 h-9 bg-white border border-black/5 rounded-xl flex items-center justify-center shrink-0 text-electricBlue group-hover:scale-110 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-brand-dark font-bold text-sm">{svc.label}</h4>
                          <p className="text-brand-muted text-[10px] mt-0.5">{svc.desc}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ) : step === 2 ? (
              /* ─── STEP 2: PERSONAL INFO ─────────────────── */
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-1">Tell us about yourself</h3>
                  <p className="text-brand-muted text-xs">So we know who we're vibing with.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-muted/40" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full name"
                        className="w-full bg-cream-50 border border-black/8 pl-10 pr-4 py-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@example.com"
                      className="w-full bg-cream-50 border border-black/8 px-4 py-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue"
                    />
                  </div>
                </div>
                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 rounded-xl text-xs font-semibold text-brand-muted border border-black/5 hover:bg-cream transition-all cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => formData.name && formData.email && setStep(3)}
                    disabled={!formData.name || !formData.email}
                    className="flex-1 bg-brand-dark text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-charcoal disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    Continue
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* ─── STEP 3: MESSAGE ───────────────────────── */
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">What's on your mind?</h3>
                    <p className="text-brand-muted text-xs">Tell us about your project, idea, or question.</p>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-wider text-brand-muted font-semibold block">Your Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, quantity needs, timeline, or any questions..."
                      rows={5}
                      className="w-full bg-cream-50 border border-black/8 px-4 py-3 rounded-xl text-sm placeholder:text-cream-500 text-brand-dark focus:outline-none focus:border-electricBlue resize-none leading-relaxed"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-cream-50 border border-black/5 rounded-xl p-4 text-xs text-brand-muted space-y-1">
                    <div className="flex justify-between"><span>Service:</span><span className="text-brand-dark font-semibold">{serviceOptions.find(s => s.id === formData.service)?.label}</span></div>
                    <div className="flex justify-between"><span>Name:</span><span className="text-brand-dark font-semibold">{formData.name}</span></div>
                    <div className="flex justify-between"><span>Email:</span><span className="text-brand-dark font-semibold">{formData.email}</span></div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-3 rounded-xl text-xs font-semibold text-brand-muted border border-black/5 hover:bg-cream transition-all cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.message}
                      className="flex-1 bg-brand-dark text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-charcoal disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sticker"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Request a Quote
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
