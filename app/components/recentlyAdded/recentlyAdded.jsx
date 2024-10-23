import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function RecentlyAdded() {
  const properties = [
    {
      id: 1,
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e00e/c555/9b2e943e2d4d73b2b00a10479c26ad08?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KDlbhO03s8ySXERkVT1l10opteNWsdCgG0rwoEP1hmGUP41rAu6~6VuZsJZhoWOkVzJqoEglr42Lr3eN3SkTgJl3vjVji0YbDGFcCVaXUP~sidEZZwzEk3Er69t4W4K90oRcghlXFCcvrBhmd-kUmdOgT9tDUzug6pT5DL3E2EJX7bo~HaX0X~RZ4Kx~lBoa-dOF0LvXuRgs22UD~o~j6rcCriZ27M4qkl4nkXlRf9XSMwnRR7KWPQszlB3nc6t-YQA2~l5dkoHTX1tkIq1Ajb655QLrnUVFZlfaNHJt2xKf00BLDODZ8-czstcmdsp-7OAy57WhFcza~kEQ40To-A__',
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
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/88b1/0a45/71616ed595db727d053cf5194114f2c6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zjoey2KLrHrdKbpWt3IRplyksVzkNXxLyzdCyO5Lm1k8~rriPbCGr4nHZptnrcvg7t7flEidWzzd3iMg3mcMAGxdnIeF5ABpi-nTHBWf7-sGd-woteE4PISSl9Alc3lrOehX6xAOGHiJYSE4pZWvvrkFmCUJP9o3XFtRPklUD9BwTH7vyP~nFu52nkgG007TxwV8Ihkkr0KYBBZB4b5eCVi-0598urGdceZhlX8u-HP90HkWrXUiWz0VRu9ItCRSpQI9L8ICh7tIAGZQDsC2trpgWL9uhyRPZ4o2HInR30pNOMHf1plRDgVgtHIKMYls~5s5tt2nzHW8WRvsxqLCZQ__',
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
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/70bc/832e/e9a6f4143a2e8abd6732887be3f29b0c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XjbtVdyXbuJzObtpxYVksv-cnCi9o8RqrGqUV0mrBnbzJoCA6djSKlAeOX4SJeEGoR8PFqJxoWYCwlb49ClmjtYHOjOBM5Bnm10ypt~zarKPWpIhx-ggBki3R3aSPYX78FQXKbEZZ~duQiIEYLb45aOqEwCAOsu1daqlKOLbM9jDFPD~bIlNln3PYCbTPvViPP4eF9IYui1O-bpC6BQIxTzTHomIIEbhURlyAtTyW5lKXCk6c-DJTki61RBHbYPvL6n6QtR9Pks3tULfibHCErj-sXL89n~-lkiCn~4AQdmOMBZmrPnNwz6lorKrnVgNcDFe593Ks~NJR8ieiNToEA__',
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
            <div className="absolute flex justify-between gap-20">
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
