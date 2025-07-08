import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Portfolio() {
  // Customer installations images
  const customerInstallations = [
    {
      id: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwL0vGAR_ktjy9HUrZPN3BqjwCVnK4U4t98Rott8ab_wS3Y9mMXeDYLefq-qVFbTeJMPGA-6m6H6ZhGYZf23jXBWoSQlNyLqw2QzsJdnve7xp88CugE7r_reSD0RbHqtIQzrLsjqn66rsFagRgXfvwBsTqk4C2aEYOpXY1VqDU39BrOYJ2LBlMi_j3a6hTAQVRqHMXLoIFKDDZulHfDzAt_adDriH-mtijHpf6ON6x1obadsCaTPEiYYsxAZ_yZR1_YwaeRz5Te1k"
    },
    {
      id: 2,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvkWowVMlCssPtFPhZgPVX3Bs-wnOYJ2xpfx7tEC3oqE9Mzx1IJifT3yTqCMjOg8xOi04e9H4LhrKglXOblCb3PLWQHRTIRvtDGbTFUD1YWA8SKwYsaWMyglozXbMb0THUv6Otn-9bS1gRMZwEQXhLIGdeBdjYQ-UuojTjWB5LvO7uhoW7QJEPbCJosCC8ResgZh7EEYQfszcC3vUH2Hy2GD7Tt5NYUef6jQ9OX7MB5XO8ayJtxoFgle1T161WoEk0B0OHkQk9xuw"
    },
    {
      id: 3,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYfEkANEmsWLULdnoev1RyLq7RNo3Ac9uSigkJIziJK0vwhADJw5OXVvKlcvPQxvMevVJta5oF3IEYZJSKR8vZuxFsxtv3vcd9-d24TBVXzfQVHAIdgtKTGujBtwmJl4HO6XiAATagElGmmJgSaHjq6S78NaTtIIp_uZJ3gUd6BytU52OOjEW5lAMe4qnf82Gqnz3z-3YZByyul89rsQrbBWt7Qv8jxg6rwrfavDZYzKiU-tasFCsr97AbyzlD4utWazFFUOkIN2k"
    },
    {
      id: 4,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHAIEdeu0LYoUYhxamh5v21YX3pXSDoeYGn9ONu4jeaYb2Hui8FrB0G_MYy2IoJTI6oUFN5bkNYITnls04fPFS4APt_92-zUDSXBbulOzueRTXds-QH0QHLs2uqh8wkRzUBZiYkyilW6mZRSXhkaUy0q8gG7JwOq93J1IDM8lsxRW0PJ3MT0mw-J8wFh-Zys7Irb8bOcKgESph0iRbv_ZWg7VZU51Uxk3CxH9UtmhmCsl6Yg6A9Sdc3l0uag72YkbChS4OjKqz3rc"
    },
    {
      id: 5,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoB3eYoseS16SIJ8nowtZA6Sf2T0eCBCnNa12xJ5d56YzagRVyb-CY2UKk6-TPN2lwP5L0xhFsYb1L3DlDjYPKvYsSRkfNd6umjCa9zRmefLto8sRWUEj9uKsOcv-5H53p6_9mEnz_uav4mH0q7hzVgyyjt94w7ez7uY7uBmnHXG_FtVX5w3KPJeVZ9rJF9gijQyWiHp_rk-5mwPAtm4AWED0I2ChrQIrnY9uogCstlJnyTMDYAd_agiAgAgvAgR45FP_vKVHOVhI"
    },
    {
      id: 6,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiwFVCy7YOT-cs7ZG3mBI8ADWPnzsYQ_wq717PDOFsU7tlW8dm_CF06un6SZXH82TbhCPiXsFYBDqsq885zoHQtPu49sLdIDJ5r6EkcPMsgjWaDlMBF6pIw5c84KCiP_mJDmG_MyadGldS-0_BYG6tVOt38vvf4oRutPHCbpb33EY-pnsU8NEIT-L7VrQxTIiO3_rOEjX5phSXFJ55bgo7YcDVQ6vv69Fqo19Ozig9SxPsSAF09IuN8y61pusHs5ge6-FeXcHnzVE"
    }
  ];

  // Event collaborations
  const eventCollaborations = [
    {
      id: 1,
      title: "Cafe Reel Contest",
      description: "A contest where participants created reels showcasing their favorite cafe moments using Stix N Vibes products.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg15WcwZTYZTi-a8hFESnUFnGTKq9d-_FPjqxFyqm5Z-BDKP1UuEKLbaHkaHHUx3auuN37folEUZrc1EGwNuQtF2B_2L3rCffaC0NTTSm9sdI40a4jhLmHedgPoWf1Y0uHBLHYzBdiJQDzVki4AhWH7nxWLpbyA8dghVB_w6yFdZ6bNH4pRNa4_9CNM_II0te9zOVW0G1PaT1UxO77Vl2Q0Ur-GpvYUMzbVRD3XAA84044Pf0wzcwcnqs8Fuleg46ObyuYk0ClIDo"
    }
  ];

  // Video showcase
  const videoShowcase = {
    thumbnailUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR8dbghssFoV-UUq8lBLrePtBDVE-OXHp8COVXPV7Yuu4G08dkn5rBARS9H2npBC1RjNx7kREca-OEnXxs2pCZuv7drXwT8lA41ZWkV9wV6pkUg7LLxuPx4GBpfEHd24B6QQ34VaYA5N_buBPES6hUHSUtKTPA_xXlg5p_x0SMb1fsRi6iCZ-KsH8QYy7ZhNUWK9jKBb5VziQKzkoZxLjPrIcEOegc09Lkbo-pLMTMq9KM-08l2i8L3ZVA1r3EXQjeej6XesFlL1E",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  };

  return (
    <section className="py-5">
      <div className="flex flex-col max-w-[960px] flex-1">
        {/* Portfolio Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-[#181111] tracking-light text-[32px] font-bold leading-tight min-w-72">Portfolio</h1>
        </div>
        
        {/* Introduction */}
        <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Explore the creative world of Stix N Vibes through our portfolio, showcasing real-world applications of our stickers and polaroids. 
          See how our customers use our products to personalize their spaces and express their unique styles. From custom installations to 
          event collaborations, our portfolio highlights the versatility and creativity of our offerings.
        </p>
        
        {/* Customer Installations */}
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Customer Installations
        </h2>
        
        <motion.div 
          className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {customerInstallations.map((item) => (
            <motion.div 
              key={item.id} 
              className="flex flex-col gap-3"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl cursor-pointer"
                style={{ backgroundImage: `url("${item.imageUrl}")` }}
                onClick={() => window.open(item.imageUrl, '_blank')}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Event Collaborations */}
        <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Event Collaborations
        </h2>
        
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {eventCollaborations.map((event) => (
            <motion.div 
              key={event.id} 
              className="flex flex-col gap-3 pb-3"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{ backgroundImage: `url("${event.imageUrl}")` }}
              ></div>
              <div>
                <p className="text-[#181111] text-base font-medium leading-normal">{event.title}</p>
                <p className="text-[#886364] text-sm font-normal leading-normal">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Video Showcase */}
        <div className="p-4">
          <motion.div
            className="relative flex items-center justify-center bg-[#181111] bg-cover bg-center aspect-video rounded-xl p-4 cursor-pointer"
            style={{ backgroundImage: `url("${videoShowcase.thumbnailUrl}")` }}
            onClick={() => window.open(videoShowcase.videoUrl, '_blank')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button 
              className="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/40 text-white"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-inherit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
                  ></path>
                </svg>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio
