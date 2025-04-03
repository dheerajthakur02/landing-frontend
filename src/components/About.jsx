import { motion } from "framer-motion";
const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl font-extrabold text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Instrek Technologies
      </motion.h2>

      {/* Description with subtle animation */}
      <motion.p
        className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        At <span className="font-semibold text-blue-600">Instrek Technologies</span>, we are pioneering the future of 
        <strong> AI, IoT, AIoT, and Blockchain</strong>.  
        Our mission is to make <strong>India AI-ready</strong> through 
        <strong> cutting-edge technology solutions, strategic consulting, and workforce hiring</strong>.
      </motion.p>

      {/* Animated Image */}
      <div className="mt-8 flex justify-center">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xWw_ZbsYvpdlFC42a5jGXh9PTd418JcHlg&s"
          alt="Instrek Technologies AI"
          className="w-96 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </div>

      {/* Call-to-Action Button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a
          href="#services"
          className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Explore Our Services
        </a>
      </motion.div>
    </section>
  );
};

export default About;
