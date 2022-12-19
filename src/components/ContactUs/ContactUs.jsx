import React from 'react'
import heroBG from '../../assets/heroBG.avif'


const ContactUs = () => {
  return (
    <section style={{
        backgroundImage: `url(${heroBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }} className='relative'>
        <div>
        </div>
       <div className='relative pt-40 pb-80 bg-[#000000e6]'>
       <div data-aos="zoom-in" className="container  mx-auto flex flex-col justify-center items-center px-4 lg:px-0 mt-32">
        <div className="text-center">
          <h4 className="font-bold text-secondary">Contact Us</h4>
          <h1 className="text-4xl text-white mb-12">Stay connected with us</h1>
        </div>

        <div className="lg:w-1/3 w-full grid gap-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-accent w-full"
            />
          </div>

          <div>
          <textarea className="textarea textarea-accent w-full h-48 " placeholder="Your message"></textarea>
          </div>

          <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Send</button>
        </div>
      </div>
       </div>

       <div>
       
       {/* <svg className="absolute right-0 bottom-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,256L1440,96L1440,320L0,320Z"></path></svg> */}

       <svg className="absolute right-0 bottom-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fillOpacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path></svg>
       </div>
    </section>
  )
}

export default ContactUs