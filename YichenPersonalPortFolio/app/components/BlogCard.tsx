export const Blogcard = ({title}) => {
  return (
    <div>
      <article
        className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
        <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
          <h3 className="text-center">
            <a className="text-white text-2xl font-bold text-center" href="#">
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
        </div>
      </article>
    </div>
  );
};