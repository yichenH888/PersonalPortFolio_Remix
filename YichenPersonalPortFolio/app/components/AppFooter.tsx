export const AppFooter = () => {
    return (
      <>
        <footer
          className="relative pt-8 pb-6"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Email
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=njs-profile"
                        >
                          yh348@duke.edu
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                      Phone
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          984-281-9668
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Built with ❤️ in Durham, NC
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );

};