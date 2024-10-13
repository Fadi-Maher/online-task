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
            src="https://s3-alpha-sig.figma.com/img/4bb8/38ee/5e5cf4cdfce28225b6c96a62d2f2b068?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lc6m-QDKSmiU-iXWnbvMGu3EjQ8wAQCJEWoqeTug7bMhcOxE3rberDZA7mo5GTX2ate9bfTasFHS8-wqLXbSSYWZddJ9A9Snzf4EIEsK0bz6oXPBbrDvffEUyyBbLAT-rInxyBIt6FQHeTSd~q1F6UDghBe83UswJrjPgJsEUNGX3hI8xSw4YeX3Pb9UmcWiZoluS362ReXfXMPbiKAqdmIup9gt1DTSTqusplo38Xe2rqrRlvpxBlsH5YoVylIkV7HH2ZXo~4-Z5SOViNNR1sbXDvYocLQtgT05s-JYOasv~~-05v4050Z9TDJA9wYHFwtRP6xz7VS~LW~uNBJyTA__"
            alt="Sell Your Property Visual"
            layout="responsive" 
            width={656}  
            height={408} 
          />
        </div>
      </div>
    </section>
  );
}
