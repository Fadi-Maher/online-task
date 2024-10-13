import Image from 'next/image';

export default function OurPartner() {
  return (
    <div>
      <section>
        <p className="text-[32px] font-bold text-center">Our Partners</p>
        <div className="grid grid-cols-1 gap-6 m-auto items-center p-8   rounded-lg">
          <div className="overflow-hidden">
            <Image 
              src="/assets/croppedimg.png" 
              alt="Partner Logo"
              layout="responsive"  
              width={500}  
              height={300}  
            />
          </div>
        </div>
      </section>
    </div>
  );
}
