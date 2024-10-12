 

export default function Subscribe() {
  return (
    <div>
      <section  className="  mb-10   ">
        <div className="w-3/4 flex items-center justify-between m-auto">
          <div>
            <p className="text-2xl font-extrabold">Subscribe to newsletter</p>
            <p className="text-gray-700 font-medium text-sm">Sign up to receive the latest news</p>
          </div>


      <div className="flex flex-row  items-center justify-end gap-60 bg-white   w-[670px] ">
         <div className="text-sm text-gray-600  me-28 ">Enter your email address</div>

          <div>
            <button className="bg-black text-xs  text-white p-5 px-8 rounded-sm">
              Subscribe
            </button>
          </div>
      </div>
         

          <hr className="text-gray-800" />
        </div>
      </section>
    </div>
  );
}
