import { useState } from "react";

export default function Home() {
  
  const [grid, setGrid] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
    { id: 1, Name: "Gunbilig", LName: "Batenkh", Nas: "16" },
    { id: 2, Name: "Nomindari", LName: "Temuulen", Nas: "16" },
    { id: 3, Name: "Temuuge", LName: "Enkhdul", Nas: "16" },
    { id: 4, Name: "Temuulen", LName: "Baterdedne", Nas: "16" },
    { id: 5, Name: "Jargal", LName: "Batchuluun", Nas: "16" },
    { id: 6, Name: "ARiubayar", LName: "Chinbat", Nas: "16" },
    { id: 7, Name: "Munkhbayaasgala", LName: "Ganbaatar", Nas: "16" },
    { id: 8, Name: "Munkhnaran", LName: "Shinelundaa", Nas: "16" },
    { id: 9, Name: "Tuvshin", LName: "Batbaatar", Nas: "16" },
    { id: 10, Name: "Erdenejargal", LName: "Saruul-Od", Nas: "16" },
    { id: 11, Name: "Undrakh", LName: "Ganbaatar", Nas: "16" },
    { id: 12, Name: "Badraa", LName: "Damdinsuren", Nas: "16" },
    { id: 13, Name: "Siilen", LName: "Ganzorig", Nas: "16" },
    { id: 14, Name: "Erdenebold", LName: "Gantulga", Nas: "16" },
    { id: 15, Name: "Chinbiligt", LName: "Urantulga", Nas: "16" },
    { id: 16, Name: "Ganerdene", LName: "Ganbaatar", Nas: "16" },
    { id: 17, Name: "Khangarid", LName: "Erdenetuya", Nas: "16" },
    { id: 18, Name: "Bilguuntugs", LName: "Erdenetulga", Nas: "16" },
  ];

  const filteredData = data.filter(
    (item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.LName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div>
  <div className="w-screen h-20 flex justify-around items-center bg-purple-900">
        <p className="hover:text-gray-900">Dashboard</p>
        <p className="hover:text-gray-900">Classes</p>
        <p className="hover:text-gray-900">Libraries</p>
        <p className="hover:text-gray-800 font-bold">Members</p>
      </div>
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
        <div className="bg-gray-800 text-white">
    </div>
      <div className="mb-6 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Хайх..."
          className="border border-gray-300 bg-white p-3 rounded-lg shadow-md outline-none ring-2 ring-blue-500 w-full text-black mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-purple-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 transition w-full sm:w-auto"
          onClick={() => setGrid(!grid)}
        >
          {grid ? "Row View руу шилжих" : "Grid View руу шилжих"}
        </button>
      </div>
      <div
        className={`w-full max-w-4xl ${
          grid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.Name}
              </h2>
              <p className="text-gray-600">{item.LName}</p>
              <p className="text-gray-500">{item.Nas} настай</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full">
            Илэрц олдсонгүй
          </p>
        )}
      </div>
    </div>
</div>
  );
}