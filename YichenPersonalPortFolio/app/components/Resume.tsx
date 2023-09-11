export const Resume = () => {
  return (
    <div className="text-gray-800">
      {/* Name section */}
      <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-35 px-8">
        {/* style="height: 50vh" */}
        <div className="flex flex-col items-center justify-center text-center h-screen-half">
          {/* image */}
          <img
            className="hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
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
            <p>
              • Processing CRUD operation with Sequelize ORM; successfully
              migrated data from MySQL to Redis, resulting in considerable
              improvements in response time.
            </p>
            <p>
              • Migrated search service from MySQL to Elasticsearch,
              significantly improved patients' records searching speed by 50%
              compared with fuzzy matching.
            </p>
            <p>
              • Designed and managed CI/CD pipelines, deployed to AWS EC2 with
              multiple nodes.
            </p>
            <p>
              • Conducted integration testing with Selenium on frontend and
              Postman for API; employed Jasmine for unit testing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Software Developer
            </h5>
            <h6 className="text-lg font-bold">Duke University</h6>
            <p>May 2023 - Aug 2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              • Created a Python auto-grader to assess classifier performance in
              a machine-learning course by analyzing curves.
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
              Mini Amazon System
            </h5>
            <p>Apr 2023 - May 2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              • Developed a full-stack web application modeling an Amazon system
              with a warehouse and delivery system.
            </p>
            <p>
              • Implemented the web frontend using React (JavaScript) and
              rendered user-friendly UI with CSS, HTML, and Bootstrap,
              implemented unit test with Mocha framework to enhance code quality
              of Components.
            </p>
            <p>
              • Utilized React development tools like React DevTools and React
              Profiler, proficient in using these tools for debugging,
              performance optimization, and gaining insights into component
              behavior.
            </p>
            <p>
              • Established communication model with Java, communicated with UPS
              delivery service and warehouse with Google Protocol Buffer and
              stored data in PostgreSQL with help of Hibernate ORM.
            </p>
            <p>
              • Designed a set of RESTful APIs with Springboot, integrated
              Springboot with communication model; wrote testable and secure
              applications, kept 80% code coverage with unit test via Junit and
              Mockito.
            </p>
            <p>
              • Deployed Spring Cloud Consul, set up Consul Clusters nodes to
              support service discovery and server register between different
              server modules.
            </p>
            <p>
              • Deployed to AWS EC2 with multiple nodes, integrated orderService
              with Consul, and make the app highly available for public access.
            </p>
            <p>
              • Used GitHub and Maven for version control and project dependency
              control, resolved git conflict during collaborative code reviews.
            </p>
            <p>
              • Set up flow control with Sentinel to protect backend system from
              overload traffic.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Ride Sharing Service Web-APP
            </h5>
            <p>Jan 2023 - Feb 2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              • Built a full-stack web application modeling an Uber-like system
              using Django and PostgreSQL.
            </p>
            <p>
              • Created a matched service model to facilitate rider-customer
              pairing, by identifying the nearest available rider using Geohash.
            </p>
            <p>
              • Implemented user authentication and order status management.
            </p>
            <p>
              • Deployed the application to multiple nodes using Docker and AWS
              ECS.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl  font-bold">
              Mini Multithread Stock Exchange Matching Engine
            </h5>
            <p>Mar 2023 - Apr 2023</p>
          </div>
          <div className="flex flex-col col-span-4">
            <p>
              • Created a C++ server to match orders and track accounts for a
              simulated stock/commodities market.
            </p>
            <p>
              • Stored data with PostgreSQL (SQL), considered database
              concurrency by implementing multithreading.
            </p>
          </div>
        </div>
      </section>
      <div className="h-80"></div>
    </div>
  );
};
