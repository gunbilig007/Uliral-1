import { useState } from "react";

export default function Home() {
  const [setData] = useState("");
  const data = [
    { id: 1, title: "Blitz", text: "Blitz@example.com" },
    { id: 2, title: "Senzu", text: "Senzu@example.com" },
    { id: 3, title: "Tec", text: "Tec@example.com" },
    { id: 4, title: "Mzinho", text: "Mzinho@example.com" },
    { id: 5, title: "910", text: "910@example.com" },
    { id: 6, title: "Maaraa", text: "maara@example.com" },
  ]

  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    const TextLower = search.toLowerCase(); 
    const titleLower = item.title.toLowerCase();
    return titleLower.includes(TextLower);
  });

  return (
    <div className="h-screen p-6 bg-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6 flex justify-center text-black">
        Хэрэглэгчдийн жагсаалт
      </h1>
      <div className="text-center mb-6">
        <div className="">
          <input
            type="text"
            placeholder="Hunii ner bich"
            onChange={(test) => setSearch(test.target.value)}
            className="border-gray-300 rounded px-3 py-2 text-black "
          />
        </div>
      </div>
      <div className="m-4">
        
      {filteredData.length > 0 ? (
  <div className="m-4">
    {filteredData.map((item) => (
      <div key={item.id} className="border bg-white border-gray-300 rounded-lg shadow-md p-4 my-4 ">
        <h2 className="text-lg font-semibold mb-2 text-gray-500 ">{item.title}</h2>
        <p className="text-gray-900 ">{item.text}</p>
      </div>
    ))}
  </div>
) : (
  <p className="text-center text-gray-500 w-full">
    Илэрц олдсонгүй 
  </p>
)}
        
      </div>
    </div>
  );
}