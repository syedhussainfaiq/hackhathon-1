import {FiChevronDown } from "react-icons/fi"; 
import { MdOutlineLocalGroceryStore } from "react-icons/md"; 
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5"; 
import { DiCelluloid } from "react-icons/di";

export default function Sale () {
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
                    <div className='flex items-center bg-slate-100 px-3 py-2 p-10'> 
                   <input type="text"
                   placeholder="Search for products..." /><IoSearchOutline/>
                    <MdOutlineLocalGroceryStore className="w-{24px} h-{24px} "/><CgProfile className="w-{24px} h-{24px}" />
                </div>
               </div>
       
            </div>
            <div>
                <div className="flex justify-center"> 
            <img src="Frame 9.png"alt=""/>
             </div>
             <ul> 
               [{   <div className="flex flex-col justify-center p-6 space-y-5 sm:w-[180px] md:w-[300px] lg:w-[400px] ">
                          <div>
                          <img src="image 2.png" alt=""/> 
                          </div>
                          <div> 
                       <img src="image 5.png" alt=""/>
                       </div>
                       <div> 
                       <img src="image 6.png"alt=""/>
                       </div>
                    
                    </div> 
                }]  
                    </ul>
                    <div className="flex  justify-center p-10">
                   <img src="image 1.png"alt=""/>  
                    </div>
                        
                    
                    
        
            </div>
            
        </div>
    )
}