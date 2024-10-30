import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RecentlyAdded() {
  const properties = [
    {
      id: 1,
       imageUrl: '/assets/recent1.png', 
       location: 'Est St, 77 - Central Park South, NYC',
      price: '524.000 EGP',
      monthly: '96,500 Monthly',
      details: {
        bathrooms: 'bathrooms',
        bedrooms: '3 bedrooms',
        size: '280 m',
      },
    },
    {
      id: 2,
       imageUrl: '/assets/recent2.png', 
       location: 'Est St, 77 - Central Park South, NYC',
       price: '524.000 EGP',
      monthly: '96,500 Monthly',
      details: {
        bathrooms: 'bathrooms',
        bedrooms: '3 bedrooms',
        size: '280 m',
      },
    },
    {
      id: 3,
       imageUrl: '/assets/recent3.png',      
       location: 'Est St, 77 - Central Park South, NYC',
      price: '524.000 EGP',
      monthly: '96,500 Monthly',
      details: {
        bathrooms: 'bathrooms',
        bedrooms: '3 bedrooms',
        size: '280 m',
      },
    },
  ];

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Recently added</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-3/4 m-auto mb-15">
        {properties.map((property) => (
          <div key={property.id} className="flex flex-col gap-y-1 relative rounded-lg">
            <div className="absolute flex justify-between gap-32">
              <Image
                src="/assets/recentlyAdd.png"
                alt="heart icon"
                width={40}
                height={40}
                className="p-2"
              />
              <Image
                src="/assets/ri_heart-fill.png"
                width={30}
                height={23}
                className="ms-40"
                alt="heart"
              />
            </div>
            <Image
              src={property.imageUrl}
              alt="Property Image"
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-2"
            />
            <p>TULWA for sale in west orascom</p>
            <span className="flex gap-2 text-sm mb-3">
              <Image src="/assets/location.png" width={12} height={12} alt="location" />
              <p className="text-gray-500 text-sm">{property.location}</p>
            </span>
            <div className="flex gap-2 mb-3">
              <span className="text-sm flex flex-row items-center gap-2">
                <Image src="/assets/bed.png" width={12} height={12} alt="bed" />
                {property.details.bathrooms}
              </span>
              <span className="text-sm flex flex-row items-center gap-2">
                <Image src="/assets/bath.png" width={12} height={12} alt="bath" />
                {property.details.bedrooms}
              </span>
              <span className="text-sm flex flex-row items-center gap-2">
                <Image src="/assets/meter.png" width={12} height={12} alt="size" />
                {property.details.size}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{property.price}</p>
                <p className="text-xs text-gray-500">{property.monthly}</p>
              </div>
              <div className="w-4 me-3 -rotate-45 text-sm">
                <i>
                  <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-sm" />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mb-9 mt-14">
        <Image src="/assets/larr.png" width={18} height={15} alt="left arrow" />
        <Image className="p-1" src="/assets/dots.png" width={44} height={8} alt="dots" />
        <Image src="/assets/rarr.png" width={18} height={15} alt="right arrow" />
      </div>
    </section>
  );
}
