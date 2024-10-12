import Hero from "./components/Hero/hero";
import HomeSec2 from "./components/description/homeSec2";
import HomeSec3 from "./components/properties/homeSec3";
import HomeSec4 from "./components/sellYourProperty/homeSec4";
import HomeSec5 from "./components/recentlyAdded/homeSec5";
 import HomeSec6 from "./components/registerNowSec/homeSec6";
 import HomeSec8 from "./components/ourpartners/homeSec8";
 import HomeSec11 from "./components/footer/homeSec11";
import ContactUS from "./components/contactus/contactUS";
 
const HomePage = () => {
  return (
    <div>
       <Hero />
      <HomeSec2 />
      <HomeSec3 />
      <HomeSec4 />
      <HomeSec5 />
      <HomeSec6 />
       <HomeSec8 />
       <ContactUS/>
       <HomeSec11 />
    </div>
  );
};

export default HomePage;