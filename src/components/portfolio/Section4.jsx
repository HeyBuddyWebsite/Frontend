import React, { useEffect, useRef } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useAnimation } from "framer-motion";

function Icon({ id, open }) {
  return (
    <ExpandMoreIcon
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}

const Faqsection = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setOpen(isExpanded ? panel : false);
  };

  return (
    <div
      className="pt-16 w-[100%] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]"
      id="faq"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="w-[80%] mx-auto"
      >
        <div>
          <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl text-white">FAQs</h1>
        </div>

        <div className="pb-14 grid text-white sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4">
          <div>
            <Accordion
           style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
           }}
           
              expanded={open === 1}
              onChange={handleChange(1)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={1} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                What is a CGI company?
              </AccordionSummary>
              <AccordionDetails>
                A CGI company specializes in creating visuals using computer
                graphics and offers services such as 3D modeling, animation,
                visual effects, and virtual reality. These services are used by
                businesses across industries, including entertainment,
                advertising, and simulation.
              </AccordionDetails>
            </Accordion>

            <Accordion
            style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
            }}
              expanded={open === 2}
              onChange={handleChange(2)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={2} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                How do CGI production companies contribute to the film and
                entertainment industry?
              </AccordionSummary>
              <AccordionDetails>
                CGI production companies play a pivotal role in film and
                entertainment. They produce high-quality visual effects,
                animations, and computer-generated sequences. This way, they
                bring imaginative and realistic visuals to the screen to
                captivate the viewers and deliver an enchanting cinematic
                experience.
              </AccordionDetails>
            </Accordion>

            <Accordion
             style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
             }}
              expanded={open === 8}
              onChange={handleChange(8)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={8} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                What services are offered by CGI agencies?
              </AccordionSummary>
              <AccordionDetails>
                A CGI agency specializes in providing computer-generated
                imagery solutions. This includes 3D visualization, animation,
                and virtual experiences.
              </AccordionDetails>
            </Accordion>
          </div>

          <div>
            <Accordion
             style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
             }}
              expanded={open === 4}
              onChange={handleChange(4)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={4} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                How does a 3D CGI Company differ from traditional creative
                agencies?
              </AccordionSummary>
              <AccordionDetails>
                Unlike traditional creative agencies, CGI agencies focus on the
                technical aspects of visual content creation, thereby delivering
                realistic and impactful visuals for every business requirement,
                be it marketing or training.
              </AccordionDetails>
            </Accordion>

            <Accordion
            style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
            }}
              expanded={open === 5}
              onChange={handleChange(5)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={5} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                How does CGI technology work?
              </AccordionSummary>
              <AccordionDetails>
                CGI technology involves the use of computer software and
                algorithms to create realistic and appealing images to captivate
                viewers. This also includes animations, i.e., infusing life into
                3D models with movements. Recent advancements in CGI technology
                include real-time rendering, improved physics simulations, and
                the integration of artificial intelligence. This enhances the
                efficiency and quality of CGI production and makes them highly
                useful for various applications, from movies to virtual
                experiences.
              </AccordionDetails>
            </Accordion>

            <Accordion
             style={{background: "#FFFFFF1A",borderRadius:"8px",color:"white"
             }}
              expanded={open === 7}
              onChange={handleChange(7)}
              className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-yellow-500 hover:bg-opacity-20"
              TransitionProps={{ unmountOnExit: true }}
            >
              <AccordionSummary
                expandIcon={<Icon id={7} open={open} />}
                style={{ border: "0" }}
                className="!text-lg"
              >
                What is CGI packaging? And what benefits does it offer to
                product presentation?
              </AccordionSummary>
              <AccordionDetails>
                CGI packaging involves creating ultra-realistic and visually
                mesmerizing 3D digital product representations of an actual
                product. This involves using computer-generated imagery, which
                allows companies to showcase products in various scenarios and
                designs for impactful marketing, flexible prototyping, and
                captivating visualization for packaging solutions.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Faqsection;
