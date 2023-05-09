import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
        <div className="environment">
          <video playsInline autoPlay muted loop>
            <source src='perfect.webm' />
          </video>
          <div className='content'>
            <div className='text-center mt-24'>
              <h2 className="hero glitch layers" data-text="FALLEN"><span>FALLEN</span></h2>
              <p className='text-large text-gray-100 uppercase tracking-widest'>
                Per aspera <span className='text-gray-500'>ad astra</span> 
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
