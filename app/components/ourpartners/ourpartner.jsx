import Image from 'next/image';

export default function OurPartner() {
  return (
    <div>
      <section>
        <p className="text-[32px] font-bold text-center">Our Partners</p>
        <div className="grid grid-cols-1 gap-6 m-auto items-center p-8   rounded-lg">
          <div className="overflow-hidden">
            <Image 
              src="/assets/ourpartners.png" 
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
