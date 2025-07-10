
import { Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
<footer className="w-full bg-[#4A3655] py-6 mt-8">
<div className="text-center text-[#C4A7BB] text-sm">
  &copy; {new Date().getFullYear()} Trixie Meisye. Stay inspired, keep coding, and spread kindness!
</div>
</footer>
  );
}
