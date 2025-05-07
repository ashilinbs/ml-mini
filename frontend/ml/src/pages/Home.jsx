import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplet, Leaf, Sun } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  // Animation variants for icons
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  // Background gradient animation
  const bgVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { duration: 15, repeat: Infinity, ease: "linear" },
    },
  };

  // Footer link hover animation
  const linkVariants = {
    hover: { y: -2, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="h-screen w-100% bg-gradient-to-br from-green-100 via-emerald-200 to-teal-300 flex flex-col items-center justify-start"
      variants={bgVariants}
      animate="animate"

    >
      {/* Navbar */}
      <motion.nav
        className="w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">Irrigation Predictor</h1>
          <div className="flex gap-6">
            {["Home", "Features", "Contact", "Login"].map((link) => (
              <motion.a
                key={link}
                href={link === "Login" ? "/login" : `#${link.toLowerCase()}`}
                className="text-green-700 text-lg font-medium hover:text-green-900 transition"
                variants={linkVariants}
                whileHover="hover"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden w-full max-w-7xl h-[calc(100%-6rem)] mt-20 grid grid-cols-1 md:grid-cols-2 border border-white/30"
      >
        {/* Left Section: Content + Image + Icons */}
        <div className="flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-6 md:p-10 text-center bg-gradient-to-b from-green-50/80 to-white/50"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4 flex items-center justify-center gap-3">
              <motion.div whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.4 } }}>
                <Droplet className="text-green-700" size={36} />
              </motion.div>
              Sustainable Water Management
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md mx-auto">
              Precision irrigation techniques to boost productivity and conserve water resources efficiently.
            </p>

            <motion.div
              className="flex justify-center mt-6 gap-8"
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Sun, color: "text-yellow-500", label: "Weather" },
                { icon: Droplet, color: "text-blue-500", label: "Moisture" },
                { icon: Leaf, color: "text-green-600", label: "Growth" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={iconVariants}
                  whileHover="hover"
                  className="flex flex-col items-center"
                >
                  <item.icon className={item.color} size={36} />
                  <span className="text-sm md:text-base text-gray-600 mt-2 font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Section: Main Text and Button */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-8 md:p-12 flex flex-col justify-center text-center bg-white/50"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 mb-5 leading-tight">
            Welcome to <br />
            <motion.span
              className="text-green-900"
              animate={{ color: ["#15803d", "#065f46", "#15803d"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Irrigation Predictor
            </motion.span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto">
            Discover smart irrigation solutions driven by real-time weather and soil data analytics.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 25px rgba(0, 128, 0, 0.3), 0 0 20px rgba(0, 128, 0, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg transition duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              🌱
            </motion.span>
            Explore Now
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Additional Content Section */}
      <motion.div
        className="mt-12 px-6 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Our platform leverages cutting-edge technology to provide farmers with actionable insights for efficient water management.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Real-Time Data", description: "Access live weather and soil data for precise irrigation." },
            { title: "Cost Efficiency", description: "Save water and reduce costs with optimized irrigation schedules." },
            { title: "Sustainability", description: "Promote eco-friendly farming practices for a greener future." },
          ].map((item) => (
            <div key={item.title} className="bg-white/70 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-800 mb-4">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Home;