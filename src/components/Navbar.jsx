// import { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Instrek Technologies</h1>
//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           ☰
//         </button>
//         <ul className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block`}>
//           <li><a href="#about" className="hover:text-blue-400">About</a></li>
//           <li><a href="#services" className="hover:text-blue-400">Services</a></li>
//           <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Instrek Technologies</h1>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/005/928/014/non_2x/it-logo-design-for-information-technology-company-logo-design-vector.jpg" 
            alt="Instrek Logo" 
            className="h-10"
          />
          <ul className="hidden md:flex space-x-6">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  