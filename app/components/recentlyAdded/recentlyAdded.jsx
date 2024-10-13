import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons';

export default function RecentlyAdded() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Recently added</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 m-auto mb-15 ">
        {/* First Property Card */}
        <div className="flex flex-col gap-y-1 relative    rounded-lg  ">
          <div className="absolute flex justify-between gap-28">
            <Image
              src={"/assets/recentlyAdd.png"}
              alt="heart icon"
              width={40}  
              height={40}  
               className='p-2'
            />
            <Image src={'/assets/ri_heart-fill.png'} width={30} height={23}  className=' ms-40' alt='ri'/>

          </div>
          <Image
            src="https://s3-alpha-sig.figma.com/img/e00e/c555/9b2e943e2d4d73b2b00a10479c26ad08?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NhCtPFyvzC7Br-tscqM-p2I8T8TcK4-pmBzd43IRDjm1q~Sbu~kj-DTebt0aiqByXO-fYPPHZxWL-V37aMjJV1oPabuM2uhZAQUhv29pSYAZ-PdUlxnmRlRbiPN5MnUDuOSJvxAC2iK-st2Q7K8fbVBRSDfSWPrptBaBpYNmtBzc0g7R3CjKOspyBJDafiH8wScBePGlvVg3IboK8pbW7ECOSfgkZRL35FJ49NoOQOL15H1niSAZppsduyhu9A0UTpkP2z093J82fNkYa3jB4MEZUY-nKnYXeqGbneARGe0cie6d76S558loFZA7tqvsY5MhjnRENtCpN4rbCt-V1Q__"
            alt="Property Image"
            width={300}  
            height={200}  
            className="w-full h-48 object-cover mb-2"  
          />
          <p>TULWA for sale in west orascom</p>
          <span className="flex gap-2 text-sm mb-3">
             <Image src={'/assets/location.png'} width={12} height={12} alt='mab'/>
            <p className="text-gray-500 text-sm">
              Est St, 77 - Central Park South, NYC
            </p>
          </span>
          <div className="flex gap-2 mb-3">
            <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/bed.png'} width={12} height={12} alt='bed'/>bathrooms
            </span>
            <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/bath.png'} width={12} height={12} alt='bath'/> 3 bedrooms
            </span>
            <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/meter.png'} width={12} height={12} alt='mter'/> 280 m
            </span>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">524.000 EGP</p>
              <p className="text-xs text-gray-500">96,500 Monthly</p>
            </div>
            
               <div className='w-4  me-3  -rotate-45 text-sm'>
                <i >
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="text-gray-500 text-sm"  
                  />
                </i>
              </div>

          </div>
        </div>


        {/* Second Property Card */}
        <div className="flex flex-col gap-y-1 relative    rounded-lg  ">
          <div className="absolute flex justify-between gap-28">
            <Image
              src={"/assets/recentlyAdd.png"}
              alt="heart icon"
              width={40}  
              height={40}  
               className='p-2'
            />
            <Image src={'/assets/ri_heart-fill.png'} width={30} height={23}  className=' ms-40' alt='heart'/>

          </div>
          <Image
            src="https://s3-alpha-sig.figma.com/img/88b1/0a45/71616ed595db727d053cf5194114f2c6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ih98tS0hd6EB5mDG5YDJTFt5WqNheNx8Xju6XGMLapsocRji5D7USEziEY07WzzUvaqjagrVHgcNSEap1NqDfrmHtcb2yZns6e2-RaN8B5ZKLqX3CvFw5cCUdhXWktTm~N-d-lHQTRQaoeu5vkBj0tjF4kLBPt1JB2cLHEO7LgTkOF~b68p2BW8c7psL8-GeuuYUTU2YTsmdNE1TMuSjAFsBoiE4-o9c4SD2I6LdV8Qgm5S6LTLkfX1OixVByMZ3qUg1WpR44cH-GaSd2FUp3XVaZJtHdoRkHymJATQ3odE3fHpKjtXpLnYTMlxgZ2RDmZ6dJKkn5q4PCtKVzdBpNg__"
            alt="Property Image"
            width={300}  
            height={200}  
            className="w-full h-48 object-cover mb-2"  
          />
          <p>TULWA for sale in west orascom</p>
          <span className="flex gap-2 text-sm mb-3">
             <Image src={'/assets/location.png'} width={12} height={12} alt='mab'/>
            <p className="text-gray-500 text-sm">
              Est St, 77 - Central Park South, NYC
            </p>
          </span>
          <div className="flex gap-2 mb-3">
            <span className="text-sm flex flex-row items-center gap-2">
              <Image src={'/assets/bed.png'} width={12} height={12} alt='bed'/>bathrooms
            </span>
             <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/bath.png'} width={12} height={12} alt='bath'/> 3 bedrooms
            </span>
           <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/meter.png'} width={12} height={12} alt='mter'/> 280 m
            </span>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">524.000 EGP</p>
              <p className="text-xs text-gray-500">96,500 Monthly</p>
            </div>
            
               <div className='w-4  me-3  -rotate-45 text-sm'>
                <i >
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="text-gray-500 text-sm"  
                  />
                </i>
              </div>

          </div>
        </div>

        {/* Third Property Card */}
        <div className="flex flex-col gap-y-1 relative    rounded-lg  ">
          <div className="absolute flex justify-between gap-28">
            <Image
              src={"/assets/recentlyAdd.png"}
              alt="heart icon"
              width={40}  
              height={40}  
               className='p-2'
            />
            <Image src={'/assets/ri_heart-fill.png'} width={30} height={23}  className=' ms-40' alt='heart'/>

          </div>
          <Image
            src="https://s3-alpha-sig.figma.com/img/70bc/832e/e9a6f4143a2e8abd6732887be3f29b0c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CojCG40PLi0Xo9N3mCwQF3vEhiMfY6AIlcPHrfpJzymkuf0dkwPqtVjmeePuvVw~zZCQIFgJj1o4du6H9-TQECo13uXHO3FP6xc38sxDNM-uXSnCOYYtLOIauZtQT7Ep~PSsegzUiuJ8jwaASprC-Hw31DEnDxZyxqEpQeyFJ3q2NHmoE0M4zPYtEbpt7wMgSfuMV-wsBy9ZGtvwJDTorVFL0M52DqLrKhorMgXdOEP07-ZcPDA4kTVDr3v6Lf57L1dAOwWiN~LNhuoIL6bWS86b-y1ivbyrUrluVyWVsUKuSRnYcEx~jiouApMevnKqQ63Qole3ddV0mxcIfYNU1A__"
            alt="Property Image"
            width={300}  
            height={200}  
            className="w-full h-48 object-cover mb-2"  
          />
          <p>TULWA for sale in west orascom</p>
          <span className="flex gap-2 text-sm mb-3">
             <Image src={'/assets/location.png'} width={12} height={12} alt='mab'/>
            <p className="text-gray-500 text-sm">
              Est St, 77 - Central Park South, NYC
            </p>
          </span>
          <div className="flex gap-2 mb-3">
            <span className="text-sm flex flex-row items-center gap-2">
              <Image src={'/assets/bed.png'} width={12} height={12} alt='bed'/>bathrooms
            </span>
            <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/bath.png'} width={12} height={12} alt='bath'/> 3 bedrooms
            </span>
           <span className="text-sm flex flex-row items-center gap-2">
              <Image  src={'/assets/meter.png'} width={12} height={12} alt='mter'/> 280 m
            </span>
          </div>
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">524.000 EGP</p>
              <p className="text-xs text-gray-500">96,500 Monthly</p>
            </div>
            
               <div className='w-4  me-3  -rotate-45 text-sm'>
                <i >
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="text-gray-500 text-sm"  
                  />
                </i>
              </div>

          </div>
        </div>

      </div>
            <div className="flex justify-center gap-2 mb-9 mt-14">
           <Image src={'/assets/larr.png'} width={18} height={15} alt='lrr'/>
            <Image className="p-1" src={'/assets/dots.png'}  width={44} height={8} alt='dots'/>
          <Image src={'/assets/rarr.png'} width={18} height={15} alt='rur'/>  
        </div>
    </section>
  );
}
