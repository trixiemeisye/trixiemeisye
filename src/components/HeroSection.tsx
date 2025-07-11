import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 bg-[#f8f6fa] overflow-hidden">
      {/* Decorative dots */}
      <span className="absolute top-20 left-1/4 w-6 h-6 bg-[#cbb6c5] rounded-full opacity-30"></span>
      <span className="absolute bottom-24 right-1/4 w-4 h-4 bg-[#cbb6c5] rounded-full opacity-30"></span>
      <span className="absolute top-1/2 right-10 w-3 h-3 bg-[#cbb6c5] rounded-full opacity-30"></span>
      <span className="absolute bottom-10 left-10 w-3 h-3 bg-[#cbb6c5] rounded-full opacity-30"></span>

      {/* Avatar */}
      <div className="w-32 h-32 rounded-full bg-[#35323c] flex items-center justify-center text-5xl font-bold text-white shadow-lg mb-6 border-4 border-white">
        TM
      </div>
      {/* Name */}
      <h1 className="text-4xl font-extrabold text-[#35323c] mb-2 text-center">Trixie Meisye</h1>
      {/* Subtitle */}
      <p className="text-1xl text-gray-500 mb-2 text-center">Final-Year Computer Engineering Student</p>
      {/* Description */}
      <p className="flex items-center gap-2 text-lg text-[#a48b9e] mb-6 text-center">
        <span className="text-xl"> ♡</span>
        Passionate about technology, teaching, and creating beautiful solutions
        <span className="text-xl"></span>
      </p>
      {/* Buttons */}
      <div className="flex gap-4 mb-8">

        <a
           href="https://trixiemeisye.github.io/trixiemeisye/CV/Trixie Meisye_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#a48b9e] text-[#a48b9e] font-semibold bg-transparent hover:bg-[#f3e9f3] transition text-lg"
        >
          <FaRegHeart /> Open CV
        </a>
      </div>
      {/* Social Icons */}
      <div className="flex gap-8 mb-8 text-3xl text-[#35323c]">
      <a href="https://github.com/trixiemeisye" target="" rel="noopener noreferrer" className="hover:text-[#a48b9e]">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/trixie-meisye" target="_blank" rel="noopener noreferrer" className="hover:text-[#a48b9e]">
          <FaLinkedin />
        </a>
        <a href="mailto:trixiemeisye@gmail.com" className="hover:text-[#a48b9e]">
          <FaEnvelope />
        </a>
      </div>
      {/* Arrow Down removed */}
    </section>
  );
} 