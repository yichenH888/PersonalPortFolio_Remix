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
        <a
          className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
          download={true}
          href="/resume/Yichen_Huang_SDE.pdf"
        >
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
        </a>
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
            <h5 className="text-xl md:text-2xl  font-bold">MEng |</h5>
            <h5 className="text-xl md:text-2xl  font-bold">
              Electrical and Computer Engineering
            </h5>
            <h5 className="text-xl md:text-2xl  font-bold">
              (Track: Software Development)
            </h5>
            <h6 className="text-lg font-bold">Duke University</h6>
            <p>Aug 2022 - present</p>
          </div>
          <div className="flex flex-col col-span-4 ">
            <p>• Fundamental Computer System & Engineering</p>
            <p>• Programming, Data Structures & Algorithms in C++</p>
            <p>• Advanced Topics in ECE: Algorithms</p>
            <p>• Engineering Robust Server</p>
            <p>• Advanced Topics in ECE: More Reliable Software</p>
            <p>• System Program & Engineering</p>
            <p>• Software Quality Management</p>
            <p>• Business Fundamentals for Engineers</p>
            <p>• Management of High Tech Industries</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">B.E |</h5>
            <h5 className="text-xl md:text-2xl  font-bold">
              Electrical and Electronic Engineering
            </h5>
            <h6 className="text-lg font-bold">University of Nottingham</h6>
            <p>Sep 2018 - Jun 2022</p>
          </div>
          <div className="flex flex-col col-span-4 "></div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
      <section className="px-20 mt-10">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
          Skills
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h6 className="text-lg font-bold">Programming Languages:</h6>
            <h6 className="text-lg font-bold">Frameworks:</h6>
            <h6 className="text-lg font-bold">Database and ORM:</h6>
            <h6 className="text-lg font-bold">Testing Tools:</h6>
            <h6 className="text-lg font-bold">Other Tools:</h6>
          </div>
          <div className="flex flex-col col-span-4 ">
            <h6 className="text-lg">
              JavaScript, TypeScript, Python, Java, C/C++, SQL, HTML/CSS
            </h6>
            <h6 className="text-lg">
              Node.js, Spring Boot, Spring Cloud, Angular, React.js, Django,
              Bootstrap
            </h6>
            <h6 className="text-lg">
              PostgreSQL, MySQL, Redis, Hibernate, Sequelize
            </h6>
            <h6 className="text-lg">
              Selenium, Jasmine, Mocha, React DevTools, React Profiler, Junit
              and Mockito, Postmanr
            </h6>
            <h6 className="text-lg">
              Git, AWS EC2, Docker, CI/CD, Elasticsearch, Sentinel, Geohash,
              Multithreading
            </h6>
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
              Software Engineer Intern
            </h5>
            <h6 className="text-lg font-bold">ScriptChain Health</h6>
            <p>May 2023 - Aug 2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              • Developed a web app featuring a "Provider Portal" enabling
              primary care physicians to access patient heart disease data and
              AI-driven predictions for enhanced diagnostic decision-making.
              Additionally, integrated a "Patient Portal" for seamless data
              sharing with patients.
            </p>
            <p>
              • Designed dynamic and multi-browser compatible pages using
              Angular (HTML, CSS and TypeScript); Created reusable components
              such as reusable headers, navigation bar and footers to increase
              maintainability and efficiency.
            </p>
            <p>
              • Built patient record management RESTful APIs with Node.js
              (JavaScript), served user requests with microservices, allowing
              users to efficiently manage patient data and send text/email
              reminders via frontend.
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
