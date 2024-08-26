"use client"
import React, { useEffect, useRef, useState } from "react";
import "./mobdropdown.css";
import Link from "next/link";

import { IoIosArrowDown } from "react-icons/io";


const MobDropDown = ({btnlist,toggleCategory,pathname,btnName}) => {
  // console.log("mobdropdown",btnName)
  
  

  const [isopen, setIsopen] = useState(-1);
  const [name,setName]=useState(btnName||btnlist[0].name)

  const dropdownRef1 = useRef(null);
//   const list=["a","b","c","d"]

  
  const handleIsopen = (id) => {
    if (isopen === id) setIsopen(-1);
    else setIsopen(id);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsopen(-1);
    }
  };

  const handlevar=(category)=>{
    
    setName(category);
    setIsopen(-1);
    if(toggleCategory)
    toggleCategory(category)
  }

  useEffect(() => {
    // console.log("useeefect->",btnName)
    setName(btnName||btnlist[0].name)
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    // console.log("useeefect->",btnName)
    setName(btnName||btnlist[0].name)
    
  }, [btnName]);
   

  if(!btnlist) return null;
  
  return (
    <div className="w-[100%] block sm:hidden" ref={dropdownRef1}>
        
    <div
      className="mobdropdowndiv"
      
      onClick={() => handleIsopen(0)}
     >
      <span
        
      >
       {name}
      </span>
      <div
        style={{
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
          padding: "0.2rem",
          backgroundColor:`${isopen===-1?"transparent":"white"}`,
          borderRadius: "50%",
        }}
      >
        <IoIosArrowDown color={isopen===-1?"white":"black"} size="20"   />
      </div>

      
    </div>
    { (
        <div className={`${isopen===-1?"hiddenbox":"optionBox"}`}>
          <ul>
            {btnlist?.map((btn, index) => {
              return (
                pathname?<li key={btn.id} className="option"><Link  href={{ pathname: pathname, query: { category:btn.name }  }} className="w-full"  style={{textDecoration:"none",underline:"none"}}><div
                
                 
                onClick={() => handlevar(btn.name)}
                    //  className="option"
                    className="w-full" style={{color:"#999999",fontSize:"16px",fontWeight:"500"}}> 
                
                  
                  {/* <p */}
                  {btn.name}
                  {/* </p> */}
                  
                  
                </div></Link></li>:<li
                key={btn.id}
                  onClick={() => handlevar(btn.name)}
                 
                     className="option"
                >
                  
                  {btn.name}
                  
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
  );
};

export default MobDropDown;
