import { SocketAddress } from 'net';
import banner from '../assets/images/gf-banner.png';

const Contact = () => {
  const offices = [
    {
      name: 'Kolkata',
      address: 'Chhabildas Towers, 6A, Middleston street, 2nd Floor, Kolkata - 700071',
      email: 'Admin.ccu@flyjaclogistics.com',
      phone: '91-33-66455400'
    },
    {
      name: 'Boomerang',
      address: 'B1/205, 2nd floor, kanakia boomerang, chandivali, Farm Road, Andheri(east) - 400072',
      email: 'eknath.bom.ccu@flyjaclogistics.com',
      phone: '022-33595900'
    },
    {
      name: 'vaibhav',
      address: 'C2, Vaibhav Apartments, Sahar Pipeline road, andheri (east), mumbai, 400 099',
      email: 'eknath.bom.ccu@flyjaclogistics.com',
      phone: '022-33595900'
    },
    {
      name: 'ahemdabad',
      address: '802, Suyojan Building, 8th Floor, Nr. President Hotel, Off C.G. Road Ahemdabad. Pin-380009, Gujarat',
      email: 'priyavrat@flyjaclogistics.com',
      phone: '+91-79-48969611'
    },
    {
      name: 'aurangabad',
      address: 'J wing First Floor B+3, Bharat Bazaar Commercial complex, MIDC Chikalthana, Aurangabad 431006',
      email: 'raman.aur@flyjaclogistics.com',
      phone: '91-9922928953'
    },
    {
      name: 'pune',
      address: 'Office No. 13, 4th floor, MSR Capital, Morwadi, Pimpri, Pune - 411018',
      email: 'sonia.pnq@flyjaclogistics.com',
      phone: '+91-8657447069'
    }
  ];

  return (
    <div>
      <img src={banner} className="w-full" alt="" />
      <nav className="flex px-5 py-3 text-black border border-gray-200 bg-[#ececec] md:pl-[21.87rem]" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a className="inline-flex items-center text-sm font-medium text-black hover:text-gray-900 ">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Flyjac
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">Contact Us</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="relative max-w-[90rem] mx-auto p-4">
        <div className="text-[2rem] text-[#ed7e00] uppercase text-center">
          <span>
            Office <span className="font-bold">Address</span>
          </span>
        </div>
        {/* first section */}
        <section className="py-20 mx-auto align-middle">
          <div className="text-center">
            <div className="grid grid-cols-2 gap-16 pb-16">
              <div className="grid grid-cols-">
                <div className="col-span-2 col-start-2 mt-1 border-b border-gray-300 focus-within:border-[#4AAF70]">
                  <div>
                    <select
                      id="location"
                      name="location"
                      className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-700 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-500 sm:text-sm"
                      placeholder="tesd"
                    >
                      {/* defaultValue="Kolkata" */}
                      <option>Gujarat</option>
                      <option>Kolkata</option>
                      <option>Nagaland</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-span-2 col-start-1 mt-1 border-b border-gray-300 focus-within:border-[#4AAF70]">
                  <div>
                    <select
                      id="office"
                      name="office"
                      className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-700 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-gray-900 focus:border-gray-500 sm:text-sm"
                      defaultValue="Kolkata"
                    >
                      <option>Gujarat</option>
                      <option>Kolkata</option>
                      <option>Nagaland</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* second section */}
        <section className="mx-auto">
          <div className="grid grid-cols-3">
            {offices.map((item, index = 1) => (
              <div key={item.name} className="pb-20 uppercase">
                <span className="text-[#4AAF70] font-bold">{item.name}</span>
                <div className="flex">
                  <div>
                    {/* address */}
                    <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="ml-2">{item.address}</span>
                    </div>
                    {/* email */}
                    <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                      <span className="ml-2">{item.email}</span>
                    </div>
                    {/* phone */}
                    <div className="flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-2">{item.phone}</span>
                    </div>
                  </div>
                  {(index + 1) % 3 !== 0 && <div className="w-1 mx-16 ml-6 bg-gray-300 h-30"></div>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contact;
