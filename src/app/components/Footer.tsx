"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white pt-10 pb-8 relative mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold">Thanks for Visiting!</h2>
        <p className="mt-2">Feel the sea breeze and enjoy the waves 🌊</p>
      </div>
      {/* Removed absolute positioning and added padding to avoid overlap */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,64L48,106.7C96,149,192,235,288,245.3C384,256,480,192,576,170.7C672,149,768,171,864,160C960,149,1056,107,1152,96C1248,85,1344,107,1392,128L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
