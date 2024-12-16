
import {FiChevronDown } from "react-icons/fi"; 
import { MdOutlineLocalGroceryStore } from "react-icons/md"; 
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5"; 




export default function Navbar () {
    return(
        <div className="w-1240px h-48px  ">
            <div className="text-[#000000]  flex justify-center sm-w-126px h-18px pl-14  ">
                    <h1  className="font-extrabold text-2xl p-4 p " >SHOP.CO </h1>
                
                <div className="font-normal gap-[30px] flex p-4   ">


                  
                 <a  href= " Sale" className="text-slate-600 hover:text-blue-400  ">On Sale</a>  <FiChevronDown className="" />
                
                <a href='#' className='text-slate-600 hover:text-blue-400 '>New Arrivale</a>  
                <a href='#' className='text-slate-600 hover:text-blue-400 '>Brands</a>  
                
                </div>
                
                <div  className='flex items-center space-x-6'>
                    <div className='hidden lg:flex items-center bg-slate-100 px-3 py-2'> 
                   <input type="text"
                   placeholder="Search for products..." /><IoSearchOutline/>
                    <MdOutlineLocalGroceryStore className="w-{24px} h-{24px} "/><CgProfile className="w-{24px} h-{24px}" />
                </div>
               </div>
       
            </div>
            
        </div>
    )
}