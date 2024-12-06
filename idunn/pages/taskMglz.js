

import { useState } from "react";

export default function Home() {
    const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      title: "Blitz",
      text: "blitz@example.com",
    },
    {
      id: 2,
      title: "Senzu",
      text: "senzu@example.com",
    },
    {
      id: 3,
      title: "Tec",
      text: "tec@example.com",
    },
    {
      id: 4,
      title: "Mzinho",
      text: "mzinho@example.com",
    },
    {
        id: 4,
        title: "Maaraa",
        text: "maara@example.com" ,
      },
  ];

  return (
    <div className="h-screen p-6 bg-gray-200">
      <h1 className="text-2xl font-bold text-center mb-6 flex justify-center text-black">Хэрэглэгчдийн жагсаалт</h1>
      <div className="text-center mb-6">
        <div>
            <input
          type="text"
          placeholder="Hunii ner bich"
          onChange={(test) => setSearch(test.target.value)}
          className=" border-gray-300 rounded px-3 py-2 text-black w-screen"
        />
        </div>
      </div>
      <div >
        
        {data.map((index) => (
          <div
            key={index.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 my-4 bg-white  ">
          
            <h2 className="text-lg font-semibold mb-2 text-gray-500 ">{index.title}</h2>
            <p className="text-gray-900 ">{index.text}</p>
            
          </div>
          
        ))} 
      </div>
    </div>
  );
}	