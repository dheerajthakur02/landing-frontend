
import { motion } from "framer-motion"; // For animations

const services = [
  {
    name: "Conversational AI",
    img: "https://images.pexels.com/photos/30869081/pexels-photo-30869081/free-photo-of-scrabble-tiles-form-words-google-and-gemini.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Agentic AI",
    img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2024/10/What-is-the-Tool-Use-Pattern-in-Agentic-AI_.webp",
  },
  {
    name: "AIoT Solutions",
    img: "https://www.dusuniot.com/wp-content/uploads/2024/07/aiot-artificial-intelligence-of-things-600x400.jpg",
  },
  {
    name: "Blockchain Solutions",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMI2hNhwoVkdSOTVd9EtHqly_bMS9i3JlY3Q&s",
  },
  {
    name: "Smart City Innovations",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXR9A3ZUyH7DySBQW2d2N61ofSKpVbQKWQOw&s",
  },
  {
    name: "Digital Transformation",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb96UEG2Ecz6QkkhhDOBb9C7arF1iE1zCVDg&s",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }} // Hover animation
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.img})` }}
            ></div>

            {/* White Transparent Text Background */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-gray-900 px-4 py-2 rounded-md shadow-md">
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
