import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function AboutPage() {
  // Team member images
  const teamMembers = [
    {
      id: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6ffa8NDdt8UWJeEA_uVqqHq1DzVTVs9S5gOlF5BTa1_KxS9ZBachmHeb7fdavBQcYLPPE1hfMBZ9JHS0d_Gey69p4Zxa2lXixsP-LxtUynLxe1GTVkUxvoGbP0hgSb-1XB91OVkw6FYR_c6ICyMWeN2lUUDQpunIV6avi2FsC9EUspSaSpNcXbTYoP1GbcZVmL3DvnfQ2oPehh3DoPVdKXLHJ1X6JHjUeQ1WKHG03onu8HgzyxBbue7fNEIZFNKfrLcwlLLqqhQI"
    },
    {
      id: 2,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCoTkEb44Y8rGjUK-PUATv-R2iM-jjOTZtBZn-SQEfFJnjde7i16ohIhjhxmrmqpJBPJys8ydLjo_aUvKQyHvR40Sv0eCQqvmd3zKMlBmWrjc-p7qu7dyxtjM8eMrSi7Yt4kxTGcHAxyOMKLFsPuo9cbM2IbjjhniO0iR2LKXTndqn2gZ5QO5Gx1nAWhfX_fgrvB0qhVbzJUfkk6erhxirxzcF2DaKv9UYJSxma6X_nuHAalCkEnBsXnvbyXub13Pu5zeejwPxtrQ"
    },
    {
      id: 3,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB51zLlVoQ7LnpU5g_8rQAGt0RdWcLuT8eSyNRggzjYKda4XO5B61VyQRSSa6GFnz-LEihwCSLLEcoLwd4eYXOC___qQl9Gb-hReLl2-vqbd5Z-KhZylO4bpSBBUAFJ9oBdH6vCJS1uNuyQxwLlGj-hyiNCAJFUvboU7E2s9WnwOsk3K-_2VtfTXAscEi-oiDyQVcPqTMXDWGEKH7D1Sv1uux3Zz9jhLqdfny1xdmFS6O-2gcNOyH43znwS1xw6e1WsSmiCBk_qtQQ"
    },
    {
      id: 4,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBf2YFkT84c6IbTju6X28Vu4HZP26p7Ldh1V978Cs-0hxZEqNxmEppvvP9H-oQiHeMo31g4XN1yehKLtjeuH-XlhZDEziK-QlJMTpwYvmlPLx4l5yWY7Wv5S6X-N_ueN93Dc6VZOBq70TuEjXuAED2tNJLPA1CeoYZpPkNcE82fIZE7_A6s64WsfFTF6K0M98pAKFkrYWnuko1BQynKzOG7iUWHXTsK7e7YJdQbMfdDmWY4cF4tGTRZN-C1UTBPjfEBI5WvfLpmnBY"
    }
  ];

  // Portfolio work images
  const portfolioItems = [
    {
      id: 1,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1LqYVGn7vPK3xcmvn4PVbexQYNpzrGqIAEYuhRBiOzGn_5n1z6iJ64s9xP4Yqf9-Az7P2WA4Xxxh-uxOtwKku5lpRgkvlKJRm0QKGCqVlORkxtKnAC1HOurFbr27rSi5mDFWxYPo-1j1JO3-MydD8oXRscArSBk23krpaT27ZKitiqRFPT_ZBMkDCialczWPtzbhZtodTwAQQcAn7Y-5kMUN15e4iI6IWncRZE5utaa64skIQkbHFbhN2wItno2keWIHONpxRCms"
    },
    {
      id: 2,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPerSUmwwRHWlsLuDyx4FX75jqtvd2QmLn8Usddz6tOV0woULf9tmcbtpoj2kYbsPeZlLGqu-TiFhgdrXgeLXhnbat1wslsikxARxhQBe9wFmwZO-JWEpLcjEcp0Nx1aCEWcHh88j0QiK_G858lpgMCnUYTCYV__QDRkwXBdY4X3t9NwsT2FNB54-LQolI7WMy42QC3OZwqz7TnyFs0J8Hrcs-tAeQ4ZHA75s3-ihywkIfzPMw3SudVc-wtHg-rYZYqFBv0efwcD4"
    },
    {
      id: 3,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeW0C8UUplRdgns4C6lqxO2ALmm5SRwilOiGQjOVBZqsJSnfzBbRvxcMIU5zVS0DnD8rUysH27In9f1O0QoXLpQeW9qc_B0mBIpCLmej0NjgD-M8r77ikZzenyU2G1HUIrW5fMo7ztPq8TAHjAhIYiItBP3MgscibZnsx9qY5v1yRjondijFr71CKebb-fVqQOhB9EEPKdkyv5cPl0qFARGUeKlzfKY6HHjiXSvU8f1mJhv6_stuBsckDf3pCAl0jPzxXTJ1hZgNU"
    }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      
      <main className="flex-1">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* About Us Header */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#181111] tracking-light text-[32px] font-bold leading-tight min-w-72">About Us</p>
            </div>
            
            {/* Introduction */}
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Stix N Vibes, we're more than just a sticker and polaroid agency; we're a hub for creativity and self-expression. Our journey began with a simple idea: to
              transform everyday objects into canvases of personal stories and memories. We believe that stickers and polaroids are not just decorative items but powerful tools for
              communication and connection.
            </p>
            
            {/* Our Story */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Founded in 2018, StixNVibes started as a passion project that quickly turned into something more. What began as creating custom stickers for friends and family
              evolved into a small business focused on helping people express their individuality through vibrant stickers and digital art.
              
              Each design begins as a sketch before being digitally refined, drawing inspiration from pop culture, nature, urban landscapes, and the vibrant energy of everyday life.
              The goal is to create pieces that resonate with people and help them express their unique personality.
            </p>
            
            {/* Our Values */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Values</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              StixNVibes is committed to:
              <br /><br />
              • <strong>Sustainability</strong> - Using eco-friendly materials whenever possible<br />
              • <strong>Creativity</strong> - Pushing boundaries with unique and original designs<br />
              • <strong>Quality</strong> - Creating products that are built to last using premium vinyl and eco-friendly materials<br />
              • <strong>Community</strong> - Supporting and collaborating with other artists
            </p>
            
            {/* Meet the Team */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our team is a diverse group of artists, designers, and photography enthusiasts, each bringing their unique talents and perspectives to Stix N Vibes. From crafting
              intricate sticker designs to curating stunning polaroid collections, we're united by our passion for creativity and our dedication to delivering exceptional products
              and experiences.
            </p>
            
            {/* Team Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {teamMembers.map(member => (
                <div key={member.id} className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${member.imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* Our Work */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Work</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Explore a selection of our favorite projects, showcasing the versatility and creativity of our stickers and polaroids. From personalized gifts to large-scale
              installations, our work reflects our commitment to quality and innovation.
            </p>
            
            {/* Portfolio Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {portfolioItems.map(item => (
                <div key={item.id} className="flex flex-col gap-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${item.imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="flex px-4 py-3 justify-center">
              <Link
                to="/projects"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">View Our Work</span>
              </Link>
            </div>
            
            {/* Materials & Quality */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Materials & Quality</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We believe in creating products that last, which is why we use only premium vinyl and eco-friendly materials. Each sticker is water-resistant, UV-protected to prevent fading, and made to withstand the elements. Quality control is a priority, and we personally inspect every item before it ships.
            </p>
            
            {/* Let's Connect */}
            <h2 className="text-[#181111] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Let's Connect</h2>
            <p className="text-[#181111] text-base font-normal leading-normal pb-3 pt-1 px-4">
              We love collaborating with other creatives and businesses. Whether you're looking for custom designs or wholesale options, we're always open to new opportunities. Thanks for stopping by and taking the time to learn a bit about StixNVibes. We hope our designs bring as much joy to your spaces as they do to ours!
            </p>
            
            {/* Contact Button */}
            <div className="flex px-4 py-6 justify-center">
              <Link
                to="/contact"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e92932] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default AboutPage