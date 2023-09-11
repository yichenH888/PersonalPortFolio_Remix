import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <div className="w-full h-full min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        <div className="min-w-[340px]flex flex-col group">
          <div className="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">
            <img
              src="/images/assets/blog.jpg"
              className="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
              alt=""
            />
            <div className="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500"></div>
          </div>
          <a
            href="#"
            className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1"
          >
            Blog Admin Page
          </a>
          <p className="mb-4 font-light  text-sm md:text-sm text-center text-gray-400">
            Please feel free to update your blogs in this page.
          </p>
        </div>
      </div>
    </div>
  );
}
