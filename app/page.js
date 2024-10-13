import Hero from "./components/Hero/hero";
import Description from "./components/description/description";
 import Properties from "./components/properties/properties";
 import SellYourProperty from "./components/sellYourProperty/sellYourProperty";
 import RecentlyAdded from "./components/recentlyAdded/recentlyAdded";
 import RegisterNowSec from "./components/registerNowSec/registerNowSec";
 import OurPartner from "./components/ourpartners/ourpartner";
 import Footer from "./components/footer/footer";
import ContactUS from "./components/contactus/contactUS";
 
const HomePage = () => {
  return (
    <div>
       <Hero />
      <Description />
      <Properties />
      <SellYourProperty />
      <RecentlyAdded />
      <RegisterNowSec />
       <OurPartner />
       <ContactUS/>
       <Footer />
    </div>
  );
};

export default HomePage;