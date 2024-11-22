import React, { useState } from "react";

export default function Task3() {
  const [search, setSearch] = useState("");

 
  console.log("search utga -->", search); 

  return (
    <div className="bg-slate-100 w-screen h-fyll">
        <p className="text-blue-600 flex justify-center text-5xl py-10">Facebook</p>
    <div className="flex flex-col h-screen items-center gap-4 py-5">
      <div className="h-1/3 w-96 bg-white rounded-lg shadow-xl p-4 flex flex-col gap-4">
        < p className="text-black text-center"> Log Into Facebook</p>

        <input
          type="text"
          placeholder="Email or Phone number"
          onChange={(test) => setSearch(test.target.value)}
          className="border border-gray-300 rounded px-3 py-2 "
        />
        <input
            placeholder="Username"
            value={search}
          className="border border-gray-300 text-black rounded px-3 py-2 "
        />
           <div className="h-10 w-full  rounded-md bg-blue-600 hover:bg-blue-800 flex items-center justify-center "> Log In</div>
           <div class="flex  justify-between ">
    <p class="text-blue-600 pl-10 hover:text-blue-900">forgot account?</p>
    <p class="text-blue-600 pr-10 hover:text-blue-900">sign up for facebook</p>
      </div>  
          </div>
      </div>


    </div>


 
  );


}

