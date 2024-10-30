import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <div>
      <section className="flex items-center justify-center flex-wrap">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-12 p-4 md:p-8 rounded-lg w-full md:w-3/4">
          {/* Image Section */}
          <div className="w-full">
            <Image
<<<<<<< HEAD
              src={"/assets/description.png"}
=======
              src="https://s3-alpha-sig.figma.com/img/6892/cdc9/0bcbf2bb63d5cad8c9bec2178123309d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MfWea1o2lGXuNCj142nr~9kvSkNynOnZ6L6-LBxHpVgnwmedb6kZcCkRheq28jMPlCtEAxcLBGLUOeqYkRbbdbjGWR1WIvcrAYIwwbgktPLIfc0HftNJFIk5at26qGDhF2UPRHc6zmJwaQ2iJfYFYcdjJE9Bgpo~GgLsjbMrBgILNTw-tnLxZaO5i4TkuQM05Wk22Y2-N7nYBOfUABl36Oxf2t6eOK1WLNn2uyHR2SiAOlCdDToY2H-l6WEuHnA0Yw-1XTXBHc231VA-E2vT9jUYYheqpkn5I0Yz7mac-xmuR-ZHwhG6~3RH8R5MB19JTqbu4NvkA5q8wUM8vDQVBg__"
>>>>>>> 6ac9e93a0829a8b974e259fa14950598620572c1
              alt="Sample Image"
              className="rounded-lg shadow-lg w-full h-auto"
              width={570}
              height={660}
            />
          </div>

          {/* Text Section */}
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              We Help You Realize Your Dream Property
            </h2>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
              Fusce at dui tincidunt nulla semper venenatis at et magna. Mauris
              turpis lorem, ultricies vel justo sed, ultrices auctor nisi.
              <br />
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum.
              Fusce at dui tincidunt nulla semper.
            </p>

            <button className="bg-black text-white py-2 px-5 flex items-center gap-2">
              Read More
              <Image src={"/assets/rightArr.png"} width={12} height={12} alt="rarr" />
            </button>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex flex-wrap gap-8 md:gap-40 items-center justify-between mb-20 px-4 md:px-0">
          <div className="flex flex-col items-center gap-y-2">
            <Image src={"/assets/mangement.png"} width={40} height={30} alt="mange"/>
            <p className="text-center text-sm md:text-base">Property Management</p>
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <Image src={"/assets/secIcon.png"} width={40} height={18} alt="sec" />
            <p className="text-center text-sm md:text-base">Great Support</p>
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <Image src={"/assets/thirdIcon.png"} width={38} height={38} alt="third" />
            <p className="text-center text-sm md:text-base">Mortgage Services</p>
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <Image src={"/assets/forthIcon.png"} width={40} height={40}  alt="forth"/>
            <p className="text-center text-sm md:text-base">Great Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
