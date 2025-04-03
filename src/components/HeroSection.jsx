// const HeroSection = () => {
//     return (
//       <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-bold">Shaping the Future with AI & Blockchain</h1>
//         <p className="mt-4 text-lg md:text-xl">Empowering businesses with next-gen automation and IT solutions.</p>
//         <a href="#contact" className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">
//           Get in Touch
//         </a>
//       </section>
//     );
//   };
  
//   export default HeroSection;



const HeroSection = () => {
    return (
      <section 
        className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center px-4"
        style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/07/54/80/09/360_F_754800974_CXB9YRXM2ItqqUoEYouZnzctO9BTQhSv.jpg')" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Shaping the Future with AI & Blockchain
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Empowering businesses with next-gen automation and IT solutions.
        </p>
        <a 
          href="#contact"
          className="mt-6 bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          Get in Touch
        </a>
      </section>
    );
  };
  
  export default HeroSection;
  