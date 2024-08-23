"use client"
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
// import "../styles/button.css"

// import Img1 from "../../public/Images/img1.png";
// import Logo from "../../public/Images/logo2.png";

const Footer = () => {
  const list1={id:1,
    name:"About",
    items:[{id:1,name:"Our Company",link:"/pages/Aboutus"},{id:2,name:"Why Us",link:"/#whyus"},{id:3,name:"Testimonials",link:"/#testimonials"}],
  };
  const list2={
    id:2,
    name:"Services",
    items:[{id:1,name:"3D Modelling",link:"/pages/services/3dmodeling"},{id:9,name:"Metaverse Development",link:"/pages/services/metaverse"},{id:2,name:"AR Development",link:"/pages/services/ardevelopment"},{id:3,name:"Custom Software",link:"/pages/services/customsoftware"},{id:4,name:"Game Development",link:"/pages/services/gamedevelopment"},{id:5,name:"VR Development",link:"/pages/services/vrdevelopment"},{id:6,name:"3D Billboards",link:"/pages/services/billboard"},{id:7,name:"CGI Development",link:"/pages/services/cgi"},{id:8,name:"Web3 Development",link:"/pages/services/web3"},{id:10,name:"AI Development",link:"/pages/services/aidevelopment"}],
  };
  const list3={
    id:3,
    name:"Case Studies",
    items:[{id:1,name:"3D Modelling",link:"/pages/casestudies",btnName:"3D"},{id:2,name:"AR Development",link:"/pages/casestudies",btnName:"AR"},{id:3,name:"Custom Software",link:"/pages/casestudies",btnName:"Custom Software"},{id:4,name:"Game Development",link:"/pages/casestudies",btnName:"Gaming"},{id:5,name:"VR Development",link:"/pages/casestudies",btnName:"VR"},{id:6,name:"CGI Development",link:"/pages/casestudies",btnName:"CGI"},{id:7,name:"Artificial Intelligence",link:"/pages/casestudies",btnName:"AI"},{id:8,name:"Computer Vision",link:"/pages/casestudies",btnName:"Computer Vision"},],
  };
  const list4={
    id:4,
    name:"Blog",
    items:[{id:1,name:"3D Modelling",link:"/pages/Blog",btnName:"3D"},{id:2,name:"AR Development",link:"/pages/Blog",btnName:"AR"},{id:3,name:"Gaming Development",link:"/pages/Blog",btnName:"Games"},{id:4,name:"CGI Development",link:"/pages/Blog",btnName:"CGI"},{id:5,name:"Artificial Intelligence",link:"/pages/Blog",btnName:"AI"},{id:6,name:"Immersive Technologies",link:"/pages/Blog",btnName:"Immersive Technologies"},],
  };
  const list5={
    id:5,
    name:"Portfolio",
    items:[{id:1,name:"CGI Development",link:"https://portfolio.heybuddy.co.in/"}],
  };
  const list6={
    id:6,
    name:"Contact",
    items:["+91 9318398188","info@heybuddy.co.in","Address: Forum, DLF Cyber City, DLF Phase 3, Sector 24, Gurugram, Haryana 122002"],
  };
  const [expand1,setExpand1]=useState(false);
  const [expand2,setExpand2]=useState(false);
  const services=expand1?list2?.items:list2?.items?.splice(0,7);
  const caseStudy=expand2?list3?.items:list3?.items?.splice(0,7);
  return (
    <div
      className="relative lg:w-full  left-0 h-full bottom-0 mx-auto text-center lg:text-left"
      // style={{ borderTop: "1px solid white" }}
    >
      <footer className="relative    top-8 bg-[bottom] h-[100%] bg-no-repeat bg-auto object-cover">
        <video
          style={{ objectPosition: "top" }}
          className="w-full h-full object-cover absolute top-0 left-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/video%20(1080p).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className=" lg:w-[100%]    lg:px-0   relative z-10">
          


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-[95%] mx-auto pb-16 gap-8 ">
            
            <div className=" flex justify-center ">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list1.name}</p>
                  <ul>    
                    {
                      list1?.items?.map((item,index)=>{
                        return    <Link key={item.id}  href={item.link}><li  className="text-sm  font-medium text-white mt-[10px]" style={{marginBottom:"10px"}}>{item.name}</li></Link>
                      })
                    }                
                 
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            <div className=" flex justify-center ">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list2?.name}</p>
                  <ul>    
                    {
                      services?.map((item,index)=>{
                        return   <Link key={item.id}  href={item.link}> <li  className="text-sm  font-medium text-white mb-[10px]" >{item.name}</li></Link>
                      })
                    }                
                   <p className="text-sm  font-medium text-white cursor-pointer mt-[10px]" onClick={()=>setExpand1(!expand1)}>{expand1?"less...":"more..."}</p>
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            <div className=" flex justify-center ">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list3?.name}</p>
                  <ul>    
                    {
                      caseStudy?.map((item,index)=>{
                        return    <Link key={item.id}  href={{ pathname: '/pages/casestudies', query: { category:item.btnName } }} ><li  className="text-sm   font-medium text-white mb-[10px]" >{item.name}</li></Link>
                      })
                    }                
                   <p className="text-sm  font-medium text-white cursor-pointer mt-[10px]" onClick={()=>setExpand2(!expand2)}>{expand2?"less...":"more..."}</p>
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            <div className=" flex justify-center">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list4.name}</p>
                  <ul>    
                    {
                      list4?.items?.map((item,index)=>{
                        return    <Link key={item.id}  href={{ pathname: '/pages/Blog', query: { category:item.btnName } }} ><li  className="text-sm   font-medium text-white " style={{marginBottom:index===list4.items.length-1?"0px":"10px"}}>{item.name}</li></Link>
                      })
                    }                
                 
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            <div className=" flex justify-center">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list5.name}</p>
                  <ul>    
                    {
                      list5?.items?.map((item,index)=>{
                        return   <a key={index} href="https://portfolio.heybuddy.co.in/" target="_blank" rel="noopener noreferrer"> <li  className="text-sm  font-medium text-white" style={{marginBottom:index===list5.items.length-1?"0px":"10px"}}>{item.name}</li></a>
                      })
                    }                
                 
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            <div className=" flex justify-center">
              {
                
                  <div>
                  <p className="text-xl font-semibold text-white mb-[10px] lg:mb-[25px]">{list6.name}</p>
                  <ul>    
                    {
                      list6?.items?.map((item,index)=>{
                        return    <li key={index} className="text-sm  font-medium text-white" style={{marginBottom:index===list6.items.length-1?"0px":"10px"}}>{item}</li>
                      })
                    }                
                 
                  
                  </ul>
                  </div>
              
              }
              
            </div>
            
          </div>

          <div className=" text-center text-sm lg:text-sm mx-auto border-t py-8 px-2 md:px-0  text-white flex flex-col md:flex-row gap-[10px] w-[100%] justify-around items-center">
            <p className="text-sm">Powered By Galaxium Technology Pvt. Ltd.</p>
            <p className="text-sm">Copyright &copy; 2023. heybuddy.co.in | All Rights Reserved </p>
            <div><ul class="mx-auto justify-center  flex lg:justify-start gap-6 sm:mt-0 sm:justify-end text-center">
                      <li>
                        <a
                          href="https://www.facebook.com/heybuddyofficialin?mibextid=LQQJ4d"
                          rel="noreferrer"
                          target="_blank"
                          class="text-white transition hover:opacity-75"
                        >
                          <span class="sr-only">Facebook</span>

                          <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.instagram.com/heybuddyofficialin?igsh=bmV0ZGJmZGozY3Zq"
                          rel="noreferrer"
                          target="_blank"
                          class="text-white transition hover:opacity-75"
                        >
                          <span class="sr-only">Instagram</span>

                          <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://www.linkedin.com/company/hey-buddy-official/"
                          rel="noreferrer"
                          target="_blank"
                          class="text-white transition hover:opacity-75"
                        >
                          <span class="sr-only">Linkedin</span>

                          <svg
                            class="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              // d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              //  d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                              d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul></div>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
