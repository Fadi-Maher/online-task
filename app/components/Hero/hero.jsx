 "use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons'; 
 import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; 
import Styles from './hero.style.module.css';
import Image from 'next/image';

 import { useContext } from 'react';
import { UserContext } from '@/app/context/userContext';
const Hero = () => {

  const { logoutUser } = useContext(UserContext); 


  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('/assets/bghero.jpg')" }}
    >
      <div className="container flex flex-col md:flex-row items-center   justify-between mb-10  md:px-8">

              <button 
                onClick={() => logoutUser()} 
                className='bg-white font-bold p-2 absolute top-9 right-3 rounded-md text-gray-800'>
                Log Out
              </button>

              <Image 
              
                src="/assets/VectorHead.png" 
                alt="title" 
                width={225}  
                height={18}   
                 
                className="m-auto mb-4 md:mb-0"
                style={{ marginRight: '20px',width:"auto" , height:'auto' }}     
              />


        
       

        <ul className={` ${Styles.liColor} flex flex-wrap gap-4 md:gap-6 text-sm md:text-base font-bold mt-10 cursor-pointer items-center md:item-center  `}>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Properties</li> <Image src={'/assets/arr.png'} width={4}height={3} alt='arr' />
          
          <li>Our Partners</li>
          <li>Contact us</li>

          <span className="flex items-center gap-3">
            <Image src="/assets/lang.png" width={24} height={24} alt="language" /> Ar 
            <div className="w-[1px] h-6 bg-white"></div>

            <Image src="/assets/Vector.png" height={24} width={26} alt="icon" />
            <span className="w-[1px] h-6 bg-white"></span>
          </span>

          <button 
            style={{ color:'#2D2D2D' }} 
            className="bg-white flex items-center gap-3 text-xs md:text-sm rounded p-2"
          >
            Become an ambassador  
            <FontAwesomeIcon icon={faArrowRight} className="size-3 -rotate-45" />
          </button>
        </ul>
      </div>

      <p className={`${Styles.heroText} text-white text-center  mb-10    `}>
        We Help You <br /> Realize Your <br/> Dream Property
      </p>

      <button 
        style={{ color:'#2D2D2D' }} 
        className="bg-white flex items-center gap-3 text-xs md:text-sm rounded p-3 mx-auto mt-6"
      >
        Explore Properties 
        <FontAwesomeIcon icon={faArrowRight} className="size-3 -rotate-45" />
      </button>
    </section>
  );
};

export default Hero;


