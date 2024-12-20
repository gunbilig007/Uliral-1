import { useRouter } from "next/router";
import React, { useState } from "react";

export default function haiih(){
    const router=useRouter();
return(
    <div className="h-screen w-screen bg-purple-900">
        <div className="w-screen h-12 bg-purple-900 flex pt-8">
            
            <div className=" text-lg text-white ml-8  ">11b Gunbilig</div>
            <div className="  ml-[1300px] text-lg text-white ">Buh hiisen taskuud</div>
        </div>
        <div className="h-screen w-screen bg-purple-900
        ">
            <div className="flex space-x-8 pt-24 justify-center ">
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("taskCV");}} >Business card</button>
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("task2");}}>Change color</button>
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("iweather");}}>Weather</button>
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("task3");}}>Search</button>
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("task4Json");}}>Grid</button>
            <button className="bg-slate-800 h-24 w-40 border-2 border-gray-500 hover:bg-slate-600  " onClick={()=>{router.push("try");}}>Serach by name</button>
           
            </div>
            
        </div>
    </div>
);

}
 