import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Send } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

export default function StickerPacks() {
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState([]);
  const [contactInfo, setContactInfo] = useState("");
  const [notified, setNotified] = useState(false);
  
  const handleCardClick = (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
    setClickCount(prev => prev + 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const emojiPool = ["✨", "✦", "💖", "🎨", "🚀", "🔥", "🌈", "👾", "👽", "🦄"];
    const newParticles = Array.from({ length: 8 }).map((_, idx) => {
      const angle = (idx / 8) * 360 + (Math.random() * 20 - 10);
      const speed = 40 + Math.random() * 40;
      const angleRad = (angle * Math.PI) / 180;
      return {
        id: Date.now() + "-" + idx + "-" + Math.random(),
        x, y,
        dx: Math.cos(angleRad) * speed,
        dy: Math.sin(angleRad) * speed,
        emoji: emojiPool[Math.floor(Math.random() * emojiPool.length)],
        scale: 0.5 + Math.random() * 0.8,
        rotate: Math.random() * 360
      };
    });
    setParticles((prev) => [...prev, ...newParticles]);
  };

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!contactInfo) return;
    setNotified(true);
    const emojiPool = ["✨", "✦", "💖", "📦", "🚀", "🎉", "🌈", "🔥", "⚡"];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;
    const newParticles = Array.from({ length: 24 }).map((_, idx) => {
      const angle = Math.random() * 360;
      const speed = 80 + Math.random() * 90;
      const angleRad = (angle * Math.PI) / 180;
      return {
        id: "notify-" + Date.now() + "-" + idx + "-" + Math.random(),
        x, y,
        dx: Math.cos(angleRad) * speed,
        dy: Math.sin(angleRad) * speed,
        emoji: emojiPool[Math.floor(Math.random() * emojiPool.length)],
        scale: 0.8 + Math.random() * 1.0,
        rotate: Math.random() * 360
      };
    });
    setParticles((prev) => [...prev, ...newParticles]);
  };

  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.dx * 0.05,
            y: p.y + p.dy * 0.05,
            dy: p.dy + 5,
            scale: Math.max(0, p.scale - 0.04),
            rotate: p.rotate + 5
          }))
          .filter((p) => p.scale > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div className="min-h-screen select-none">
      
      {/* Header — Beige */}
      <section className="bg-beige pt-32 pb-12 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-4">
            Online vault
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Stix and Vibes ", className: "text-gray-900 font-normal" },
              { text: "Creative Shop. ", className: "italic font-serif text-electricBlue" },
              { text: "Vault status: Prepping.", className: "text-gray-900 font-normal" }
            ]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] max-w-4xl mx-auto mb-4"
          />
        </div>
      </section>

      {/* Coming Soon Card — Dark */}
      <section className="bg-black py-16 px-6 relative z-10 flex flex-col items-center">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        
        <motion.div 
          onClick={handleCardClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative z-10 w-full max-w-2xl bg-[#101010] border-2 border-white/5 hover:border-primary/20 rounded-[2.5rem] p-10 sm:p-14 text-center cursor-pointer transition-all duration-500 shadow-2xl overflow-hidden group select-none h-[420px] flex flex-col justify-center items-center"
        >
          {/* Neon animated edge lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DEDBC8]/5 to-transparent group-hover:translate-x-full duration-1000 transition-transform pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Interactive visual particles */}
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute pointer-events-none font-sans text-lg sm:text-2xl select-none z-30"
              style={{
                left: `${p.x}px`,
                top: `${p.y}px`,
                transform: `translate(-50%, -50%) scale(${p.scale}) rotate(${p.rotate}deg)`,
                opacity: p.scale
              }}
            >
              {p.emoji}
            </span>
          ))}

          {/* Icon */}
          <div className="relative mb-6">
            <div className="size-16 sm:size-20 bg-neutral-900 border border-white/10 rounded-[1.5rem] flex items-center justify-center text-3xl sm:text-4xl shadow-xl z-10 relative group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
              🛍️
            </div>
            <Sparkles className="absolute -top-2 -right-2 text-neonYellow w-5 h-5 animate-pulse" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E1E0CC] mb-4">
            Store is coming soon
          </h3>
          
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mx-auto mb-6">
            The Stix and Vibes vault is getting stocked. The official shop will launch shortly. 
            <span className="block mt-2 font-mono text-[10px] text-primary/70 uppercase tracking-widest font-bold">
              Tap anywhere on this card to release the vibe! ✨ (Taps: {clickCount})
            </span>
          </p>

          {/* Lead Capture form */}
          {notified ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-sm bg-black/60 p-4 border border-emerald-500/20 rounded-2xl text-center space-y-2 mt-2 relative z-40"
            >
              <div className="text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider">⚡ Vibe Secured</div>
              <p className="text-gray-400 text-[11px] leading-normal">We'll alert you first when the vault drops. Stand by!</p>
            </motion.div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="w-full max-w-sm flex flex-col sm:flex-row gap-2 mt-2 relative z-40">
              <input 
                type="text" 
                required
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="EMAIL OR WHATSAPP NUMBER"
                className="w-full bg-[#161616] border border-white/10 px-4 py-3 rounded-xl text-xs font-mono placeholder:text-gray-700 text-[#E1E0CC] focus:outline-none focus:border-[#DEDBC8]"
              />
              <button 
                type="submit"
                className="bg-[#DEDBC8] text-black font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-xl hover:bg-white transition-all duration-300 shrink-0 cursor-pointer select-none"
              >
                Notify me
              </button>
            </form>
          )}
        </motion.div>

        {/* Manual Ordering Options */}
        <div className="relative z-10 max-w-xl w-full mt-8">
          <div className="bg-[#101010] border border-white/5 rounded-2xl p-6 text-center space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Can't wait? Secure manual drops:
            </h4>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <a 
                href="https://wa.me/917744020601" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-[#161616] border border-white/5 hover:border-emerald-500/20 rounded-xl transition-all font-mono text-[11px] text-[#E1E0CC]"
              >
                <span>💬 WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/stixnvibes" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-[#161616] border border-white/5 hover:border-pink-500/20 rounded-xl transition-all font-mono text-[11px] text-[#E1E0CC]"
              >
                <span>📸 Instagram</span>
              </a>
              <a 
                href="mailto:hello@stixnvibes.com" 
                className="flex items-center gap-2 px-4 py-2 bg-black/40 hover:bg-[#161616] border border-white/5 hover:border-[#DEDBC8]/20 rounded-xl transition-all font-mono text-[11px] text-[#E1E0CC]"
              >
                <span>✉️ Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
