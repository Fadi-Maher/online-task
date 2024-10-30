import Image from 'next/image';

export default function OurPartner() {
  return (
    <div>
      <section>
        <p className="text-[32px] font-bold text-center">Our Partners</p>
        <div className="grid grid-cols-1 gap-6 m-auto items-center p-8   rounded-lg">
          <div className="overflow-hidden m-auto block">
            <Image 
<<<<<<< HEAD
              src="/assets/ourpartners.png" 
=======
              src="/assets/croppedImage.png" 
>>>>>>> 6ac9e93a0829a8b974e259fa14950598620572c1
              alt="Partner Logo"
               width={1511}  
              height={259}  
            />
          </div>
        </div>
      </section>
    </div>
  );
}
