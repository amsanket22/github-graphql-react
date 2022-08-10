import logo from '../assets/images/about-image3.png';
import customer from '../assets/logos/customer_icon.png';
const home = () => {
  return (
    <div>
      <div className="relative max-w-[50rem] mx-auto items-center pt-10">
        <img src={logo} alt="" />
      </div>
      <div className="p-10 text-2xl max-w-[70rem] text-center mx-auto pb-20">
        <p>A Group Company of Hitachi Transport Syste Japan, Flyjac is a Glocal Brand in</p>
        <p>the supply Chain Industry, with 30+ years of experience in India. Founded in 1990.</p>
      </div>
      <section className=" bg-[#4AAF70] h-[21rem] py-16">
        <div className="grid grid-cols-3 text-center">
          <div className="py-5 ">
            <img src={customer} className="w-10 mx-auto" alt="" />
            <span className="text-3xl text-white">5000+</span>
            <p className="text-lg font-bold">Customers</p>
          </div>
          {/* <div className="w-px h-48 mx-16 ml-6 bg-white"></div> */}
          <div className="py-5 border-l-2 border-r-2">
            <img src={customer} className="w-10 mx-auto" alt="" />

            <span className="text-3xl text-white">1.2 million</span>
            <p className="text-lg font-bold">Ocean Freight FCL (TEUs)</p>
            <p className="text-lg font-bold">handled till Date</p>
          </div>
          {/* <div className="w-px h-48 mx-16 ml-6 bg-white"></div> */}
          <div className="py-5">
            <img src={customer} className="w-10 mx-auto" alt="" />

            <span className="text-3xl text-white">4.5 million</span>
            <p className="text-lg font-bold">SFT warehouse Management</p>
            <p className="text-lg font-bold">Pan India</p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-white">
        <div className="text-[2rem] text-[#ed7e00] uppercase text-center">
          <span>
            Our <span className="font-bold">Solutions</span>
          </span>
        </div>
        <div className="text-lg tracking-wide text-center">
          <p>We're a truly Glocal Integrated Logistics Solution Partner providing array</p>
          <p>of services to our existing and potential customers.</p>
        </div>
      </div>
    </div>
  );
};

export default home;
