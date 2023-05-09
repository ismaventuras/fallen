import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
        <div className="bg">
          <video playsInline autoPlay muted loop>
            <source src='perfect.webm' />
          </video>
          <div className='content'>
            <div className='h-screen flex flex-col items-center'>
              <div className='text-center mt-20 flex-1'>
                <h2 className="hero glitch layers" data-text="FALLEN"><span>FALLEN</span></h2>
                <p className='text-xs sm:text-base text-gray-100 uppercase tracking-widest'>
                  Per aspera <span className='text-orange-800 font-bold'>ad astra</span> 
                </p>              
              </div>
              <div className='mb-4 uppercase tracking-widest'>
                <div className='flex gap-4 text-sm'>
                <a href='' target='_blank' className='text-white  font-thin'>
                  docs
                </a>
                <a href='' target='_blank' className='text-white  font-thin'>
                  github
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
