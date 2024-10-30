"use client";
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
          <h2 className="font-bold text-2xl  mb-[24px]">
            Sell Your Property With <br />{" "}
            <span className="font-extrabold text-2xl">SIANCHES</span>{" "}
          </h2>
          <div>
            <button className="bg-black text-white  py-2 px-5   flex items-center gap-2">
              sell your unit
              <Image
                src={"/assets/rightArr.png"}
                width={12}
                height={12}
                alt="fbb"
              />
            </button>
          </div>
        </div>

        <div>
          <Image
            src={"/assets/sellyourproperty.png"}
            alt="Sell Your Property Visual"
            width={656}
            height={408}
          />
        </div>
      </div>
    </section>
  );
}
