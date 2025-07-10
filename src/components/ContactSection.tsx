import React from "react";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;
    const message = (form.elements[2] as HTMLTextAreaElement).value;
    const mailto = `mailto:trixie@example.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-8">I'd love to hear from you! Whether it's about collaboration, opportunities, or just to say hi!</p>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-xl shadow-lg p-8 max-w-lg mx-auto">
            <div>
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input className="w-full rounded border border-gray-300 px-3 py-2" type="text" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Your Email</label>
              <input className="w-full rounded border border-gray-300 px-3 py-2" type="email" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea className="w-full rounded border border-gray-300 px-3 py-2" rows={4} required />
            </div>
            <button type="submit" className="btn w-full">Send with Love</button>
          </form>
          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="font-bold">Email</div>
              <a href="mailto:trixie@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">trixie@gmail.com</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="font-bold">Instagram</div>
              <a href="https://www.instagram.com/trixie_meisye/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">trixie_meisye</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="font-bold">Linkedin</div>
              <a href="https://www.linkedin.com/in/trixie-meisye-1234567890/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600">Trixie Meisye</a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              <div className="font-bold">Location</div>
              <div className="text-sm text-gray-600">Depok, Indonesia</div>
            </div>
            <div className="bg-pink-100 rounded-lg p-4 shadow text-sm text-pink-700">
              <span className="font-bold">Fun Fact!</span> Books are my go-to escape when I'm not working on code or studying.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 