
import Image from 'next/image';


function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px]'>
    <Image src='/img/banner.jpeg'
    layout="fill"
    objectFit='cover'></Image>
    <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go?
        Perfect!</p>
        <button 
        className='active: scale-90 px-10 py-4 border text-purple-500 rounded-full bg-white 
        shadow-md hover:shadow-xl 
        '>I'm flexible</button>
    </div>
   
    
    </div>
    
  )
}

export default Banner