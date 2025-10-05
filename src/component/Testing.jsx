import { motion } from "framer-motion";

const Testing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-rose-200 text-gray-800 font-serif">
      {/* Hero Section */}
      {/* <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-10 bg-repeat"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold text-rose-700 mb-6 drop-shadow-sm"
        >
          Luxury Tailoring at Your Doorstep
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl max-w-3xl mb-8 text-gray-700"
        >
          Indulge in elegant custom designs, fine alterations, and premium fabrics — all with the comfort of home pickup and delivery.
        </motion.p>
        <motion.div whileHover={{ scale: 1.08 }}>
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white text-lg px-8 py-4 rounded-full shadow-xl cursor-pointer">
            Book Your Luxury Fit
          </div>
        </motion.div>
      </section> */}

      {/* Services Section */}
      {/* <section className="py-20 px-8 bg-white relative">
        <h2 className="text-4xl font-semibold text-center mb-14 text-rose-700">
          Our Exclusive Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "✂️",
              title: "Haute Couture",
              desc: "Bespoke dresses and suits crafted to perfection for your special moments.",
            },
            {
              icon: "👔",
              title: "Luxury Alterations",
              desc: "Delicate and precise adjustments for a flawless, refined look.",
            },
            {
              icon: "✨",
              title: "Premium Fabrics",
              desc: "Choose from an exclusive collection of silks, satins, and fine materials.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl shadow-lg hover:shadow-2xl transition bg-pink-50 p-8 text-center"
            >
              <div className="flex justify-center mb-6 text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-rose-700">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="py-20 px-8 bg-gradient-to-br from-rose-50 to-pink-100">
        <h2 className="text-4xl font-semibold text-center mb-14 text-rose-700">
          Style Inspirations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "https://s.alicdn.com/@sc04/kf/A3404abf199d7420285a7abf26e2cafe8N/Indian-Pakistani-Designer-Punjabi-Kaftan-Dhoti-Salwar-Bollywood-Party-Wear-Dress-Clothes-Selling-Dress-Women-Wedding-Wear.jpeg",
            "https://www.libas.in/cdn/shop/files/magenta-self-design-silk-blend-straight-kurta-with-trousers-and-dupatta-libas-1.jpg?v=1756117676",
            "https://m.media-amazon.com/images/I/812PtChl2yL._UY1100_.jpg",
            "https://m.media-amazon.com/images/I/71Tfvfnqu6L._UY1100_.jpg",
            "https://www.shoplibas.com/cdn/shop/files/48014.jpg?v=1748350581",
            "https://www.shoplibas.com/cdn/shop/products/48179A_1.jpg?v=1748351364",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Delivery Highlight */}
      {/* <section className="py-24 px-6 text-center bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-6xl mb-8">🚚</div>
          <h2 className="text-4xl font-bold mb-6">
            Complimentary Home Pickup & Delivery
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Experience the luxury of effortless tailoring. We ensure your outfits are collected, tailored, and delivered with care.
          </p>
          <div className="inline-block bg-white text-rose-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-xl cursor-pointer">
            Schedule a Pickup
          </div>
        </motion.div>
      </section> */}

      {/* Footer */}
      {/* <footer className="py-10 text-center text-gray-600 bg-white border-t">
        <p className="italic">© 2025 Tailor4U Luxe. Crafted with elegance.</p>
      </footer> */}
    </div>
  );
};

export default Testing;
