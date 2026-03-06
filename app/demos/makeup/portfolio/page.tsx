"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const GALLERY_IMAGES = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhAJ8Xk43u2xQVS7mnI_mNgtuVRMlSr8lWepns2sUPHPvxSoZMSsrfG-IHQ5xOxyhtY2GFUEeJhRdvzoaTZDCuGEKr70oRRU0FC0_8A-NL4btXjjjI9dKjtl_7LgAOHe6R5tuwKgBR-QUFam_tL626YyF0I8DAM1N5AVX_q18Z23jpgHDMuvKxK9YrXWKJp-sqZ_PsKVE9DN53AN6Ruvl8z7-UVW5h8sj167w9Mm4JciX-0TW-mi2ZnSKL9xXoR2ePyTJ9NN54dHE",
    title: "Bridal Editorial",
    category: "Luxury Wedding",
    size: "md:col-span-2 md:row-span-2"
  },
  {
    url: "https://www.glam.com/img/gallery/how-to-transition-your-summer-golden-hour-makeup-to-fall-2023/intro-1696178105.jpg",
    title: "Golden Hour",
    category: "Editorial Fashion",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://lipstickqueen.com/wp-content/uploads/2025/05/elegant-makeup-looks.jpg",
    title: "Soft Glam",
    category: "Evening Gala",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm8i4Q4PlV3RMShq9iUR71j-Cel0P6lf6FrtkCSY15snjSlsmifrCIfs65_9ydJP8YQeI2oDBtUz3CTZY565xjv8NDMN7LACA2pdWZlGpHq3EqOcHf-X3wTo6gEDNyZ4szQMPYyTiuTorBT1mOgsofyR5xSJZpr9MeTN8bhLc5oEafRVhK4pucTKyaJU62Md_Cm0nD-o-x8QvtP-tKJnn_gFzgXwQj0A1TuBC2Ab640DUlep8RIQBYC72FHtZWkiNl9nJ-UhyEWOo",
    title: "Flawless Base",
    category: "Beauty Portrait",
    size: "md:col-span-1 md:row-span-2"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuArnGLI4mV_I-qR8pxHsfqsBKCRHpgF7LGLPZoIq4-V7fmUpbTYTQJbXx3su6nML3KgPE8ZhJnpOanxAet-W9fe7aZM6vKAizhgwfVRolLfVBiVJi9cdLN5RaKl-BPU9rLTBA_dIqSRj9OS4X_mw6atAYIZ4vJSAgdHguFPqECi7V1FKMyDUpcnZbk69y6VcBPGqWJq5E3hlf32-DM__213px4ZAzT8FSk2lSYRCTE2DmoaFi1axRvZFJb9g1uAkFqxBcWVVstDxZ8",
    title: "The Atelier",
    category: "BTS Artistry",
    size: "md:col-span-1 md:row-span-1"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#D4AF37] font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            The Gallery
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif italic text-[#2D2424]"
          >
            Client Transformations
          </motion.h3>
        </div>

        {/* Masonry-inspired Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-[2rem] bg-slate-100 ${img.size}`}
            >
              {/* Image with subtle hover zoom */}
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Luxury Overlay */}
              <div className="absolute inset-0 bg-[#2D2424]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="text-white"
                >
                  <p className="text-[10px] uppercase tracking-widest font-bold text-[#EAC7C7] mb-2">
                    {img.category}
                  </p>
                  <h4 className="text-2xl font-serif italic">{img.title}</h4>
                  <div className="mt-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 bg-[#FDF8F5] rounded-[4rem] flex flex-col md:flex-row items-center gap-16 border border-[#EAC7C7]/20"
        >
          <div className="md:w-1/2">
            <img
              src="https://images.fresha.com/locations/location-profile-images/1092709/1866093/dde36801-6af8-4c74-9e1d-eebf66474aff.jpg?class=venue-gallery-mobile&f_width=3840"
              alt="Luxury Studio"
              className="rounded-[3rem] shadow-2xl rotate-[-2deg]"
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="text-4xl font-serif italic mb-6">The Sanctuary</h4>
            <p className="text-slate-600 font-light leading-relaxed mb-8">
              Located in the heart of Los Angeles, our private studio is designed to be a haven of
              relaxation and luxury. Every detail is curated to ensure your experience is as
              flawless as your final look.
            </p>
            <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-[#D4AF37] pb-2 hover:text-[#D4AF37] transition-colors">
              Explore the Studio
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}