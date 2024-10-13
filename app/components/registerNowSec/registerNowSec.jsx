import Image from 'next/image';

export default function RegisterNowSec() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2 m-auto items-center mb-14 p-28  rounded-lg w-3/4 bg-slate-100">
         
        <div>
          <Image 
            src="https://s3-alpha-sig.figma.com/img/c6e3/441b/3c0504d37b9c9b57af41121d727deeb1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZjR3UvK84kSGhqMkYYHYgnaCDSF9PX1hPynDJlXmK2AniQLD9Kyc3D0wZQ5wvCFG599twhqzqo1NUfIHD2qQB4F5cyIKqkTggTIV7EHz2BHMfhJuF6J5ncw81wfYkZrKzFnUwigBQ3mEN3vhK5d5hEnFceWuzGCXrO5mMNDhBwDhkp0KrJLwim07iSfq47H3ORFO4ObJE-CKRpwkGhFq7jaanUI8NjZqwlkyt8rxM7aI571XCXMRBIyWkJCPZGR3VK-Xp7DJQ5Ee7kz3im4D3hH3LIly0Ppau0BVcD8perEoyWEARDkWLjUFdHza3BYEABrLit5BAFyhPyoWj2iCg__" 
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
