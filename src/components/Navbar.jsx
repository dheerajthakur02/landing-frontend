
// const Navbar = () => {
//     return (
//       <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Instrek Technologies</h1>
//           <img 
//             src="https://static.vecteezy.com/system/resources/previews/005/928/014/non_2x/it-logo-design-for-information-technology-company-logo-design-vector.jpg" 
//             alt="Instrek Logo" 
//             className="h-10"
//           />
//           <ul className="hidden md:flex space-x-6">
//             <li><a href="#about">About</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>
//       </nav>
//     );
//   };
  
//   export default Navbar;


// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left Section: Logo and Company Name */}
//         <div className="flex items-center space-x-3">
//           <img 
//             src="https://static.vecteezy.com/system/resources/previews/005/928/014/non_2x/it-logo-design-for-information-technology-company-logo-design-vector.jpg" 
//             alt="Instrek Logo" 
//             className="h-10 w-10 rounded-lg"
//           />
//           <h1 className="text-2xl font-bold">Instrek Technologies</h1>
//         </div>

//         {/* Navigation Links */}
//         <ul className="hidden md:flex space-x-6">
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for open/close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/005/928/014/non_2x/it-logo-design-for-information-technology-company-logo-design-vector.jpg" 
            alt="Instrek Logo" 
            className="h-10 w-10 rounded-lg"
          />
          <h1 className="text-2xl font-bold">Instrek Technologies</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gray-800 text-center py-4 absolute top-full left-0 w-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <ul className="space-y-4">
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
