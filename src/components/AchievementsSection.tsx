export default function AchievementsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Achievements & Certifications</h2>
        <p className="text-center text-gray-600 mb-8">A showcase of my academic achievements, professional certifications, and contributions to the tech community</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-lg p-4 shadow">
            <div className="font-bold mb-2">Huawei ICT Competition 2022-2025 National Final</div>
            <div className="text-sm text-gray-600 mb-2">Certificate of participation in computing track - advanced national level selection in the prestigious competition</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-200 rounded px-2 py-1">Certificate</span>
              <span className="bg-gray-200 rounded px-2 py-1">Competition</span>
              <span className="bg-gray-200 rounded px-2 py-1">National level</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 shadow">
            <div className="font-bold mb-2">Provincial Outstanding Student Competition</div>
            <div className="text-sm text-gray-600 mb-2">Outstanding achievement recognized at provincial level in academic and extracurricular activities</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-200 rounded px-2 py-1">Achievement</span>
              <span className="bg-gray-200 rounded px-2 py-1">Provincial</span>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 shadow">
            <div className="font-bold mb-2">Book Author: Pembahasan Soul Kriptografi</div>
            <div className="text-sm text-gray-600 mb-2">Co-authoring and publishing a book on cryptography for students and enthusiasts</div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-gray-200 rounded px-2 py-1">Book</span>
              <span className="bg-gray-200 rounded px-2 py-1">Cryptography</span>
            </div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
    </section>
  );
} 