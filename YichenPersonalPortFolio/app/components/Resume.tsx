export const Resume = () => {
  return (
    <div className="text-gray-800">
      {/* Name section */}
      <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
        {/* style="height: 50vh" */}
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          {/* image */}
          <img
            className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
            src="https://i.ibb.co/Byd813Q/mateus-campos-felipe-Zxd-JFg-SGQBA-unsplash.jpg"
            alt="YichenHuang"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-9xl">Yichen Huang</h1>

          <div className="px-10 md:px-20">
            <br />
            <a
              className="text-xl hover:text-blue-600"
              href="mailto:yh348@duke.edu"
            >
              yh348@duke.edu
            </a>
            <span className="mx-2">•</span> {/* Add a dot or other separator */}
            <span className="text-xl">984-281-9668</span>
          </div>
        </div>
        <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <br />
          <br />
          <span>Download Resume</span>
        </button>
      </section>
      {/* /Name Section */}

      <hr className="border-gray-400 mx-44" />
      {/* Resume */}
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Education
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              B.S. Computer Science
            </h5>
            <h6 className="text-lg font-bold">Harward University</h6>
            <p>Jan 2015 - present</p>
          </div>
          <div className="flex flex-col col-span-4 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              B.S. Computer Science
            </h5>
            <h6 className="text-lg font-bold">Harward University</h6>
            <p>Jan 2015 - present</p>
          </div>
          <div className="flex flex-col col-span-4 ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Professional Experience
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">
              Full Stack Developer
            </h5>
            <h6 className="text-lg font-bold">Facebook</h6>
            <p>Jan 2015 - present</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Software Developer
            </h5>
            <h6 className="text-lg font-bold">Google</h6>
            <p>Feb 2010 - Jan 2015</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
            <h6 className="text-lg font-bold">IBM</h6>
            <p>Apr 2008 - Feb 2010</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
      {/* Resume */}
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">
              Full Stack Developer
            </h5>
            <h6 className="text-lg font-bold">Facebook</h6>
            <p>Jan 2015 - present</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Software Developer
            </h5>
            <h6 className="text-lg font-bold">Google</h6>
            <p>Feb 2010 - Jan 2015</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">Web Developer</h5>
            <h6 className="text-lg font-bold">IBM</h6>
            <p>Apr 2008 - Feb 2010</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              eveniet deleniti tempore veritatis adipisci accusantium
              voluptatibus vel aperiam ex alias officiis deserunt, ad, iste id
              cum minus sit laudantium ullam! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Animi non incidunt voluptates
              molestiae delectus nulla quisquam aperiam voluptas tempora
              distinctio! Ipsa cupiditate harum voluptates praesentium. Suscipit
              itaque officiis odio ut!
            </p>
          </div>
        </div>
      </section>
      <div className="h-80"></div>
    </div>
  );
};
