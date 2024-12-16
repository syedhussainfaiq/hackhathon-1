import React from "react";


export default function Hero () {
    return(
       
        <div className="w-1440px h-663px ">
        
         
          
         
          <div className=" bg-[#F2F0F1] justify-center p-28 font-extrabold text-5xl grid-flow-row" >
         <div> 
          <ul>
           <li> FIND CLOTHES </li>
           <li>THAT MATCH</li>
           <li>YOUR STYLE</li>
              </ul>
              <p className="font-normal text-sm">Browse through our diverse range of meticulously crafted garments, designed <br/> to bring out your individuality and cater to your sense of style.</p>
              <button className=" p-10 text-white text-sm bg-black hover:text-blue-500 rounded-s-full">Shop Now</button>
              </div>
              <div className="flex justify-center items-center  mr-20 " > 
              <img  src="/Rectangle 2.png" alt=""/>
              </div>
       </div>
     <div>
     
     </div>
     <div > 
     <section className=" w-[1868px]  h-[122px] bg-black">
      <ul className="flex justify-center p-10 gap-20 mr-8 "> 
       <li> <img src="/Vector(1).png" alt=""/></li>
       <li>  <img src="/Vector(2).png" alt=""/></li>
       <li><img src="/Vector(3).png" alt=""/></li>
      
       <li><img src="Group.png" alt=""/></li>
       <li><img src="/Vector(4).png" alt=""/></li>
        </ul>
    
      
     
     </section>
     </div>
     <section>
      <h1 className="font-extrabold text-5xl flex justify-center p-10">NEW ARRIVALS</h1>
      <ul className="flex justify-center p-10 gap-20 mr-8 ">
       <div className="flex  font-semibold "> 
        <li ><img    src="/image 7.png" alt=""/>T-shirt with Tap Details<img src="/Frame 10.png" alt=""/>4.5/5
        <p className="font-bold">$130</p> </li>
           </div>
           <div className="flex gap-20 font-semibold">

        <li className=""><img src="/image 8.png" alt=""/>Skinny Fit Jeans<img src="/Frame 10.png" alt=""/>3.5/5
        <p className="font-bold">$240</p></li>
        </div>
        <div className="flex gap-20 font-semibold "> 
        <li ><img src="/image 9.png" alt=""/>Checkered Shit<img src="/Frame 10.png" alt=""/>4.5/5
        <p className="font-bold">$180</p></li>
        </div>
        <div className="flex gap-20 font-semibold"> 
        <li><img src="/image 10.png" alt=""/>Sleeve Striped T-Shirt<img src="/Frame 10.png" alt=""/>4.5/5
        <p className="font-bold">$130</p></li>
      
        </div>
      </ul>
     </section>
     
    
      </div>
      
       
        
    )
}

