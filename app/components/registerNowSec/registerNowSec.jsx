import Image from 'next/image';

export default function RegisterNowSec() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2 m-auto items-center mb-14 p-28  rounded-lg w-3/4 bg-slate-100">
         
        <div>
          <Image 
<<<<<<< HEAD
            src={"/assets/regiternow.png"}  
=======
            src="https://s3-alpha-sig.figma.com/img/c6e3/441b/3c0504d37b9c9b57af41121d727deeb1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iq6tlAGFAI3r6dnknqh7ueRtd0RbCrvncCje2gwZKt-P0CnjhgPW8OpjLjRNrsUbJ9Oaz-uRyQbYqmJHf637C52~rRC58yZSOXXHatyl08lARkql5IN-0UZ-7wDsaomWfu2whVfd5u-CY5AwKJrKeQx75hhebupGlXUaP3yYUlbc2-h4FtuIE9dd5FrcsM4zQhLKwdqKu0HEQGSvbnUE0Uu4VB9be9z7Ey3whh5e~WdAA1g0QT6JbEUPYdb1dCmFk2V91sSq-OIiQdSKhDYWtHdi1nzMOqOqKJfF2aiiaB92akiY5T6wnXOJofhx1f2oyMQ1SEL8W-fgVHlOwxBemQ__" 
>>>>>>> 6ac9e93a0829a8b974e259fa14950598620572c1
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
