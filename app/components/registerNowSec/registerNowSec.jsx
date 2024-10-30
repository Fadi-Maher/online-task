import Image from 'next/image';

export default function RegisterNowSec() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2 m-auto items-center mb-14 p-28  rounded-lg w-3/4 bg-slate-100">
         
        <div>
          <Image 
            src={"/assets/regiternow.png"}  
            alt="Property" 
            width={498}  
            height={351}  
            className="object-cover"  
          />
        </div>


         <div className=' m-auto'>
          <p className="text-2xl mb-4 font-extrabold">Become an ambassador</p>
          <button className="bg-black text-white p-2">Register Now</button>
        </div>

      </div>
    </section>
  );
}
