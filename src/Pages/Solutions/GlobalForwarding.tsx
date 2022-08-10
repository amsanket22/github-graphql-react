import banner from '../../assets/images/gf-banner.png';
import image1 from '../../assets/images/gf-image1.png';
import image2 from '../../assets/images/gf-image2.png';
import image3 from '../../assets/images/gf-image3.png';
import image4 from '../../assets/images/gf-image4.png';
import image5 from '../../assets/images/gf-image5.png';
import image6 from '../../assets/images/gf-image6.png';

const GlobalForwarding = () => {
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
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">Solutions</span>
            </div>
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
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">Global Forwarding Solutions</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="relative max-w-[75rem] mx-auto p-4">
        <div className="py-4 mt-12 max-w-[60rem] border-l-4 border-l-orange-600">
          <p className="ml-4 text-5xl font-medium">
            With more than 30 Years of experience in the Global freight forwarding field, we secure your logistics need in cross
            border transportation at the shortest lead time possible, leveraging the Hitachi Transport System Group offices (HTS)
            & our exclusive partner network.
          </p>
        </div>

        {/* Freight Management */}
        <div className="p-5 mt-10">
          <div className="text-2xl">
            <span>Freight</span> <span className="font-bold">Management</span>
          </div>
          <p className="mt-2 text-lg leading-8 ">
            We are a team of specialized industry professionals having ability to handle shipments end to end across the Globe,
            covering every logistical needs. Our global network, with options of multiple modes of transportation, enables us to
            provide fast, efficient, cost-effective solutions. Coupled with our process-oriented approach, enhanced IT
            capabilities, strong customer focus, delivers the most effective & efficient shipping option available.
          </p>
        </div>
        <img src={image1} alt="" />

        {/* Freight Types */}
        <div className="mt-10">
          {/* Air Freight */}
          <div className="grid grid-cols-2 py-12">
            <div className="py-20">
              <div className="text-2xl">
                <span>Air</span> <span className="font-bold">Freight</span>
              </div>
              <div className="max-w-[30rem] leading-loose">
                <p className="mt-12">
                  Our presence in all major airport/gateways enables the best optimized solutions for on time pick up/deliveries
                  at any part of the globe. Our large scale of operation and strong carrier relationship enable us in securing
                  competitive price & space.
                </p>
                <p className="mt-8">
                  We offer a wide range of Import & Export consolidation services, solution for Door to Door movements,
                  Temperature control cargo, DG Cargo, ODC, Flight Chartering & Domestic Air freight.
                </p>
                <p className="mt-8">
                  We provide seamless real-time visibility across, using our IT system with auto updates from airlines.
                </p>
              </div>
            </div>
            <img src={image2} alt="" />
          </div>
          {/* Sea Freight */}

          <div className="grid grid-cols-2 py-12">
            <img src={image3} alt="" />

            <div className="p-20">
              <div className="text-2xl">
                <span>Sea</span> <span className="font-bold">Freight</span>
              </div>
              <div className="max-w-[30rem] leading-loose">
                <p className="mt-12">
                  We provide flexible, dependable, and secure Ocean freight solutions with our strong and long-term carrier
                  partnerships across the Globe. We specialize in providing Direct and Multicountry consolidations services, FCL,
                  LCL Consolidations, Door to Door services, Reefer containers, Special Equipment's, ODC & Project cargo,
                  Break-bulk, RO-RO, ship chartering.
                </p>
                <p className="mt-8">
                  We provide schedule for planning, real-time updates, alerts, status of container till delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* connect with us section */}
      <section id="connect-us" className="py-24 mx-auto align-middle bg-gray-100">
        <div className="text-center">
          <div className="pb-16 text-4xl text-[#4AAF70] uppercase">
            Connect <span className="font-bold">With Us</span>
          </div>
          <div className="grid grid-cols-2 gap-6 pb-16">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-2 mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-start-2 mt-12 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="col-start-1 mt-1 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Mobile"
                />
              </div>

              <div className="col-start-1 mt-12 border-b border-gray-300 focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full bg-gray-100 border-0 border-b border-transparent focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="Your Message"
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className=" uppercase inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-base font-medium text-white bg-[#ed7e00] hover:bg-[#f68606] focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </section>
      {/* other industry section */}
      <section id="other-industry" className="mx-auto bg-white max-w-[90rem]">
        <div className="text-center">
          <div className="py-12 text-4xl text-[#4AAF70] uppercase">
            Other <span className="font-bold">Solutions</span>
          </div>
          <div className="grid grid-cols-3 gap-x-0">
            <div className="">
              <img src={image4} alt="" className="" />
            </div>
            <img src={image5} alt="" />
            <img src={image6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalForwarding;
