"use client";  
import React from 'react';
import Image from 'next/image';
import Styles from './style.module.css';  

const ContactUS = () => {
  return (
    <section className="mb-14 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center m-auto">
        
        {/* Left Section */}
        <div className="mb-5 md:mb-0">
          <div className="mb-5 md:m-16">
            <p className="font-bold text-2xl mb-5">
              We'll help you find a place <br /> you'll love!
            </p>

            <div className="flex gap-2 p-2">
              <Image src="/assets/phone.png" width={24} height={24} alt="phone" className="p-1" />
              <span className="flex flex-col gap-y-1">
                <p className="text-xs text-gray-600">Phone Number</p>
                <p className="text-xs text-gray-600">314-555-0123</p>
              </span>
            </div>

            <div className="flex gap-2 p-2">
              <Image src="/assets/email.png" width={30} height={10} alt="mail" className="p-1" />
              <span className="flex flex-col gap-y-1">
                <p className="text-xs text-gray-600">Email Address</p>
                <p className="text-xs text-gray-600">sianches@gmail.com</p>
              </span>
            </div>
          </div>

          <div className={Styles.rotetedImg}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/f3b3/1779/e52d2fc3c207197647a938a2b0f78f43?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=It1D8NIC5FU5up0cJvRa~fsXH3F8QbJ0ON7K14yQcvRLXJ4sou~PLdXcFf2s35ycKN62Q-ZvnvGJhc9wGkvXyQPDaMtKf42lHbkgnOiETS1nofRZzcWHryZZY4h7ueIu9kcDSI~HRugHLIkHTWogJzkxDEY1pBuKe9XpTQkVhFWiUIXRCkMwXVTbrp28xJkJbzXQAVrdp7XRvYg~yrpayT~YTYplx~fnSu-pmZqPZ6xGIUbnBvuNOqMcaVoNMhHLPnRQ84ZiGYkFzHIgeGiE4m8eohCyBuxs2snkiQaURVkDt8sWCVtD~Oza6xVfCRjO52zWsxGORR2myEethIr5Rw__"
              alt="A place you'll love"
              className="rounded-lg w-full"
              width={595}
              height={412}
            />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <form action="">
            <h2 style={{marginTop:-40}} className="font-bold text-3xl mb-2">Contact Us</h2>
            <p className="mb-4 font-semibold">We will respond as soon as we receive your message.</p>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Enter your full name"
                type="text"
                className="  p-2 rounded-md"
                id="name"
              />

              <label htmlFor="email">Email Address</label>
              <input
                placeholder="Enter your email address"
                type="text"
                className="  p-2 rounded-md"
                id="email"
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                placeholder="Enter your phone number"
                type="text"
                className="  p-2 rounded-md"
                id="phone"
              />

              <label htmlFor="message">Message</label>
              <input
                placeholder="Enter your message"
                type="text"
                className="  p-2 rounded-md"
                id="message"
              />

              <div className="flex justify-center mt-4">
                <button className="bg-black text-white p-4 rounded-sm flex items-center gap-2">
                  Send Message
                  <Image src="/assets/rightArr.png" width={12} height={12} alt="arrow" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
