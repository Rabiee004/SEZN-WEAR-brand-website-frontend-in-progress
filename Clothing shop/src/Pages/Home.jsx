import { useRef } from "react";
import Silk from '../component/Silk.jsx';
import StarBorder from '../component/StarBorder';
import ImageSlider from "../component/slider.jsx";
import { Link } from "react-router-dom";



function Home() {
  const collectionsRef = useRef(null);
  const Turath1 = [
    "/Images/Turath1_1.jpg",
    "/Images/Turath1_2.jpg",
    "/Images/Turath1_3.jpg",
  ];
  const Turath2 = [
    "/Images/Turath2_1.jpg",
    "/Images/Turath2_2.jpg",
    "/Images/Turath2_3.jpg",
  ];
   const Turath3 = [
    "/Images/Turath3_1.jpg",
    "/Images/Turath3_2.jpg",
    "/Images/Turath3_3.jpg",
  ];
 

  const handleScrollToCollections = () => {
  const el = document.getElementById("collections");
  if (el) {
    const offset = 130; // adjust this value to stop earlier (px)
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Silk background */}
      <section className="relative min-h-[100svh] flex items-center justify-center text-center text-white px-6 md:px-16">

  <div className="absolute inset-0 z-0">
    <Silk
      speed={3.2}
      scale={1.1}
      color="#4c4950"
      noiseIntensity={0.3}
      rotation={0}
    />
  </div>

  <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl">
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-playfair mb-6">
      Defined by the Season
    </h1>

    <p className="text-base sm:text-lg md:text-2xl mb-10 max-w-2xl">
      Elevated essentials crafted for every moment. SEZN Wear merges art, style, and timeless design.
    </p>

    <StarBorder
      as="button"
      className="px-7 py-3.5 sm:px-8 sm:py-4 bg-white text-black font-playfair text-base font-semibold hover:bg-white/90 transition"
      color="white"
      speed="6s"
      thickness={1}
      onClick={handleScrollToCollections}
    >
      Shop Collection
    </StarBorder>
  </div>
</section>
      {/* Featured Collection Section */}
      <section
        ref={collectionsRef}
        className="text-white mt-32 px-6 md:px-16 relative z-10"
        id="collections"
      >
        <h3 className="text-4xl font-playfair mb-12 text-center">
          Featured Collection
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition">
            <div className="h-80 bg-gray-500 rounded-lg mb-4"> <ImageSlider images={Turath1} /></div>
            <h4 className="text-xl mb-1">Turath, the first piece.</h4>
            <p>$40</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition">
            <div className="h-80 bg-gray-500 rounded-lg mb-4"> <ImageSlider images={Turath2} /></div>
            <h4 className="text-xl mb-1">Turath, Second piece.</h4>
            <p>$40</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition">
            <div className="h-80 bg-gray-500 rounded-lg mb-4"><ImageSlider images={Turath3} /></div>
            <h4 className="text-xl mb-1">Turath, the Thrid!</h4>
            <p>$40</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-white mt-32 px-6 md:px-16 text-center max-w-3xl mx-auto relative z-10">
        <h3 className="text-4xl font-playfair mb-6">Our Philosophy</h3>
        <p className="text-lg md:text-xl">
          SEZN Wear is rooted in simplicity, form, and seasonal identity. We create timeless silhouettes with modern intention — pieces that evolve with you.
        </p>
      </section>

      {/* Newsletter */}
      <section className="text-white mt-32 px-6 md:px-16 text-center relative z-10">
        <h3 className="text-3xl font-playfair mb-6">Join the SEZN Community</h3>
        <form className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-black w-full md:w-96"
          />
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-white mt-32 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center py-10 relative z-10">
        <div>
          <h4 className="text-xl font-playfair mb-2">SEZN Wear</h4>
          <p>© 2026 SEZN Wear. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com/sezn_wear/">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
      </footer>

    </div>
  );
}

export default Home;
