import Image from "next/image";
import React from "react";

export default function HomeSec3() {
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
              src="https://s3-alpha-sig.figma.com/img/67f1/e6f1/750e60db40ea390d29a5ae31d0b9bc04?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KlR-OsjLy1CH-bp8dV5uAtS3hBsAjFagLnnOIuO8jRuBy3g9zNK9dMzBPDyfNImWUlW5INWyRhueMDBYO6Rr9pI8Xsqr1dBV57UlExbisC3v2hcmiMMsGh0rCZYpxIWfPcdNT5EgaBacD7SFWcv4xZrljI4n7EfyTt-74eGAiDInj4vXbohY~whmyw-pLX-LfRHvw~YLmSqHI1217mvSfQyHzL2g2-VqKCmMZvjAyuJfj-WurieQqMwsTsw-A3wkO5e5EfYijt0ueT4AX~wTsDiLclf8v8DJhT8qPjqi7siU-HNIdZdZScdNcCvNbP6r5ECUEUFiCQ40a4f1lo4M8w__"
              alt="New Cairo Property"
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
              src="https://s3-alpha-sig.figma.com/img/3dd5/b51f/92c8a01610683e5cd593badfd9947bd2?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kPFe8ZJIsLmI3g~Fp5CVQTvtW6qtsxpLDB95PuoASOH4TPgNV8a69bH0h67nI2O8gnj7icYKe9Cogvc-LeE~bCVHw3MiR94vAApydMkYl-0OGcusOegX9Tas2IbAVQk9ujxI-9ON3kKgjoR~sLxHS2CymRogMc92qSObZy4zDmK-Q850Gy6PTyKeeV~ASl-RU5iLRRFDsg1UFnxxuPTwJt6LsWxIiL5tdirC19nIW~DRRMRlFprYsQtO3XAJm99NZsxRcdi1pyJhfMWbDT--PKYEqzitObI0aDfb7eeHHrZBe6rcQLlOI2bjagS76nOaHL90zR-wsX18hiK6K17XXw__"
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
              src="https://s3-alpha-sig.figma.com/img/d0d2/048a/6b527dced8aa9c2a2f2d7e86c92bb384?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=amm~bKe1iWbPfmkNSTKri71Dpaiv2yjClII6SqNw8nYjvwtxnSjYosP2gwhCyXhBddWD03x10wRxA6RQuZtCclkS3PPHHa60sQNRs5ZH1ojPN9UR7XbazXelymmcEnPtNxtSphAMOdPHBxNCzJY2oZ~aOJiuv1nIV8WJQwFdNL-MZLQdA6Z7mqWBMhIGXfg1-Xs04QcTSgp~gneIan7Gv28dXCGfQSMXdNdlIL15LbFNB8Cn~vfqF62N4~-~rtlkv911CKjfWdJMc2EZFYdWAk1hHf6DFpplpJ2Hdu5WeprrLfAH8xuU72~PtELn6ByfSpet7V602QSgH79Jwlk0mA__"
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
