(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3263],{50090:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var i=s(57437),l=s(2265),r=s(94725),n=s(67517);s(56788),s(3653);var a=s(86123);s(88062);var o=s(25986),d=()=>{let[e,t]=(0,l.useState)(""),[s,r]=(0,l.useState)(""),[d,c]=(0,l.useState)(""),[x,u]=(0,l.useState)(""),[m,h]=(0,l.useState)(!1),p=async i=>{i.preventDefault();try{h(!0);let i=await fetch("https://heybuddyapiadmin.azurewebsites.net/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:s,message:x,mobile:d})});i.ok?(o.ZP.send("service_rf73pwk","template_xb0nca5",{to_name:e,reply_to:s},"UhK7mVKRqqqxxZQJz").then(()=>{a.Am.success("Form submitted successfully! Confirmation email sent.",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}).catch(e=>{console.error("Failed to send confirmation email:",e),a.Am.error("Form submitted, but failed to send confirmation email.",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}),t(""),r(""),c(""),u("")):console.error("Failed to submit form:",i.statusText)}catch(e){console.error("Error during form submission:",e.message)}finally{h(!1)}};return(0,i.jsxs)("div",{className:"bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]",children:[(0,i.jsx)(a.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}),(0,i.jsx)("div",{className:"contact-form-container pt-[20vh] w-[90%] lg:w-[80%] mx-auto",children:(0,i.jsxs)("form",{className:"contact-form",onSubmit:p,children:[(0,i.jsx)("h1",{className:" text-2xl lg:text-4xl font-bold text-center mx-auto mb-[50px]   ",children:"Have a great idea, let’s connect to make it reality"}),(0,i.jsx)("div",{children:(0,i.jsx)("input",{type:"text",placeholder:"Your Name",className:"input-field",value:e,onChange:e=>t(e.target.value),required:!0})}),(0,i.jsx)("div",{children:(0,i.jsx)("input",{type:"email",placeholder:"Your Email",className:"input-field",value:s,onChange:e=>r(e.target.value),required:!0})}),(0,i.jsx)("div",{className:"phone-input-container",children:(0,i.jsx)(n.ZP,{placeholder:"Your Phone Number",className:"input-field black-bg",value:d,style:{backgroundColor:"black"},onChange:c,defaultCountry:"US",required:!0})}),(0,i.jsx)("div",{children:(0,i.jsx)("textarea",{placeholder:"Your Message",className:"input-field",value:x,onChange:e=>u(e.target.value),required:!0})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{type:"submit",className:"submit-button",disabled:m,children:m?"Submitting...":"Submit"})})]})})]})},c=function(e){let{contactusModal:t,handleClose:s,handleModalClose:l}=e;return(0,i.jsx)("div",{id:"sidebar",onClick:s,className:" ".concat(t?"flex items-center justify-center overflow-x-hidden scale-100":"scale-0"," fixed inset-0  backdrop-blur-sm z-50 px-5 pb-10 md:px-0 transform transition duration-150 ease-in-out origin-center"),children:(0,i.jsxs)("div",{className:" relative bg-black bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover bg-bottom opacity-100 rounded-lg h-fit ".concat(t?"block":"hidden"),children:[(0,i.jsx)("div",{className:"flex items-center justify-between",children:(0,i.jsx)("div",{onClick:l,className:" absolute top-[2rem] right-[2rem] p-2 bg-black  rounded-full hover:bg-black w-fit cursor-pointer",children:(0,i.jsx)(r._0w,{color:"white"})})}),(0,i.jsx)(d,{})]})})}},71978:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var i=s(57437),l=s(2265);s(8792);var r=s(20703),n=s(64098),a=s(63748),o=s(138),d=s(98594);s(52274);var c=e=>{let{sliderlist:t}=e,s=(0,n._)(),c=(0,l.useRef)(),x=async()=>{c.current&&await s.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&x()},{threshold:0});return c.current&&e.observe(c.current),()=>{e.disconnect()}},[]);let u=l.useRef(null);return(0,i.jsxs)(a.E.div,{ref:c,initial:"hidden",animate:s,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"w-[100%] mx-auto  sm:mb-0",children:[(0,i.jsx)("div",{className:"sm:w-[90%] mx-auto",children:(0,i.jsx)(o.Z,{ref:u,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}],children:null==t?void 0:t.map(e=>(0,i.jsx)("div",{children:(0,i.jsx)("figure",{className:"flex flex-col overflow-auto scrollbar-hide  p-4 lg:p-6   h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40",style:{borderRadius:"24px",background:"#0000001A",border:"1px solid #FFFFFF33"},children:(0,i.jsxs)("blockquote",{className:"text-gray-400",children:[(0,i.jsx)(r.default,{loading:"lazy",src:e.imgurl,width:450,height:450,className:"h-[32px] w-[32px]",alt:e.heading}),(0,i.jsx)("h3",{className:"py-4 text-xl font-semibold text-white",children:e.heading}),(0,i.jsx)("p",{className:"text-left text-base font-medium text-white",children:e.para})]})})},e.id))})}),(0,i.jsxs)("div",{className:"w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]",children:[(0,i.jsx)("div",{onClick:()=>{var e;return null==u?void 0:null===(e=u.current)||void 0===e?void 0:e.slickPrev()},className:"slider-circle-prev2",children:(0,i.jsx)(d.jUh,{size:"1.5rem",color:"white",className:"slider-arrow"})}),(0,i.jsx)("div",{onClick:()=>{var e;return null==u?void 0:null===(e=u.current)||void 0===e?void 0:e.slickNext()},className:"slider-circle-next2",children:(0,i.jsx)(d.$sw,{size:"1.5rem",color:"white",className:"slider-arrow"})})]})]})},x=e=>{let{heading:t,para:s,list:o}=e,d=(0,n._)(),x=(0,l.useRef)(),u=async()=>{x.current&&await d.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&u()},{threshold:0});return x.current&&e.observe(x.current),()=>{e.disconnect()}},[]);let[m,h]=(0,l.useState)(!1),p=()=>{window.innerWidth<=600?h(!0):window.innerWidth>600&&h(!1)};return((0,l.useEffect)(()=>(p(),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]),o)?(0,i.jsx)(a.E.div,{ref:x,initial:"hidden",animate:d,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:" pt-[60px] lg:pt-[100px] text-white mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob.svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208.svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:" mb-[60px] lg:mb-[100px] flex flex-col items-center",children:[(0,i.jsx)("h1",{className:" lg:w-[80%] mb-[25px] font-bold text-center text-2xl lg:text-4xl",children:t}),(0,i.jsx)("p",{className:" lg:w-[95%]  text-[16px] lg:text-[20px] font-medium text-center",children:s})]})}),m?(0,i.jsx)(c,{sliderlist:o}):(0,i.jsx)("div",{class:"  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4",children:null==o?void 0:o.map((e,t)=>(0,i.jsx)("figure",{class:"flex flex-col  p-4 lg:p-6   h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40",style:{borderRadius:"24px",background:"#0000001A",border:"1px solid #FFFFFF33"},children:(0,i.jsxs)("blockquote",{class:"  text-gray-400",children:[(0,i.jsx)(r.default,{loading:"lazy",src:e.imgurl,width:450,height:450,className:"h-[32px] w-[32px] "}),(0,i.jsx)("h3",{style:{color:"white"},class:"py-4 text-xl font-semibold  text-gray-500 ",children:e.heading}),(0,i.jsx)("p",{style:{color:"white"},className:"text-left text-base font-medium",children:e.para})]})},e.id))})]})}):null}},59858:function(e,t,s){"use strict";var i=s(57437),l=s(2265);s(95726);var r=s(8792),n=s(76344);t.Z=e=>{let{btnlist:t,toggleCategory:s,pathname:a,btnName:o}=e,[d,c]=(0,l.useState)(-1),[x,u]=(0,l.useState)(o||t[0].name),m=(0,l.useRef)(null),h=e=>{d===e?c(-1):c(e)},p=e=>{m.current&&!m.current.contains(e.target)&&c(-1)},g=e=>{u(e),c(-1),s&&s(e)};return((0,l.useEffect)(()=>(u(o||t[0].name),document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}),[]),(0,l.useEffect)(()=>{u(o||t[0].name)},[o]),t)?(0,i.jsxs)("div",{className:"w-[100%] block sm:hidden",ref:m,children:[(0,i.jsxs)("div",{className:"mobdropdowndiv",onClick:()=>h(0),children:[(0,i.jsx)("span",{children:x}),(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0.2rem",backgroundColor:"".concat(-1===d?"transparent":"white"),borderRadius:"50%"},children:(0,i.jsx)(n.OId,{color:-1===d?"white":"black",size:"20"})})]}),(0,i.jsx)("div",{className:"".concat(-1===d?"hiddenbox":"optionBox"),children:(0,i.jsx)("ul",{children:null==t?void 0:t.map((e,t)=>a?(0,i.jsx)("li",{className:"option",children:(0,i.jsx)(r.default,{href:{pathname:a,query:{category:e.name}},className:"w-full",style:{textDecoration:"none",underline:"none"},children:(0,i.jsx)("div",{onClick:()=>g(e.name),className:"w-full",style:{color:"#999999",fontSize:"16px",fontWeight:"500"},children:e.name})})},e.id):(0,i.jsx)("li",{onClick:()=>g(e.name),className:"option",children:e.name},e.id))})})]}):null}},95416:function(e,t,s){"use strict";var i=s(57437),l=s(2265);s(8792);var r=s(20703);s(10243);var n=s(64098),a=s(63748);s(29646),t.Z=e=>{let{handlecontactusModal:t,heading:s,imgurl:o,text:d}=e,[c,x]=(0,l.useState)(!1),[u,m]=(0,l.useState)(!1),h=(0,n._)(),p=(0,l.useRef)();return(0,l.useEffect)(()=>{let e=()=>{window.scrollY>1024&&x(!0)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,i.jsxs)("div",{className:" w-[90%] lg:w-[80%] mx-auto mb-[40px] lg:mb-[100px] ",children:[(0,i.jsxs)("div",{style:{position:"relative",width:"100%",height:"fit-content"},className:"",children:[(0,i.jsxs)("div",{style:{position:"sticky",left:"50%",zIndex:2,color:"#fff",textAlign:"center",marginBottom:"20%"},className:"top-[20vh] md:top-[50vh]",children:[(0,i.jsx)("h1",{className:" lg:w-[80%]    text-center mx-auto text-2xl lg:text-5xl font-bold  lg:font-bold",style:{whiteSpace:"normal"},children:s}),(0,i.jsx)(a.E.div,{className:"mt-[25px] flex items-center justify-center gap-x-6",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:1.2},children:(0,i.jsxs)("div",{onClick:t,className:"getintouch flex gap-4 items-center rounded-md px-8 py-3  text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:[(0,i.jsx)("span",{className:"text-white text-lg font-md ",children:"Consult Our Experts"}),(0,i.jsx)("span",{"aria-hidden":"true",className:"arrow",style:{marginTop:"-0.3rem"},children:(0,i.jsx)(r.default,{lazy:!0,width:500,height:500,src:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/arrow.svg",alt:"arrow",className:"w-auto h-auto lg:w-4 lg:h-4"})})]})})]}),(0,i.jsx)("div",{style:{left:"50%",width:"100%",overflow:"cover"},className:"mt-[30vh] md:mt-[100vh]",children:(0,i.jsx)(r.default,{loading:"lazy",style:{transition:"transform 0.3s ease-out",opacity:"0.3",objectFit:"cover",background:"black"},width:450,height:450,className:"w-[100%] rounded-3xl md:rounded-none h-[60vh] md:h-[100vh] bg-white mx-auto  ",src:o,alt:"Background"})})]}),(0,i.jsx)("div",{ref:p,initial:"hidden",animate:h,variants:{hidden:{opacity:0,y:"0%"},visible:{opacity:1,y:0,transition:{duration:5.5,ease:"easeOut"}}},className:"pt-[40px] lg:pt-[100px] text-[16px] lg:text-[20px]  font-bold text-center mx-auto md:text-left w-[80%] md:w-[100%] text-white",children:(0,i.jsx)("p",{children:d})})]})}},63673:function(e,t,s){"use strict";var i=s(57437),l=s(2265),r=s(10243),n=s(60976),a=s(64098),o=s(63748);function d(e){let{id:t,open:s}=e;return(0,i.jsx)(n.Lfi,{className:"".concat(t===s?"rotate-90":""," h-5 w-5 transition-transform")})}t.Z=e=>{let{heading:t,para:s,list:n}=e,c=(0,a._)(),x=(0,l.useRef)(),u=async()=>{x.current&&await c.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&u()},{threshold:0});return x.current&&e.observe(x.current),()=>{e.disconnect()}},[]);let[m,h]=l.useState(0),p=e=>h(m===e?0:e);return(0,i.jsx)(o.E.div,{ref:x,initial:"hidden",animate:c,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(8).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{className:"pb-[60px] lg:pb-[100px] lg:w-[80%] text-center mx-auto font-bold text-white text-2xl lg:text-4xl",children:t})}),(0,i.jsxs)("div",{className:" grid text-white sm:grid-1  md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4",children:[null==n?void 0:n.map((e,t)=>(0,i.jsxs)(r.Accordion,{open:m===e.id,icon:(0,i.jsx)(d,{id:e.id,open:m}),style:{height:"fit-content"},className:"py-2 px-5 lg:px-8   rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20",children:[(0,i.jsx)(r.AccordionHeader,{style:{border:"0"},onClick:()=>p(e.id),className:"!text-lg !font-semibold",children:e.ques}),(0,i.jsx)(r.AccordionBody,{className:"!text-[14px] !lg:text-[16px] !font-medium",children:e.ans})]},e.id)),(0,i.jsx)("div",{})]})]})})}},43457:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var i=s(57437),l=s(2265),r=s(93696),n=s(4992);s(20808),s(91020);var a=e=>{let{title:t,description:s}=e;return(0,i.jsx)("div",{className:"work__info",children:(0,i.jsxs)("div",{className:"work__left-b1",children:[(0,i.jsx)("h2",{className:"text-left text-3xl font-semibold text-white py-5",children:t}),(0,i.jsx)("p",{className:"text-[14px] lg:text-[16px] font-medium text-left text-white",children:s})]})})},o=s(20703),d=e=>{let{title:t,imgSrc:s}=e;return(0,i.jsx)("div",{className:"work__photo-item",title:t,children:(0,i.jsx)(o.default,{loading:"lazy",width:450,height:450,src:s,alt:t,className:"w-full"})})},c=function(e){let{imageUrl:t,title:s,description:l,last:r}=e;return(0,i.jsx)("div",{className:"work__right-b1 ",style:{padding:"0",background:"transparent",width:"100%"},children:(0,i.jsxs)("div",{className:"work__photo_mob  ",style:{borderRadius:"24px",height:r?"fit-content":"100vh",width:"100%",marginBottom:r?"80px":"opx"},children:[(0,i.jsx)(o.default,{loading:"lazy",width:450,height:450,src:t,alt:"image",className:"h-[60%] w-[100%] md:w-[50%] object-cover ",style:{borderRadius:"24px"}}),(0,i.jsxs)("div",{className:"bg-black  pb-[0rem]",children:[(0,i.jsx)("h2",{className:"text-center text-xl md:text-3xl font-semibold text-white py-5",children:s}),(0,i.jsx)("p",{className:" text-[14px] lg:text-[16px] font-medium  text-center text-white",children:l})]})]})})},x=e=>{let{heading:t,para:s,list:o}=e;return(0,l.useEffect)(()=>{r.ZP.registerPlugin(n.i);let e=document.querySelectorAll(".work__photo-item");e.forEach(function(t,s){t.style.zIndex=e.length-s}),r.ZP.set(".work__photo-item",{clipPath:function(){return"inset(0px 0px 0px 0px)"}});let t=r.ZP.to(".work__photo-item:not(:last-child)",{clipPath:function(){return"inset(0px 0px 100% 0px)"},stagger:.5,ease:"back"});n.i.create({trigger:".work",start:"top top",end:"bottom bottom",animation:t,scrub:.1})},[]),(0,i.jsx)("div",{className:"bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(3).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsx)("div",{className:" pt-[60px] lg:pt-[100px] text-white mx-auto",children:(0,i.jsxs)("div",{className:" pb-[60px] lg:pb-0 flex flex-col items-center mx-auto",children:[(0,i.jsx)("h1",{className:" pb-[25px] lg:w-[80%] mx-auto  font-bold text-center text-2xl lg:text-4xl",children:t}),(0,i.jsx)("p",{className:" lg:w-[95%] mx-auto text-[16px] lg:text-[20px] font-medium text-center",children:s})]})}),(0,i.jsxs)("div",{className:"h-fit relative ",style:{padding:"0"},children:[(0,i.jsxs)("section",{className:"work  hidden md:flex flex-row justify-between",children:[(0,i.jsx)("div",{className:"work__left",children:(0,i.jsx)("div",{className:"work__text flex flex-col items-center",children:null==o?void 0:o.map((e,t)=>(0,i.jsx)(a,{title:e.title,description:e.description},t))})}),(0,i.jsx)("div",{className:"work__right",children:(0,i.jsx)("div",{className:"work__right-b1",style:{background:"transparent",padding:"0"},children:(0,i.jsx)("div",{className:"work__photo flex flex-col items-end",children:null==o?void 0:o.map((e,t)=>(0,i.jsx)(d,{title:t,imgSrc:e.img},t))})})})]}),(0,i.jsx)("section",{className:"work__right_mob flex flex-col gap-[0rem] md:hidden ",children:null==o?void 0:o.map((e,t)=>(0,i.jsx)(c,{imageUrl:e.img,description:e.description,title:e.title,last:t===o.length-1},t))})]})]})})}},23530:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var i=s(57437),l=s(2265),r=s(138);s(20703),s(37115),s(8792);var n=s(64098),a=s(63748),o=s(98594);s(6969);var d=e=>{let{sliderlist:t}=e,s=(0,n._)(),d=(0,l.useRef)(),c=async()=>{d.current&&await s.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&c()},{threshold:0});return d.current&&e.observe(d.current),()=>{e.disconnect()}},[]);let x=l.useRef(null),[u,m]=(0,l.useState)(!1),h=()=>{window.innerWidth<=500?m(!0):window.innerWidth>500&&m(!1)};return((0,l.useEffect)(()=>(h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]),t&&(null==t?void 0:t.length)!==0)?(0,i.jsxs)(a.E.div,{ref:d,initial:"hidden",animate:s,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"w-[100%] mx-auto mb-[80px] sm:mb-0",children:[(0,i.jsx)("div",{className:"sm:w-[90%] mx-auto",children:(0,i.jsx)(r.Z,{ref:x,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:500,settings:{slidesToShow:1,slidesToScroll:1}}],children:null==t?void 0:t.map((e,t)=>(0,i.jsx)("div",{className:"sm:px-2",children:(0,i.jsx)("figure",{style:{background:"#FFFFFF1A",borderRadius:"24px",height:"300px",overflow:"auto"},class:"flex scrollbar-hide flex-col p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20",children:(0,i.jsxs)("blockquote",{class:"  text-gray-400",children:[(0,i.jsx)("h3",{style:{color:"white"},class:"py-4 text-xl font-bold   ",children:e.heading}),(0,i.jsx)("p",{style:{color:"white",paddingBottom:"7px"},className:"text-left text-[14px] lg:text-[16px] font-medium",children:e.para})]})})},t))})}),u?(0,i.jsxs)("div",{className:"w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]",children:[(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickPrev()},className:"slider-circle-prev2",children:(0,i.jsx)(o.jUh,{size:"1.5rem",color:"white",className:"slider-arrow"})}),(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickNext()},className:"slider-circle-next2",children:(0,i.jsx)(o.$sw,{size:"1.5rem",color:"white",className:"slider-arrow"})})]}):(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickPrev()},className:"slider-circle-prev",children:(0,i.jsx)(o.jUh,{size:"1.5rem",color:"white",className:"slider-arrow"})}),(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickNext()},className:"slider-circle-next",children:(0,i.jsx)(o.$sw,{size:"1.5rem",color:"white",className:"slider-arrow"})})]})]}):null},c=s(60976),x=e=>{let{heading:t,para:s,checklist:r,sliderlist:o}=e,x=(0,n._)(),u=(0,l.useRef)(),m={hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},h=async()=>{u.current&&await x.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&h()},{threshold:0});return u.current&&e.observe(u.current),()=>{e.disconnect()}},[]);let[p,g]=(0,l.useState)(0);return(0,i.jsx)(a.E.div,{ref:u,initial:"hidden",animate:x,variants:m,className:"pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(4).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsxs)("div",{className:" text-white",children:[(0,i.jsx)("h1",{className:"mb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl",children:t}),(0,i.jsx)("p",{className:"mb-[60px] lg:mb-[100px] text-[16px] lg:text-[20px] font-medium lg:w-[90%] mx-auto text-center",children:s})]}),r&&(0,i.jsx)("div",{ref:u,initial:"hidden",animate:x,variants:m,className:" py-4 lg:py-6 px-2 lg:px-0 w-[100%]   mx-auto mb-[80px] lg:mb-[150px]",style:{borderRadius:"24px",background:"linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border:"1px solid #FFFFFF",boxShadow:"0px 8px 10px -6px #0000001A"},children:(0,i.jsx)("div",{className:" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2",children:(0,i.jsx)("ol",{className:"  grid grid-cols-2 md:grid-cols-3 mx-auto lg:w-[80%] gap-x-2  lg:gap-x-4 gap-y-4 lg:gap-y-8 ",children:null==r?void 0:r.map((e,t)=>(0,i.jsxs)("div",{className:"  flex items-center justify-start gap-2 text-[#FFFFFF]  ",children:[(0,i.jsx)("san",{className:"flex items-center justify-center w-8 h-8  rounded-full shrink-0 ",children:(0,i.jsx)(c.mny,{className:"w-8 h-8 text-[#6FCF97]"})}),(0,i.jsx)("span",{children:(0,i.jsx)("h3",{className:"text-[14px] lg:text-[16px] font-bold",children:e.title})})]},t))})})}),(0,i.jsx)(d,{sliderlist:o})]})})}},44402:function(e,t,s){"use strict";var i=s(57437),l=s(2265),r=s(20703);s(80597);var n=s(64098),a=s(63748);t.Z=e=>{let{heading:t,para:s,list:o}=e,d=(0,n._)(),c=(0,l.useRef)(),x=async()=>{c.current&&await d.start("visible")};return(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&x()},{threshold:0});return c.current&&e.observe(c.current),()=>{e.disconnect()}},[]),(0,i.jsx)(a.E.div,{ref:c,initial:"hidden",animate:d,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"w-[100%] lg:w-[100%] mx-auto mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%209%20(4).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsxs)("div",{className:" pt-[60px] pb-[60px] lg:pt-[100px] lg:pb-[100px]  text-white  mx-auto flex-flex-column items-center ",children:[(0,i.jsx)("h1",{className:" pb-[25px] lg:w-[80%] text-2xl lg:text-4xl font-bold text-center mx-auto",children:t}),(0,i.jsx)("p",{className:"text-[16px] lg:text-[20px] font-medium lg:w-[90%]  text-white text-center mx-auto   ",children:s})]}),(0,i.jsx)("div",{className:" mx-auto w-[100%] lg:w-[90%] ",children:(0,i.jsxs)("div",{className:" w-[100%] flex flex-col  md:flex-row  justify-between items-center     gap-y-4   mx-auto",children:[(0,i.jsx)("div",{className:"w-[100%]   overflow-y-scroll scrollbar-hide md:scrollbar-default h-[80vh]   ",children:(0,i.jsx)("div",{className:"",children:(0,i.jsx)("div",{className:" ",children:(0,i.jsx)("div",{class:"container text-white",children:(0,i.jsx)("ul",{children:null==o?void 0:o.map((e,t)=>(0,i.jsxs)("li",{className:t===o.length-1?"mb-[0px]":"mb-[50px]",children:[(0,i.jsx)("h3",{className:"font-bold text-xl lg:text-2xl  ",children:e.heading}),(0,i.jsx)("p",{className:"text-[14px] lg:text-[16px] font-medium",children:e.para})]},e.id))})})})})}),(0,i.jsx)("div",{className:"   ",children:(0,i.jsx)(r.default,{loading:"lazy",width:700,height:700,src:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif",className:" h-[50vh] w-[62rem] sm:h-auto sm:w-auto md:h-[50vh] md:w-[62rem] lg:h-[80vh] lg:w-auto object-cover ",alt:"Hey B"})})]})})]})})}},26819:function(e,t,s){"use strict";var i=s(57437),l=s(2265);s(8792),s(20703);var r=s(64098),n=s(63748);t.Z=e=>{let{heading:t,para:s,list:a}=e,o=(0,r._)(),d=(0,l.useRef)(),c=async()=>{d.current&&await o.start("visible")};return(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&c()},{threshold:0});return d.current&&e.observe(d.current),()=>{e.disconnect()}},[]),(0,i.jsx)("div",{children:(0,i.jsx)(n.E.div,{ref:d,initial:"hidden",animate:o,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"pt-[60px] lg:pt-[100px] text-white mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(5).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"mb-[60px] lg:mb-[100px]",children:[(0,i.jsx)("h1",{className:" lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl",children:t}),(0,i.jsx)("p",{className:"ttext-[16px] lg:text-[20px] font-medium mx-auto text-center lg:w-[90%]",children:s})]})}),(0,i.jsx)("div",{class:"   grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4",children:null==a?void 0:a.map((e,t)=>(0,i.jsx)("figure",{style:{borderRadius:"24px",background:"#FFFFFF1A"},class:"flex flex-col  p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-red-600 hover:bg-opacity-40",children:(0,i.jsxs)("blockquote",{class:"  text-gray-400",children:[(0,i.jsx)("h3",{style:{color:"white"},class:"py-4 text-xl font-bold  text-gray-500 ",children:e.heading}),(0,i.jsx)("p",{style:{color:"white"},className:"text-left text-[14px] lg:text-[16px] font-medium",children:e.para})]})},e.id))})]})})})}},69053:function(e,t,s){"use strict";s.d(t,{Z:function(){return u}});var i=s(57437);s(8792);var l=s(2265),r=s(20703),n=s(64098),a=s(63748);s(10243),s(6969);var o=s(59858),d=s(138),c=s(98594),x=e=>{let{sliderlist:t,category:s}=e,o=(0,n._)(),x=(0,l.useRef)(),u=async()=>{x.current&&await o.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&u()},{threshold:0});return x.current&&e.observe(x.current),()=>{e.disconnect()}},[]);let m=l.useRef(null);return(0,i.jsxs)(a.E.div,{ref:x,initial:"hidden",animate:o,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"w-[100%] mx-auto mb-[0px] sm:mb-0 ",children:[(0,i.jsx)("div",{className:"sm:w-[90%] mx-auto",children:(0,i.jsx)("div",{style:{borderRadius:"24px",background:"#FFFFFF1A",height:"fit-content"},className:"p-6  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  w-full",children:(0,i.jsx)(d.Z,{ref:m,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:640,settings:{slidesToShow:2,slidesToScroll:2}}],children:null==t?void 0:t.filter((e,t)=>s===e.name).map((e,t)=>e.images.map((e,t)=>(0,i.jsxs)("div",{className:"px-2",children:[" ",(0,i.jsx)(r.default,{loading:"lazy",src:e,width:450,height:450,className:"w-[100%] h-[100%] ",alt:"9"})]},t)))})})}),(0,i.jsxs)("div",{className:"w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]",children:[(0,i.jsx)("div",{onClick:()=>{var e;return null==m?void 0:null===(e=m.current)||void 0===e?void 0:e.slickPrev()},className:"slider-circle-prev2",children:(0,i.jsx)(c.jUh,{size:"1.5rem",color:"white",className:"slider-arrow"})}),(0,i.jsx)("div",{onClick:()=>{var e;return null==m?void 0:null===(e=m.current)||void 0===e?void 0:e.slickNext()},className:"slider-circle-next2",children:(0,i.jsx)(c.$sw,{size:"1.5rem",color:"white",className:"slider-arrow"})})]})]})},u=e=>{let{handlecontactusModal:t,heading:s,para:d,btnlist:c,imglist:u}=e,[m,h]=(0,l.useState)(!1),p=(0,n._)(),g=(0,l.useRef)(),b=async()=>{g.current&&await p.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&b()},{threshold:0});return g.current&&e.observe(g.current),()=>{e.disconnect()}},[]);let[v,f]=(0,l.useState)(c&&c.length>0?c[0].name:""),w=e=>{f(e)},[y,j]=(0,l.useState)(!1),N=()=>{window.innerWidth<=640?j(!0):window.innerWidth>640&&j(!1)};return(0,l.useEffect)(()=>(N(),window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)}),[]),(0,i.jsx)(i.Fragment,{children:c?(0,i.jsx)(a.E.div,{ref:g,initial:"hidden",animate:p,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"pt-[60px] lg:pt-[100px] text-white mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(6).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h1",{className:" lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl",style:{color:"white"},children:s}),(0,i.jsx)("p",{className:"text-white text-[16px] lg:text-[20px] font-medium text-center lg:w-[90%] mx-auto pt-[25px] ",children:d})]}),y?(0,i.jsx)("div",{className:"pt-[25px]",children:(0,i.jsx)(o.Z,{btnlist:c,toggleCategory:e=>w(e)})}):(0,i.jsx)("div",{className:"pt-[25px] lg:pt-[50px] flex gap-4 md:gap-6  w-[100%]  flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold",children:null==c?void 0:c.map((e,t)=>(0,i.jsx)("button",{onClick:()=>w(null==e?void 0:e.name),className:v===(null==e?void 0:e.name)?"btnShape btnShapeClicked":"btnShape",children:null==e?void 0:e.name},null==e?void 0:e.id))}),(0,i.jsx)("div",{className:"pt-[60px] lg:pt-[100px]",children:y?(0,i.jsx)(x,{sliderlist:u,category:v}):(0,i.jsx)("div",{style:{borderRadius:"24px",background:"#FFFFFF1A",height:"fit-content"},className:"p-8 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 w-full",children:(0,i.jsx)("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6",children:null==u?void 0:u.filter(e=>v===e.name).flatMap(e=>e.images.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)(r.default,{loading:"lazy",src:e,width:450,height:450,className:"w-full h-full",alt:"Image"})},t)))})})})]})}):null})}},88697:function(e,t,s){"use strict";s.d(t,{Z:function(){return c}});var i=s(57437),l=s(2265),r=s(64098),n=s(63748),a=s(138);s(8792),s(20703);var o=s(98594);s(6969);var d=e=>{let{sliderlist:t}=e,s=(0,r._)(),d=(0,l.useRef)(),c=async()=>{d.current&&await s.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&c()},{threshold:0});return d.current&&e.observe(d.current),()=>{e.disconnect()}},[]);let x=l.useRef(null);return(0,i.jsxs)(n.E.div,{ref:d,initial:"hidden",animate:s,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"w-[100%] mx-auto  sm:mb-0 ",children:[(0,i.jsx)("div",{className:"sm:w-[90%] mx-auto",children:(0,i.jsx)(a.Z,{ref:x,dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}],children:null==t?void 0:t.map((e,t)=>(0,i.jsx)("div",{children:(0,i.jsx)("figure",{style:{borderRadius:"24px",background:"#0000001A",border:"2px solid #FFFFFF33"},class:"flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30",children:(0,i.jsxs)("blockquote",{class:" text-gray-400 flex flex-col justify-between h-full",children:[(0,i.jsx)("p",{className:"text-left text-base font-medium text-white",children:e.content}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{className:"pt-4 text-right font-bold text-white text-xl self-end",children:e.name})})]})})},e.id))})}),(0,i.jsxs)("div",{className:"w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]",children:[(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickPrev()},className:"slider-circle-prev2",children:(0,i.jsx)(o.jUh,{size:"1.5rem",color:"white",className:"slider-arrow"})}),(0,i.jsx)("div",{onClick:()=>{var e;return null==x?void 0:null===(e=x.current)||void 0===e?void 0:e.slickNext()},className:"slider-circle-next2",children:(0,i.jsx)(o.$sw,{size:"1.5rem",color:"white",className:"slider-arrow"})})]})]})},c=e=>{let{heading:t,para:s,list:a}=e,o=(0,r._)(),c=(0,l.useRef)(),x=async()=>{c.current&&await o.start("visible")};(0,l.useEffect)(()=>{let e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&x()},{threshold:0});return c.current&&e.observe(c.current),()=>{e.disconnect()}},[]);let[u,m]=(0,l.useState)(!1),h=()=>{window.innerWidth<=600?m(!0):window.innerWidth>600&&m(!1)};return(0,l.useEffect)(()=>(h(),window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]),(0,i.jsx)(n.E.div,{ref:c,initial:"hidden",animate:o,variants:{hidden:{opacity:0,y:"20%"},visible:{opacity:1,y:0,transition:{duration:1.5,ease:"easeOut"}}},className:"pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob.svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(7).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]",children:(0,i.jsxs)("div",{className:"w-[90%] lg:w-[80%] mx-auto",children:[(0,i.jsx)("h1",{className:"pb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl",style:{color:"white"},children:t}),(0,i.jsx)("p",{className:"pb-[60px] lg:pb-[100px] text-[16px] lg:text-[20px] font-medium lg:w-[90%] text-center mx-auto",style:{color:"white"},children:s}),u?(0,i.jsx)(d,{sliderlist:a}):(0,i.jsx)("div",{className:"    grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4",children:null==a?void 0:a.map((e,t)=>(0,i.jsx)("figure",{style:{borderRadius:"24px",background:"#0000001A",border:"2px solid #FFFFFF33"},class:"flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30",children:(0,i.jsxs)("blockquote",{class:" text-gray-400 flex flex-col justify-between h-full",children:[(0,i.jsx)("p",{className:"text-left text-base font-medium text-white",children:e.content}),(0,i.jsx)("div",{children:(0,i.jsx)("h3",{className:"pt-4 text-right font-bold text-white text-xl self-end",children:e.name})})]})},e.id))})]})})}},3653:function(){},52274:function(){},95726:function(){},20808:function(){},6969:function(){},50649:function(){},80597:function(){},91020:function(){},29646:function(){}}]);