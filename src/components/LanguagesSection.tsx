export default function LanguagesSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">Languages</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-100 rounded-lg p-4 shadow min-w-[180px]">
            <div className="font-bold mb-1">Bahasa Indonesia</div>
            <div className="text-sm text-gray-600">Native or bilingual proficiency</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 shadow min-w-[180px]">
            <div className="font-bold mb-1">English</div>
            <div className="text-sm text-gray-600">Professional working proficiency</div>
          </div>
        </div>
      </div>
    </section>
  );
} 