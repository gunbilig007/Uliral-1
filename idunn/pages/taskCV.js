import Image from 'next/image';

export default function idunn() {
  return (

   
    <div class="bg-gray-00">
      <div className=" bg-slate-800 h-56 rounded-lg ">
        <div class="mx-auto px-4 py-16">
            <div class="flex flex-col items-center">
            <Image src="/cv.jpg" alt='my image' width={400} height={400} className="rounded-lg mb-8" />
                <h1 class="text-4xl font-bold mb-4">Gunbilig</h1>
                <p class="text-lg text-gray-700 mb-8">Student / Gooner</p>
    
                <div className="flex space-x-4 mb-8">
            <a href="https://www.facebook.com/gunbilig.batenkh/" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Facebook</a>
            <a href="https://www.instagram.com/gunbiligbatenkh/" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Instagram</a>
            <a href="https://twitter.com/Gunbilig7" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">X</a>
          </div>
    
                <p class="text-2xl font-bold mb-4">Skills</p>
                <ul class="list-disc  text-gray-700 pb-6">
                    <li>Air duulna</li>
                    <li>Diamond in Lol</li>
                    <li>Ascendant peak in Valo</li>
                </ul>
    
                <h2 class="text-2xl font-bold mb-4">Experience</h2>
                <h1 className="text-gray-700 pb-8 "> National Archer</h1>
             
    
            
             
                  <div class="text-center mb-4">
                      <p class="text-xl font-bold mb-2">Follow me on Fansly</p>
                      <p class="text-gray-700">only 35 usd for the first 3 months</p>
                      <a href="#" class="text-blue-500 hover:underline">Link to fansly T-T</a>
                  </div>
            </div>
        </div>
      </div>
    </div>
 
  );
}