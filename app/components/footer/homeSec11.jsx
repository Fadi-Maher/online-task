import Head from 'next/head';
import Subscribe from '../subscribe/homeSec10';
import Image from 'next/image';

export default function HomeSec11() {
  return (
    <div style={{ backgroundColor: '#F3F3F1' }} className="p-4 md:p-16">
      <div>
        <Subscribe />
        <hr className="w-full md:w-3/4 m-auto" />

        <section className="flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mb-10 mt-10 m-auto" style={{ backgroundColor: '#F3F3F1' }}>
          <div className="mb-10 md:mb-0">
            <Image src={'/assets/imgfooter.png'} width={202} height={16} alt="img" className="mb-3" />
            <p className="font-medium mb-14 text-sm md:text-base">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at
              <br /> dui tincidunt nulla semper.
            </p>

            <div className="flex gap-2 items-center">
              <span style={{ color: '#8D999D' }} className="text-xs md:text-sm">Follow us on</span>
              <span>
                <Image src={'/assets/fb.png'} width={8} height={16} alt="fb" />
              </span>
              <span>
                <Image src={'/assets/x.png'} width={16} height={14} alt="x" />
              </span>
              <span>
                <Image src={'/assets/insta.png'} width={16} height={16} alt="insta" />
              </span>
              <span>
                <Image src={'/assets/utube.png'} width={20} height={13} alt="youtube" />
              </span>
            </div>
          </div>

          {/* Main Links */}
          <div className="flex flex-col text-gray-700 text-xs md:text-sm gap-y-2 font-medium mb-10 md:mb-0">
            <a href="" className="mb-3">Main Links</a>
            <a href="">Home</a>
            <a href="">Our Projects</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col text-gray-700 text-xs md:text-sm gap-y-2 font-medium">
            <a href="">Quick Links</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
          </div>
        </section>
      </div>

      <hr className="w-full md:w-3/4 m-auto text-black" />

      <p className="flex justify-center items-center mt-10 text-xs md:text-sm text-gray-800">
        All Copyrights are reserved by SIANCHES @2024
      </p>
    </div>
  );
}
