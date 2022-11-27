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
        {/* <svg className="absolute right-0 top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,256L120,240C240,224,480,192,720,154.7C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
        {/* <svg className="absolute right-0 top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path></svg> */}
        {/* <svg className="absolute right-0 top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L1440,32L1440,0L0,0Z"></path></svg> */}

        {/* <svg  className="absolute right-0 top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,176C1120,160,1280,160,1360,160L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg> */}
        <svg  className="absolute right-0 top-0 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,32L80,53.3C160,75,320,117,480,112C640,107,800,53,960,26.7C1120,0,1280,0,1360,0L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
       <div className='relative pt-40 pb-80 bg-[#000000e6]'>
       <div className="container  mx-auto flex flex-col justify-center items-center px-4 lg:px-0 mt-32">
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

          <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
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