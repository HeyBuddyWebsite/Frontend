
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
// import Img from "../../public/Images/img1.webp";
import Link from "next/link";
const Pagenation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2.2 },
  };

  return (
    <div className=" lg:w-[80%] p-4 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Ellipse1.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T084811Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=3de9cfa520301bd661d177272eaa4c98c464301175686ee70382d5c6ab7993db')] bg-no-repeat bg-auto bg-[center_top_1rem] ">
      <div className="py-20  mx-auto text-center justify-center  text-4xl lg:text-4xl font-bold text-white mb-6">
        <motion.h3 {...textAnimation1}>Featured Projects</motion.h3>
      </div>

      <Tab.Group>
        
        <Tab.List className="text-centre mx-auto justify-center text-white overflow-x-auto">
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Real Estate
          </Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Mobile/App Development
          </Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">Gaming</Tab>
          <Tab className="px-12 mx-8 bg-blue-600 rounded-lg p-4">
            Fashion & Lifestyle
          </Tab>
        </Tab.List>
        
        <Tab.Panels className="lg:py-16 lg:px-8 text-white">
          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src='https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0275fcaeef7af081ebf3e5560de485954fc5c168aa96063ecf49e20bac130b2c'
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 1
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0275fcaeef7af081ebf3e5560de485954fc5c168aa96063ecf49e20bac130b2c"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
                />
              </div>

              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 2
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0275fcaeef7af081ebf3e5560de485954fc5c168aa96063ecf49e20bac130b2c"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 3
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
              <div className="border-2 rounded-3xl ">
                <Image
                  src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/img1.webp?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCmFwLXNvdXRoLTEiRjBEAiAa%2FdAUqAEzdF%2BXbeENKQLuX2vnD64RcDlFXLNrjr3XAgIgdWIa6KJBFCle122SL%2BfN%2FuybSK551exz5bSiNVkp4PoqhAMIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzk1ODY0OTU2MDgiDFy7YKnWS4QLgTBp3SrYAo5mEUXyF6sRHeP6Ilkch2eJ%2FpZPhqs%2BOo83Zmj0xAU1q0atmfva4JcKPiPg9AllwHVV6FQ8qBCfx9n4UVlE8QzjIlsYTUSbpJD4npAy%2BvbYVZR9vYt0cYZkpffVqEhGbnxJk7qJUjBN4qs3WKTkShTbcAg5cCkTnEI0TG8Vg8%2BMPufZ43H0%2BwP6eOpsdnP%2BBtJ0SYtMUCY3CYF%2Fsmob75IVCNpwk%2BP17%2BbrNgngEbEQDX2pXgSwjLb9gjR4YRM3Duo%2BERX%2F6De3YabJYc%2FZppDYEyuCrsAOPoF5tNxqR3ir3iNpp66g4jLVvV1D8tRRxpahTze%2Frs9bh7XMz3hxpdxMBchhyaxmgohMuo%2FHuiL4eNvXPN90ZNb5UUdiLJtVUFojxFjbcjMuuQMMUU1VF5g3%2BlStq5dlIOxnhemWOYS8%2B4Nxfk%2Bi1uICnlIKal13ZsJvw9cnAcjAMKir16oGOrQCjlR6WBSITHlL8GQSO%2B7jaxFsQHfCAaqcbqKwWvlc7PevH5y4Pk6hnjNgHMi2PSGnGYS9W2nCbnZkEqtOJqy6za1GMNH58JzmNMnf5znPk13GnoMd%2FGankqIqTJZ6jMcx5fYyyaDd%2BaFTg1NrUl9Vw4NDHmgvyWH%2BKDrXbPTT5%2BItyBSqdUr97xDLS4GximjTlbqZEOsu4kgxuKfHdIz73AKQQxZ8IXHXsbeG2XQR2eUwznDTZ2DpNFCaxDJ8g4rSx0FydyBZhBzkg4vsF%2F778n%2B4JvQVr9WajFgGL2JhwM5Wg3NbqZTo1iphFlItPDHhF9T1ZeKa1v8HPN3GrGxRes8IlL%2BIjPOsSNOW7dsOjB4Azbes%2FfjszgH%2Fu7l4o6My8I8KJm3eyyWXosH0fLSxUgpzt20%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231116T093207Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASBAAA4R4COL4Z34Q%2F20231116%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=0275fcaeef7af081ebf3e5560de485954fc5c168aa96063ecf49e20bac130b2c"
                  width={700}
                  height={700}
                  className="rounded-3xl w-[100vh] h-[60vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h1 className="py-4 font-semibold text-3xl">
                  Housing Landing Page 4
                </h1>
                <p>
                  Lorem, ipsum dolor sit ame earum delectus. Sit explicabo
                  repellendus ullam, nesciunt illo ipsam doloremque consectetur
                  nisi temporibus suscipit architecto aut quaerat. Corrupti,
                  nulla?
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">3D, AR Design</span>
                </p>
                <Link href='/Pages/sliderpages'>
                <button className="rounded-3xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                  Read Case Study <span aria-hidden="true">→</span>{" "}
                </button>
                </Link>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Pagenation;
