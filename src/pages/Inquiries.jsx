import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

export default function Inquiries() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Vibe Check");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const totalSteps = 3;
  const handleNext = (e) => { e.preventDefault(); if (step < totalSteps) setStep(step + 1); };
  const handleBack = () => { if (step > 1) setStep(step - 1); };
  const handleFormSubmit = (e) => { e.preventDefault(); setIsSent(true); setCopied(false); };
  const progressPercent = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen select-none flex flex-col">
      
      {/* Header — Beige */}
      <section className="bg-beige pt-32 pb-8 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            Get in touch
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Send us a message. ", className: "text-gray-900 font-normal" },
              { text: "We stick with you, ", className: "italic font-serif text-electricBlue" },
              { text: "no matter what.", className: "text-gray-900 font-normal" }
            ]}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] max-w-3xl mx-auto mb-4"
          />
        </div>
      </section>

      {/* Wizard — White card on beige */}
      <section className="bg-beige flex-grow flex flex-col justify-start py-10 px-6 relative z-10">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-white border border-black/5 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">

            {isSent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-6">
                <div className="size-20 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">Message Sent!</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="text-gray-900 font-bold">{name}</span>. Your inquiry has been compiled. Copy it and paste it into your preferred channel:
                </p>

                <button type="button"
                  onClick={() => {
                    const text = `Hey Stix and Vibes! ⚡ Inquiry:\n\n- Name: ${name}\n- Email: ${email}\n- Type: ${inquiryType}\n- Message: ${message}\n\nLet's catch a vibe! 🌴`;
                    navigator.clipboard.writeText(text).then(() => setCopied(true)).catch(() => {});
                  }}
                  className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    copied ? 'bg-emerald-500 text-white' : 'bg-black text-white hover:bg-gray-800'
                  }`}>
                  <span>{copied ? "📋 Copied!" : "Copy Inquiry"}</span>
                </button>

                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono mt-4">
                  <a href="https://wa.me/917744020601" target="_blank" rel="noopener noreferrer" className="bg-beige border border-black/5 p-2.5 rounded-lg text-center hover:bg-gray-100 text-emerald-600 transition-all block">💬 WhatsApp</a>
                  <a href="https://instagram.com/stixnvibes" target="_blank" rel="noopener noreferrer" className="bg-beige border border-black/5 p-2.5 rounded-lg text-center hover:bg-gray-100 text-pink-500 transition-all block">📸 Instagram</a>
                  <a href="mailto:hello@stixnvibes.com" className="bg-beige border border-black/5 p-2.5 rounded-lg text-center hover:bg-gray-100 text-gray-700 transition-all block">✉️ Email</a>
                </div>

                <button onClick={() => { setIsSent(false); setStep(1); setName(""); setEmail(""); setMessage(""); }}
                  className="bg-beige text-gray-600 hover:text-gray-900 border border-black/5 font-semibold text-xs px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-300 w-full mt-4 cursor-pointer">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-8">
                {/* Progress */}
                <div className="w-full bg-beige h-1.5 rounded-full overflow-hidden relative">
                  <motion.div initial={{ width: "33%" }} animate={{ width: `${progressPercent}%` }} className="bg-black h-full rounded-full" />
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="step-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <div className="space-y-1">
                        <span className="text-electricBlue font-mono text-[10px] uppercase tracking-wider block">Your details</span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">What should we call you?</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-mono text-gray-400">Name</label>
                          <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                            className="w-full bg-beige border border-black/10 p-4 rounded-xl text-sm placeholder:text-gray-300 text-gray-900 focus:outline-none focus:border-electricBlue" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase font-mono text-gray-400">Email</label>
                          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@example.com"
                            className="w-full bg-beige border border-black/10 p-4 rounded-xl text-sm placeholder:text-gray-300 text-gray-900 focus:outline-none focus:border-electricBlue" />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="step-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <div className="space-y-1">
                        <span className="text-neonGreen font-mono text-[10px] uppercase tracking-wider block">Inquiry type</span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">What's this about?</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {["Vibe Check", "Custom Collaboration", "Bulk Business Order", "Something Else"].map((type) => (
                          <button key={type} type="button" onClick={() => setInquiryType(type)}
                            className={`p-4 rounded-xl border text-left text-xs uppercase tracking-wider font-mono transition-all duration-300 ${
                              inquiryType === type ? 'bg-black text-white border-black font-bold' : 'bg-beige border-black/5 hover:border-black/10 text-gray-500'
                            }`}>
                            {type}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="step-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                      <div className="space-y-1">
                        <span className="text-neonYellow font-mono text-[10px] uppercase tracking-wider block">Your message</span>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">Tell us more</h3>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-mono text-gray-400">Message</label>
                        <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write your message here..."
                          className="w-full bg-beige border border-black/10 p-4 rounded-xl text-sm placeholder:text-gray-300 text-gray-900 focus:outline-none focus:border-electricBlue resize-none" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="pt-6 border-t border-black/5 flex justify-between items-center gap-4">
                  {step > 1 ? (
                    <button type="button" onClick={handleBack}
                      className="bg-beige text-gray-600 hover:text-gray-900 border border-black/5 px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center gap-2">
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (<div />)}
                  
                  {step < totalSteps ? (
                    <button type="button" onClick={handleNext} disabled={step === 1 && (!name || !email)}
                      className="bg-black text-white disabled:opacity-40 disabled:pointer-events-none hover:bg-gray-800 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2">
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button type="submit" disabled={!message}
                      className="bg-black text-white disabled:opacity-40 disabled:pointer-events-none hover:bg-gray-800 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2">
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
