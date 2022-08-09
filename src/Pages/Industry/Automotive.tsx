import banner from '../../assets/images/automotive-banner.png';
import image1 from '../../assets/images/automotive-image1.png';
import clients from '../../assets/images/clients.png';
import image2 from '../../assets/images/automotive-image2.png';
import image3 from '../../assets/images/automotive-image3.png';
import image4 from '../../assets/images/automotive-image4.png';


const Automotive = () => {
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

                    <p className='ml-4 text-5xl font-medium'>
                        We bring for you solutions that include
                        aftermarket support, spare parts distribution,
                        point of use feeding, value-add assembly, kitting,
                        and sequencing. Our team deploys customized solutions
                        to meet your requirements and create a smooth
                        experience for you.
                    </p>
                </div>

                <img src={image1} alt="" className='pt-16 pb-6' />


                <p className='p-6 mt-6 text-lg leading-8'>
                    Original equipment is supported through inventory
                    planning that lowers the inventory costs and preserves
                    service levels and parts availability.
                    We aim to create a supply chain that is utilitarian
                    and responsive throughout the product life cycle,
                    distribution, global procurement, and warehousing.
                </p>

                <p className='p-6 text-lg leading-8'>
                    Our experts specialize in deploying lean solutions
                    supported by industry-leading error proofing technology.
                    Every solution that we create is custom engineered
                    to bring the most throughput on your assembly line.

                </p>

                <p className='p-6 text-lg leading-8'>
                    Our experienced teams have researched, designed
                    and implemented data-backed and quality-focused
                    automotive solutions. Every solution is tailored
                    accordingly to make sure the customer's operations
                    get a seamless flow of material. Our focus lies
                    on the seamless sync of operational data, we
                    carefully design the most optimal and quality-focused
                    solutions for our customers. Our solutions and controls
                    engineers work with your ERP systems to design
                    and implement customized call triggers,
                    for a smooth and uninterrupted flow of
                    material to our customer's facility.
                </p>
            </div>

            {/* expertise section*/}
            <section id='expertise' className='mx-auto'>
                <div className='text-center'>

                    <div className='py-12 text-4xl text-[#ed7e00] uppercase'>Our <span className='font-bold'>Expertise</span></div>
                    <div className="grid grid-cols-6">
                        <div className="grid grid-flow-col col-span-4 col-start-2 grid-rows-3 px-8 text-left">
                            <div className="flex">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >1
                                    </div>
                                </div>
                                <span className="ml-4">

                                    In-plant Management
                                </span>
                            </div>
                            <div className="flex">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >2
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Just in time & Line feed
                                </span>
                            </div>
                            <div className="flex">
                                <div>
                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >3

                                    </div>
                                </div>
                                <span className="ml-4">

                                    Primary & Secondary distribution
                                </span>
                            </div>
                            <div className="flex ml-28">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >4
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Reduction in inventory and risk
                                </span></div>
                            <div className="flex ml-28">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >5
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Improved service through demand forecast planning
                                </span></div>
                            <div className="flex ml-28">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >6
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Full visibility and control of the supply chain
                                </span></div>
                            <div className="flex ml-20">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >7
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Scalable solutions with collaborative
                                    <br /> approach to ensure
                                    growth and innovation
                                </span>
                            </div>
                            <div className="flex ml-20">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >8
                                    </div>
                                </div>
                                <span className="ml-4">
                                    Flexible solutions to compliment business model
                                </span></div>
                            <div className="flex ml-20">
                                <div>

                                    <div className="flex items-center justify-center w-10 h-10 font-mono font-bold  bg-[#ed7e00] text-white rounded-full" >9
                                    </div>
                                </div>
                                <p className="ml-4 shrink text-ellipsis">
                                    Technology-driven solutions to reduce stagnant <br /> stock and parts returns through accurate planning <br /> and ordering platform
                                </p></div>
                        </div>

                    </div>
                </div>
            </section >

            {/* client section */}
            <section id='clients' className='pt-8 mx-auto align-middle'>
                <img src={clients} alt="" className='m-auto' />
            </section>

            {/* connect with us section */}
            <section id='connect-us' className='py-24 mx-auto align-middle bg-gray-100'>
                <div className='text-center'>
                    <div className='pb-16 text-4xl text-[#4AAF70] uppercase'>Connect <span className='font-bold'>With Us</span></div>
                    <div className='grid grid-cols-2 gap-6 pb-16'>

                        <div className='grid grid-cols-2 gap-6'>

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
                        <div className='grid grid-cols-2 gap-6'>
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
            <section id='other-industry' className='mx-auto bg-white max-w-[90rem]'>
                <div className='text-center'>
                    <div className='py-12 text-4xl text-[#4AAF70] uppercase'>Other <span className='font-bold'>Industry</span></div>
                    <div className='grid grid-cols-3 gap-x-0'>
                        <div className=''>
                            <img src={image2} alt="" className='' />

                        </div>
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />

                    </div>

                </div>
            </section>
        </div >
    );
};
export default Automotive;
