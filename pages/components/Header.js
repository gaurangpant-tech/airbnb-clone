import Image from "next/image"
import {GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,} from '@heroicons/react/solid';

function Header() {
  return (
    
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-5">
  
        
          <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png"
              className=""
              objectFit="contain"
              objectPosition="left"
              layout="fill"
            />
          </div>
        
      
  

   
    
    {/* Left */}
    <div className="flex items-center md:border-2 bg-transparent rounded-full py-2 md:shadow-sm">
      <input className="flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Start your search"></input>
      <SearchIcon className="hidden md:inline-flex md:h-8 bg-red-400 text-white rounded-full p-2 md:mx-2"></SearchIcon>
    </div>

   

    


    {/* Middle */}
    <div className="flex items-center space-x-4 justify-end text-gray-500"> 
      <p className="hidden md:inline-block">Become a host</p>
      <GlobeAltIcon className="h-6 "></GlobeAltIcon>
      <div className="flex border-4 space-x-2 rounded-full p-2">
      <MenuIcon className="h-6"></MenuIcon>
      <UserCircleIcon className="h-6"></UserCircleIcon>
      </div>
    </div>
    
    {/* Right */}
    <div>
      
    </div>


    </header>

    
  )
}

export default Header