import Image from "next/image";
import React from "react";

export default function Properties() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center">
        <h3 className="text-center text-black text-2xl font-bold p-4">Properties</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-white mb-10 rounded-lg w-11/12 sm:w-3/4">
          {/* Property Card 1 */}
          <div>
            <Image
              style={{ height: '270px' }}
              className="mb-3 w-full"
               src={'/assets/properties1.png'}
              alt="New Cairo Property1"
               width={370}
              height={270}
            />
            <div className="flex justify-between p-2">
              <p style={{ fontSize: "20px", fontWeight: '400px' }}>New Cairo</p>
              <Image className="p-2" src={'/assets/downarr.png'} width={30} height={20} alt="down" />
            </div>
          </div>

          {/* Property Card 2 */}
          <div>
            <Image
              style={{ height: '270px' }}
              className="mb-3 w-full"
               src={'/assets/properties2.png'}    
               alt="October Property"
               width={370}
              height={270}
            />
            <div className="flex justify-between p-2">
              <p style={{ fontSize: "20px", fontWeight: '400px' }}>October</p>
              <Image className="p-2" src={'/assets/downarr.png'} width={30} height={20}  alt="downarr"/>
            </div>
          </div>

          {/* Property Card 3 */}
          <div>
            <Image
              style={{ height: '270px' }}
              className="mb-3 w-full"
               src={'/assets/properties3.png'}   
               alt="Seaside Property"
              width={370}
              height={270}
            />
            <div className="flex justify-between p-2">
              <p style={{ fontSize: "20px", fontWeight: '400px' }}>Seaside</p>
              <Image className="p-2" src={'/assets/downarr.png'} width={30} height={20} alt="sec3" />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-2 mb-9">
          <Image src={'/assets/larr.png'} width={18} height={15} alt="larr" />
          <Image className="p-1" src={'/assets/dots.png'} width={44} height={8} alt="dots" />
          <Image src={'/assets/rarr.png'} width={18} height={15} alt="riurr" />
        </div>
      </section>
    </div>
  );
}
