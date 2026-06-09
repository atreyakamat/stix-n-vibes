import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, HelpCircle, Laptop, Settings, Layers, CheckCircle } from 'lucide-react'
import { WordsPullUpMultiStyle } from '../components/WordsPullUpMultiStyle'
import { Footer } from '../components/Footer'

export default function CustomOrders() {
  const [stickerType, setStickerType] = useState("die-cut");
  const [size, setSize] = useState("3x3");
  const [finish, setFinish] = useState("matte");
  const [quantity, setQuantity] = useState(100);
  const [uploadedImage, setUploadedImage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const preloadedTemplates = [
    {
      name: "Cyber skull",
      url: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
    },
    {
      name: "Smile drop",
      url: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
    },
    {
      name: "Cosmic orb",
      url: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
    }
  ];

  const [selectedPreview, setSelectedPreview] = useState(preloadedTemplates[0].url);

  const getUnitPrice = () => {
    let base = 30;
    if (stickerType === "kiss-cut") base = 25;
    let sizeMult = 1.0;
    if (size === "2x2") sizeMult = 0.8;
    if (size === "3x3") sizeMult = 1.0;
    if (size === "4x4") sizeMult = 1.4;
    if (size === "custom") sizeMult = 1.8;
    let baseWithSize = base * sizeMult;
    if (finish === "glossy") baseWithSize += 6;
    if (finish === "extra-glossy") baseWithSize += 10;
    let discount = 1.0;
    if (quantity >= 1000) discount = 0.50;
    else if (quantity >= 500) discount = 0.65;
    else if (quantity >= 250) discount = 0.80;
    else if (quantity >= 100) discount = 0.90;
    return baseWithSize * discount;
  };

  const unitPrice = getUnitPrice();
  const subtotal = unitPrice * quantity;
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
        setSelectedPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => { fileInputRef.current.click(); };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    const text = `Hey Stix and Vibes! ⚡ I want to Place the Vibe! Here is my Custom Sticker Configuration:\n\n` +
      `- Cut Type: ${stickerType === "die-cut" ? "Die-Cut Sticker" : "Kiss-Cut Sticker"}\n` +
      `- Dimensions: ${size === "2x2" ? '2" x 2"' : size === "3x3" ? '3" x 3"' : size === "4x4" ? '4" x 4"' : 'Custom Sizing'}\n` +
      `- Surface Finish: ${finish.replace("-", " ").toUpperCase()}\n` +
      `- Order Quantity: ${quantity} units\n` +
      `- Unit Rate: ₹${unitPrice.toFixed(2)}\n` +
      `- Total Estimated Subtotal: ₹${subtotal.toLocaleString('en-IN')}\n\n` +
      `Let's get this rolling! 🌴`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917744020601?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen select-none">
      
      {/* Header — Beige */}
      <section className="bg-beige pt-32 pb-12 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold block mb-6">
            Custom configurator
          </span>
          
          <WordsPullUpMultiStyle
            segments={[
              { text: "Configure your custom stickers. ", className: "text-gray-900 font-normal" },
              { text: "Uploaded by you, ", className: "italic font-serif text-electricBlue" },
              { text: "cut by us.", className: "text-gray-900 font-normal" }
            ]}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.0] max-w-5xl mx-auto mb-6"
          />

          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Upload your design, configure dimensions, specify finishes, and preview your custom sticker with instant volume-based pricing in INR (₹).
          </p>
        </div>
      </section>

      {/* Configurator — Dark */}
      <section className="bg-black py-16 px-6 relative z-10">
        <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Control Panel Form (7 cols) */}
          <form onSubmit={handleOrderSubmit} className="lg:col-span-7 bg-[#101010] border border-white/5 rounded-[2rem] p-6 sm:p-10 space-y-8 relative overflow-hidden group">

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="size-20 bg-emerald-500/10 border border-emerald-500/20 text-[#DEDBC8] rounded-full flex items-center justify-center mx-auto text-4xl shadow-xl">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E1E0CC]">Configuration Locked</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Your custom sticker configuration has been locked and uploaded! Our crew will perform a pre-flight sanity check and reach out on your email or WhatsApp to confirm your manual mock-ups.
                </p>
                <button 
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="bg-[#161616] text-[#E1E0CC] hover:bg-[#DEDBC8] hover:text-black border border-white/5 hover:border-black font-semibold text-xs sm:text-sm px-6 py-3 rounded-full uppercase tracking-wider transition-all duration-300"
                >
                  Configure Another Vibe
                </button>
              </motion.div>
            ) : (
              <>
                {/* Step 1: Upload */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-mono text-gray-500">
                    <Upload className="w-4 h-4 text-electricBlue" />
                    <span>1. Choose or upload design</span>
                  </div>
                  
                  <div 
                    onClick={triggerFileSelect}
                    className="border border-dashed border-white/10 hover:border-electricBlue/50 bg-black/40 rounded-2xl p-6 sm:p-10 text-center cursor-pointer transition-colors duration-300 group/drop flex flex-col items-center justify-center gap-2"
                  >
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
                    <div className="size-12 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center text-gray-500 group-hover/drop:text-[#E1E0CC] transition-colors duration-300">
                      <Upload className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm mt-2 text-[#E1E0CC]">Drag & Drop your graphic</h4>
                    <p className="text-gray-500 text-[10px] sm:text-xs">PNG, JPG or SVG formats (Transparent background preferred)</p>
                  </div>

                  <div className="flex items-center gap-3 mt-4 bg-black/40 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 shrink-0">TEST TEMPLATE:</span>
                    <div className="flex gap-2">
                      {preloadedTemplates.map((tp) => (
                        <button
                          key={tp.name}
                          type="button"
                          onClick={() => { setSelectedPreview(tp.url); setUploadedImage(""); }}
                          className={`text-[10px] px-3 py-1.5 rounded-full border transition-all ${
                            selectedPreview === tp.url && !uploadedImage
                              ? 'bg-[#DEDBC8] text-black border-[#DEDBC8]' 
                              : 'bg-[#161616] text-gray-400 border-white/5 hover:border-white/10'
                          }`}
                        >
                          {tp.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Step 2: Dimensions */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-mono text-gray-500">
                    <Settings className="w-4 h-4 text-neonGreen" />
                    <span>2. Select Dimensions</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: "2x2", label: '2" x 2"', desc: "Pocket Size" },
                      { id: "3x3", label: '3" x 3"', desc: "Standard Vibe" },
                      { id: "4x4", label: '4" x 4"', desc: "Heavy Statement" },
                      { id: "custom", label: "Custom", desc: "Bespoke Scale" }
                    ].map((sz) => (
                      <button
                        key={sz.id}
                        type="button"
                        onClick={() => setSize(sz.id)}
                        className={`rounded-xl p-3 text-left border transition-all duration-300 ${
                          size === sz.id ? 'bg-[#161616] border-[#DEDBC8]' : 'bg-black/20 border-white/5 hover:border-white/10'
                        }`}
                      >
                        <h4 className="font-bold text-xs sm:text-sm text-[#E1E0CC]">{sz.label}</h4>
                        <p className="text-gray-500 text-[9px] mt-0.5 leading-none">{sz.desc}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Step 3: Cut Type */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-mono text-gray-500">
                    <Layers className="w-4 h-4 text-neonYellow" />
                    <span>3. Select Cut Geometry</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button type="button" onClick={() => setStickerType("die-cut")}
                      className={`rounded-2xl p-5 text-left border transition-all duration-300 ${stickerType === "die-cut" ? 'bg-[#161616] border-[#DEDBC8]' : 'bg-black/20 border-white/5 hover:border-white/10'}`}>
                      <h4 className="font-bold text-sm text-[#E1E0CC]">Die-Cut Stickers</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-normal">Cut directly through the backing paper, matching the exact shape of your graphic.</p>
                    </button>
                    <button type="button" onClick={() => setStickerType("kiss-cut")}
                      className={`rounded-2xl p-5 text-left border transition-all duration-300 ${stickerType === "kiss-cut" ? 'bg-[#161616] border-[#DEDBC8]' : 'bg-black/20 border-white/5 hover:border-white/10'}`}>
                      <h4 className="font-bold text-sm text-[#E1E0CC]">Kiss-Cut Stickers</h4>
                      <p className="text-gray-500 text-xs mt-1 leading-normal">Cut only through the vinyl layer, leaving a square protective backing sheet around it.</p>
                    </button>
                  </div>
                </motion.div>

                {/* Step 4: Finish */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-mono text-gray-500">
                    <Layers className="w-4 h-4 text-electricBlue" />
                    <span>4. Choose Premium Finish</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["matte", "glossy", "extra-glossy"].map((f) => (
                      <button key={f} type="button" onClick={() => setFinish(f)}
                        className={`rounded-xl p-4 text-center border uppercase tracking-wider font-mono text-xs transition-all duration-300 ${
                          finish === f ? 'bg-[#DEDBC8] text-black border-[#DEDBC8] font-bold' : 'bg-black/20 border-white/5 hover:border-white/10 text-gray-400'
                        }`}>
                        {f.replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Step 5: Quantity */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex justify-between items-center text-xs sm:text-sm uppercase tracking-widest font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="text-neonGreen text-xs font-mono">⚡</span>
                      <span>5. Quantity & Volume</span>
                    </div>
                    <span className="text-[#DEDBC8] font-sans font-bold text-base">{quantity} units</span>
                  </div>
                  <input type="range" min="50" max="2000" step="50" value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full accent-[#DEDBC8] bg-neutral-800 h-1.5 rounded-full cursor-pointer" />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>MIN: 50</span>
                    <span>TIERS: 250 (20% off) / 500 (35% off) / 1000+ (50% off)</span>
                    <span>MAX: 2000</span>
                  </div>
                </motion.div>

                {/* Summary */}
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <span className="text-gray-500 text-[10px] uppercase font-mono tracking-widest block">Order Configuration Summary</span>
                  <div className="bg-black/60 rounded-xl p-4 border border-white/5 text-xs font-mono space-y-2 text-gray-400">
                    <div className="flex justify-between"><span>CUT GEOMETRY:</span><span className="text-[#E1E0CC] font-bold">{stickerType === "die-cut" ? "DIE-CUT" : "KISS-CUT"}</span></div>
                    <div className="flex justify-between"><span>DIMENSIONS:</span><span className="text-[#E1E0CC] font-bold">{size === "2x2" ? '2" x 2"' : size === "3x3" ? '3" x 3"' : size === "4x4" ? '4" x 4"' : 'Custom'}</span></div>
                    <div className="flex justify-between"><span>SURFACE FINISH:</span><span className="text-[#E1E0CC] font-bold uppercase">{finish.replace("-", " ")}</span></div>
                    <div className="flex justify-between"><span>ORDER VOLUME:</span><span className="text-[#E1E0CC] font-bold">{quantity} UNITS</span></div>
                    <div className="flex justify-between pt-2 border-t border-white/5 text-[10px]">
                      <span>BULK DISCOUNT:</span>
                      <span className="text-neonGreen font-bold">
                        {quantity >= 1000 ? "50% OFF" : quantity >= 500 ? "35% OFF" : quantity >= 250 ? "20% OFF" : quantity >= 100 ? "10% OFF" : "BASE LEVEL"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-gray-500 text-[10px] uppercase font-mono tracking-widest block">Estimated Total</span>
                    <div className="flex items-baseline justify-center sm:justify-start gap-1">
                      <span className="text-[#E1E0CC] font-bold text-3xl">₹{subtotal.toLocaleString('en-IN')}</span>
                      <span className="text-gray-500 text-xs font-mono">(₹{unitPrice.toFixed(2)} / unit)</span>
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full sm:w-auto bg-[#DEDBC8] text-black font-bold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none">
                    <span>Place the Vibe</span>
                    <span>⚡</span>
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Right Side: Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101010] border border-white/5 rounded-[2rem] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-electricBlue/5 via-neonGreen/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 mb-6 text-gray-500 text-xs font-mono uppercase tracking-wider">
                <Laptop className="w-4 h-4 text-electricBlue" />
                <span>Live hardware preview</span>
              </div>

              <div className="relative w-full max-w-[320px] aspect-[16/10] bg-neutral-900 border-4 border-neutral-800 rounded-xl flex items-center justify-center shadow-2xl p-4 overflow-hidden">
                <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
                <motion.div style={{ transformStyle: 'preserve-3d' }} whileHover={{ rotateY: 10, rotateX: -10 }} className="relative cursor-grab z-10 shrink-0">
                  <div className={`flex items-center justify-center relative rounded-full transition-all duration-500 ${
                    size === "2x2" ? 'w-24 h-24' : size === "3x3" ? 'w-36 h-36' : size === "4x4" ? 'w-44 h-44' : 'w-40 h-40'
                  } ${
                    finish === "extra-glossy" ? 'bg-neutral-800 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)]' 
                    : finish === "glossy" ? 'bg-neutral-800 border-4 border-white shadow-xl'
                    : 'bg-neutral-800 border-2 border-white/80'
                  }`} style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                    {(finish === "glossy" || finish === "extra-glossy") && (
                      <motion.div animate={{ x: [-150, 150] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none z-20" />
                    )}
                    <img src={selectedPreview} alt="Custom Sticker Preview"
                      className={`w-full h-full object-contain rounded-full bg-neutral-900/60 p-2 ${finish !== "matte" ? 'brightness-110 contrast-105' : ''}`} />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
                  </div>
                </motion.div>
                <div className="absolute bottom-3 right-4 text-[8px] font-mono text-gray-700">STIX VIBES CORP.</div>
              </div>
              <div className="w-[340px] h-3 bg-neutral-800 border-b-2 border-neutral-700 rounded-b-lg shadow-xl" />

              <div className="w-full grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-white/5 text-center text-xs font-mono text-gray-500">
                <div>
                  <span className="block text-[10px] text-gray-600 uppercase">CUT</span>
                  <span className="text-[#E1E0CC] font-bold block mt-0.5">{stickerType === "die-cut" ? "Die-Cut" : "Kiss-Cut"}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-600 uppercase">SIZE</span>
                  <span className="text-[#E1E0CC] font-bold block mt-0.5">{size === "2x2" ? '2" x 2"' : size === "3x3" ? '3" x 3"' : size === "4x4" ? '4" x 4"' : 'Custom'}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-600 uppercase">FINISH</span>
                  <span className="text-[#E1E0CC] font-bold block mt-0.5 capitalize">{finish.replace("-", " ")}</span>
                </div>
              </div>
            </div>

            {/* Manual Contact Block */}
            <div className="bg-[#101010] border border-white/5 rounded-[2rem] p-6 sm:p-8 space-y-6 relative overflow-hidden group">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-mono uppercase tracking-wider">
                <HelpCircle className="w-4 h-4 text-neonYellow" />
                <span>Or order manually</span>
              </div>
              <h3 className="text-[#E1E0CC] font-bold text-lg">Direct Booking</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Have a specific request or prefer booking manually? Reach out on our verified channels:
              </p>
              <div className="space-y-3">
                <a href="https://wa.me/917744020601" target="_blank" rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-xl hover:border-emerald-500/20 hover:bg-[#161616] transition-all group/coord">
                  <div className="size-8 bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center font-bold text-emerald-400">💬</div>
                  <div>
                    <span className="text-[9px] text-gray-600 block uppercase font-mono">WHATSAPP</span>
                    <span className="text-[#E1E0CC] text-xs sm:text-sm font-semibold group-hover/coord:text-neonGreen transition-colors">+91 77440 20601</span>
                  </div>
                </a>
                <a href="https://instagram.com/stixnvibes" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-xl hover:border-pink-500/20 hover:bg-[#161616] transition-all group/coord">
                  <div className="size-8 bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center font-bold text-pink-400">📸</div>
                  <div>
                    <span className="text-[9px] text-gray-600 block uppercase font-mono">INSTAGRAM</span>
                    <span className="text-[#E1E0CC] text-xs sm:text-sm font-semibold group-hover/coord:text-pink-400 transition-colors">@stixnvibes</span>
                  </div>
                </a>
                <a href="mailto:hello@stixnvibes.com"
                  className="flex items-center gap-3 p-3 bg-black/40 border border-white/5 rounded-xl hover:border-[#DEDBC8]/20 hover:bg-[#161616] transition-all group/coord">
                  <div className="size-8 bg-neutral-900 border border-white/10 rounded-lg flex items-center justify-center font-bold text-amber-100">✉️</div>
                  <div>
                    <span className="text-[9px] text-gray-600 block uppercase font-mono">EMAIL</span>
                    <span className="text-[#E1E0CC] text-xs sm:text-sm font-semibold group-hover/coord:text-primary transition-colors">hello@stixnvibes.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
