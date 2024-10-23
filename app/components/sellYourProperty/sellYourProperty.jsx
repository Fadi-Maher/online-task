"use client"
import Image from "next/image";
import React from "react";

export default function SellYourProperty() {
  const handleClick = () => {
     
    console.log("Sell your property clicked!");
  };

  return (
    <section className="flex-wrap item-right">
      <div className="grid grid-cols-1 md:grid-cols-2   m-auto item-center     w-3/4">
        <div className=" flex flex-col justify-center items-left  ms-10">
          <h2 className="font-bold text-2xl  mb-[24px]">Sell Your Property With <br /> <span className="font-extrabold text-2xl">SIANCHES</span> </h2>
          <div>
          <button className="bg-black text-white  py-2 px-5   flex items-center gap-2">sell your unit 
          <Image src={"/assets/rightArr.png"} width={12} height={12} alt="fbb"/></button>
          </div>
        </div>

        <div>
          <Image
            src="https://s3-alpha-sig.figma.com/img/4bb8/38ee/5e5cf4cdfce28225b6c96a62d2f2b068?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XQw~Cf4Z8qiL1lUmJes-0CoIgeXj5yc9mbEbZaOCOm7Dwz04gyuQlNPYeoRRkK3slJqLHJgL6JKvV8b9-ZpD5M26A913zTrUtGHARBwyUr7rWDrriw-crVhesGz-3beLcraqb8w76Xvr4D8o3kX7aNs-AYff4vPJpHm3jYyWSB8VuyTaFCD3SEoOZcXGpG6nLpRdWFhhIaqw7cjuP39RwIbUDTeT7EEF1R~dllwAhif~rO7SkCMNRBiZTWnvXYPdYUgV2iEhC9h9dYpnJm7o2B61uG7a9zBXCIvTWtXEaLOZJSXWidw67Fx5yPpQdoFzvM~9xiPJKeHKKPt3mmxZQA__"
            alt="Sell Your Property Visual"
             width={656}  
            height={408} 
            
          />
        </div>
      </div>
    </section>
  );
}
