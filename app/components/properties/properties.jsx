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
              src="https://s3-alpha-sig.figma.com/img/67f1/e6f1/750e60db40ea390d29a5ae31d0b9bc04?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyFV2UaJRPwbB6tjMWzCQzeGGDf4Y5CmbmSbyx-hwQ9dWnB7cUCp9y4bbmy7iIv88uTycix5J5r4X~Gk4zzLXttsW2loDlO1~6EOFwWuwLUQucrnJjQ3osXi7st1s~UZcsv7g8XQuyArGHmf~z4~yY7bghIgmJbuTNQ--KTihRs~DxyRKusX9FOQiawFGjLY3-DahOUXD4eK~3umeRzSikMSMDV0kyLWWGsySJflSeu1hPS78oKH0dXhRWPDTRIpw4aNbtxPEWE1Sv74VEdwRjPska7TgFmx1K4S3RmubroiNpARlgDKpnS5-mNkI9jc4MFYweR~OVIhB1OwwDdGtA__"
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
              src="https://s3-alpha-sig.figma.com/img/3dd5/b51f/92c8a01610683e5cd593badfd9947bd2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H2tKTj2SencWzbJyhlnVDwWkrkxnu79rmCrTW3Wf8s0xXi7qY4f9VVqcQKLCegb2A5KW-r9cHKV5SDhW53PzAl0Jo0-PLBGB9K~gkgxHhXEibFIUcId0QdvwILR2t8xEJoXPH3cz7rk0hgFZWDueI~93ExEo6uBSfBs5XXd-EubGOZqjaHaFhHhYeb6YUp1K8iZN6Zcn6dFF4Wa8quToc8blUHOtxenLQDNYbc9WSE6tlmRyNpzRbyoFGFLszsrHgmBCFec6IZe6cD~w~3g57Ljh8emaNN0piCdyZuVWOwn4q-3K8qExNyGaZOYS1aBCQ0jt2KZTn1Vi4O1j6o~wHg__"
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
              src="https://s3-alpha-sig.figma.com/img/d0d2/048a/6b527dced8aa9c2a2f2d7e86c92bb384?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjxMf9vJN1O7DXCcGujFkKx~S~78vIrp6TxHBTQQwSCmh5KaZ1cmZGHkxgprnQxJIEbuIVQzkEtkAdXR3yz6NbcdjkU3C9sGkSwyJ7hxfEbuwf6UpA1aCVgzXdq78LwIPdrkJnrqN53hnQyaxjnhrayty-wCd7wusqawPqCiQYxMdNzU36FrsnlDzBpBOAD4AD8jOe~1Me8hu5jjjggY8EKJv~8rDNnmCQ46IFLmEb1GtAww0oEi6uVZ7K2EuvHUBfIb4PrL878Z70SJzmjK2fKko~yjKvAsszs~0NjFlnrWB3~HU-8F~bo~Yh7n1GP77wCeSu3Vk5kD8UB5xe3dIw__"
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
