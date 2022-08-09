import image4 from '../assets/images/gf-image4.png'
import image5 from '../assets/images/gf-image5.png'
import image6 from '../assets/images/gf-image6.png'

const slider = () => {
    return (
        < div >
            {/* other industry section */}

            < section id='other-industry' className='mx-auto bg-white max-w-[90rem]' >
                <div className='text-center'>
                    <div className='py-12 text-4xl text-[#4AAF70] uppercase'>Other <span className='font-bold'>Solutions</span></div>
                    <div className='grid grid-cols-3 gap-x-0'>
                        <div className=''>
                            <img src={image4} alt="" className='' />
                            <p>Contract logistrics & Transport Solutions</p>

                        </div>
                        <div>
                            <img src={image5} alt="" />

                        </div>
                        <div>

                            <img src={image6} alt="" />
                        </div>

                    </div>

                </div>
            </section >
        </div >
    );
};
export default slider;