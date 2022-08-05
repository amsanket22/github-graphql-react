import banner from '../assets/images/about-banner.png';
import image1 from '../assets/images/about-image1.png';
import image2 from '../assets/images/about-image2.png';
import image3 from '../assets/images/about-image3.png';


const AboutUs = () => {
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
              <span className="ml-1 text-sm font-medium text-black md:ml-2 ">About Us</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative max-w-[90rem] mx-auto p-4">
        <div className='py-4 mt-12 max-w-[60rem] border-l-4 border-l-orange-600'>
          <img src={image3} alt="" className='pb-6 pl-4' />

          <p className='ml-4 text-5xl font-medium'>
            Flyjac Logistics, a Group Company of
            Hitachi Transport System Japan is a
            Glocal Brand in the Supply Chain Industry,
            with 30 years of serving more than 5000 customers in India.
          </p>
        </div>

        <p className='p-6 mt-6 text-lg leading-8'>
          Since 1990, we have been a true Global Brand in Freight Forwarding with Global reach and local execution strengths. With over 460 Hitachi Transport System locations worldwide, 280 agents, 81 warehouses in India and managing 4.5 Million Square feet of warehousing space. We provide a seamless experience in Cross Border Freight Forwarding through multi modal and strong carrier relations and operations across all seaports and airports.
        </p>
        <img src={image1} alt="" />

        <p className='p-6 mt-6 text-lg leading-8'>
          In our journey spanning for more than three decades we have broken many barriers with Technological Innovations and spread our wings across many services, procedures, and values, leaving a significant mark in numerous industries. We have successfully handled Supply Chain Projects across diverse sectors Consumer Durables, Home Appliances, Electronics, Telecom, Automotive & Ancillaries, Engineering, Retail, FMCG, Industrial, Chemical, Healthcare
        </p>

        <p className='p-6 text-lg leading-8'>
          In total we offer Integrated Logistics Solutions - Freight Management, Transportation & Distribution, Warehousing, In-Plant Logistics & Temperature Controlled Solutions with State of Art Technology & Infrastructure with best services through trained personnel delivering quality.
        </p>
        <img src={image2} alt="" className='pb-6' />
      </div>

      {/* mission section*/}
      <section id='mission' className='mx-auto bg-[#4AAF70]'>
        <div className='text-center'>

          <div className='py-12 text-4xl text-white uppercase'>Our <span className='font-bold'>Mission</span></div>
          <p className='text-3xl text-white px-[28rem]'>
            We help you enhance your business processes, streamline your operations and improve your bottom-line. We also create opportunities for self-development and excellence, while working towards empowering and enrolling towards social and spiritual development. Our mission also includes building care and competence in networking, communication and personalized service.
          </p>
          <div className='pt-12 text-4xl text-white uppercase'>Our <span className='font-bold'>Philosophy</span></div>
          <div className='flex justify-center py-6'>

            <div className='text-xl text-white'>Customer Delight </div>
            <div className="w-px h-6 ml-6 mr-3 text-white bg-gray-300"></div>
            <div className='text-xl text-white'>
              Self Development

            </div>
            <div className="w-px h-6 ml-6 mr-3 text-white bg-gray-300"></div>

            <div className='text-xl text-white'> Social Welfare</div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default AboutUs;
