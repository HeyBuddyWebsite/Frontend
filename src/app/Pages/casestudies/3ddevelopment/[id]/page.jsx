// "use client";
import Section1 from "@/components/casestudiescomp/realstatecomp/gamedev/Section1";
import Temp from "@/components/casestudiescomp/realstatecomp/gamedev/Temp";
import Section11 from "@/components/casestudiescomp/realstatecomp/gamedev/Section11";
import Section2 from "@/components/casestudiescomp/realstatecomp/gamedev/Section2";
import Section3 from "@/components/casestudiescomp/realstatecomp/gamedev/Section3";
import Section4 from "@/components/casestudiescomp/realstatecomp/gamedev/Section4";
import Section5 from "@/components/casestudiescomp/realstatecomp/gamedev/Section5";
import Section6 from "@/components/casestudiescomp/realstatecomp/gamedev/Section6";
import Section7 from "@/components/casestudiescomp/realstatecomp/gamedev/Section7";
import Section8 from "@/components/casestudiescomp/realstatecomp/gamedev/Section8";
import Section9 from "@/components/casestudiescomp/realstatecomp/gamedev/Section9";

import React from "react";
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "1",
      heading1: "Hyper-realistic Animated Video showcasing innovative",
      heading2: "3D CT Scanner to Augment Airport Security",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/1.png",
      para1:
        "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security.",
      para2:
        "Hey Buddy's 3D modelling team developed an ultra-realistic 3D video to showcase scanners’ capability to create an impact.",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/6.png",

      about:
        "Our client is a leading CT scanner manufacturer in the UAE. They wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest state-of-the-art CT scan machine developed for airports. They needed a creative partner with a team that must possess skills to showcase their revolutionary but complex vision accurately. The video was going to be ultra-realistic animations requiring not just software skills but also hardware resources. Hey Buddy fits their criteria of the right partner with the right resources. To realize their project, we took the responsibility of designing a high-quality 3D animation video demonstrating the intricate details of the scanner using advanced technology.",
      section5: {
        heading:
          "The Transformative Process of Using Captivating Visuals and Narrative for the Animated Video",
        requirement:
          "We understood the client’s requirement and, to meet that, it was vital for our team to create a visually striking and functionally accurate 3D CT scanner model. The CT scanner was filled with unique features such as highly accurate scanning and high-quality visuals to help security personnel easily identify and differentiate objects.",
        execution:
          "Our expert 3D modelers worked hard using the latest development tools and techniques to develop the required 3D model. Moreover, they incessantly collaborated with the client for their continuous feedback and its incorporation. This project highlights our perfect fusion of creativity, technological expertise, and effective communication. Lastly, we used a render farm to achieve the highest standards in resolution and detail in a short time.",
        delivery:
          "This dedication to quality allowed us to showcase our extra professionalism to the project. In the end, the video perfectly demonstrated everything from baggage entering the scanner to generating accurate 3D images.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ct-scanner/airport2.png",
      },
      section6: {
        heading:
          "The Client’s Mission of Revolutionizing Airport Security Transformed into a 3D Animated Video",
        para: "Our team developed a visually compelling 3D explanatory video that demonstrates the features and operational details of the CT scanner using advanced technologies. We infused the industry-standard tools, Blender, Zbrush, and Substance Painter to showcase the project’s potential to revolutionize airport security measures.",
        list1:
          "The educational video simplifies complex concepts about the CT scanner.",
        list2:
          "This helped the client reinforce their pitch and convince airport authorities, their prospective buyers",
        list3:
          "Highly detailed close-up shots and visual effects to highlight the key features.",
        grid: {
          cell11: "4",
          cell1: "Months of Strategic Collaboration",
          cell21: "100",
          cell2: "Hours Saved in Post-Processing by Using a Rendering Farm",
          cell31: "20",
          cell3: "Days Early Delivery Before the Deadline",
          cell41: "30",
          cell4: "Closeup Shots to Highlight Details",
        },
      },
      section7: {
        heading1: "Get an Expert Team",
        heading2: "for Your Next Animation Project",
      },
      section8: {
        heading:
          "The client reached us to develop a realistic demonstrative video of their latest state-of-the-art CT scanner machine with 3D software.",
        requirement:
          "We collaborated with the client to understand their goals and vision. ",
        ideation:
          "Brainstormed creative concepts and innovative ways to showcase the 3D video.",
        designing:
          "Use of Blender, Zbrush, and Substance Painter for designing and texturing the model.",
        development:
          "Building animated sequences with industry-standard tools to show operational details.",
        deployment:
          "Successful deployment by using Render Farm for high-quality visuals and a polished product.",
      },
      section9: {
        heading1: "Immense Technical Complexity",
        heading2: "Educational Content Balance",
        heading3: "Render Resource Management",
        para1:
          "Achieving a high level of realism was necessary to animate the 3D CT scanner. It was only possible by using multiple tools and accurate representation of physical components. Our design team also had to learn the scanner’s specifications and functionalities.",
        para2:
          "Our team had to create the perfect balance between visually engaging content and educational value through project development. Careful consideration was necessary to avoid overwhelming viewers with excessive technical information. We couldn’t sacrifice accuracy for the sake of complex operational details.",
        para3:
          "It wasn’t possible to render such a complex animated video in a short time. We relied on a Render Farm to meet project deadlines and deliver an exceptional final product. Our team had to balance the need for quality work with time and cost constraints. The data storage and transfer between the modeling and rendering stages were also challenging for Hey Buddy.",
      },
      testimonal:
        "We had the privilege of collaborating with the talented team of Hey Buddy. They made the animation almost life-like by bringing realism and accuracy to the final video. Now we can explain the complex features of our CT scanners to our customers and revolutionize airport security. I would give full marks to the design and execution team behind the project. The video perfectly balances complexity and accessibility.",
      section11: {
        para: "Do you want to design and develop 3D animated videos for your products or other projects? Demonstrate your expertise with the best animation. We create digital masterpieces with high accuracy and realism. ",
      },
      link: "/Pages/casestudies/3ddevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "2",
      heading1: "How Hey Buddy Designed AAA Artistic Characters for a",
      heading2: "Korean Film Studio?",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/korean-studio/korean AAA game 2.png",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/korean-studio/korean%20AAA%20character.jpg",

      para1:
        "Our client, a well-known Korean film studio, known for its animated and drama films, required dynamic characters with AAA quality. They wanted them as per the decided theme of their upcoming short film.",
      para2:
        "We developed 42 legendary warriors with the right texture, clothing, rigging, and animation to make the characters appear ultra-realistic.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our client, a well-known Korean film studio, is famous for its multiple animated and drama films. They required dynamic characters with AAA quality. They wanted them to be realistic and as per the decided theme for their upcoming short film. The potential partner must value their priority of storytelling and cutting-edge animation of their films. After an in-depth-market research, Hey Buddy emerged as the right choice. We took the creative task of designing and rigging 42 legendary warriors. Our designers prioritized texturing, clothing, rigging, and animation to make the characters appear ultra-realistic.",
      section5: {
        heading:
          "Joining Hands for Designing, Rigging, and Innovating Life-Like 3D Characters",
        requirement:
          "Combining realistic detail and the thematic requirements was the primary challenge of this project. We started the project with a collaborative kickoff to understand the vision of our client for its upcoming short film. The client asked us to put heavy emphasis on quality and and time adjustment, if required.",
        execution:
          "We had to deploy various rendering techniques to produce high-quality visual outputs with 3D artistry and a village environment. Effective communication was necessary to meet the artistic vision of the film studio.      We used industry-standard software, including ZBrush, Blender, Marvelous Designer, Substance Painter, and 3ds Max to create these animated characters.",
        delivery:
          "It was challenging to ensure the animation aligned with the narrative and emotional setting of the film. However, our team made the job possible with the help of their experience and cutting-edge skills.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/korean-studio/korean%20AAA%20game%201.png",
      },
      section6: {
        heading: "The Client’s Requirements Were Transformed into 3D Realities",
        para: "The collaborative effort between Hey Buddy and the Korean film studio resulted in the realization of 42 unique, realistic, and dynamic warrior legends. We perfectly demonstrated the swords, attire, environments, and other assets with detail to reflect the historical and cultural context.",
        list1: "Each character highlights distinctive features.",
        list2:
          "The styling of the characters contributes to a more meaningful and immersive storytelling experience.",
        list3:
          "The characters offer seamless movements after the rigging work.",
        list4:
          "Our work demonstrates realistic details and stylized flair in the characters and their environment.",
        grid: {
          cell11: "AAA",
          cell1: "Quality",
          cell21: "42",
          cell2: "Unique and realistic 3D characters",
          cell31: "1000+",
          cell3: "dedicated hours in rigging work.",
          cell41: "95",
          cell4: "hours saved from the development timeline.",
        },
      },
      section7: {
        heading1: "Get Our Expert 3D Development Team",
        heading2: "for Your Next Film",
      },
      section8: {
        heading:
          "We sat with our clients to refine their idea of 42 unique warrior legends with a creative blend of realistic detail. It required intensive rigging, animation, and texturing to create unique characters with lifelike movements.",
        requirement:
          "Our team started with an in-depth exploration of the project’s requirements and close collaboration.",
        ideation:
          "Creative ideation began by conceptualizing each unique character and team discussions.",
        designing:
          "We used ZBrush, Blender, and Marvelous Designer to translate our ideas into tangible assets.",
        development:
          "We textured and rigged each character with Blender, 3ds Max, and Substance Painter.",
        deployment:
          "Strict quality assurance checks were necessary to ensure the smoothest final delivery of characters.",
      },
      section9: {
        heading1: "Ancient Korean Cultural Understanding",
        heading2: "Vast Technical Complexity",
        heading3: "Timeline Pressure",
        para1:
          "The creation of 42 characters in the ancient Korean village required a deep cultural understanding of the country. We hired a Korean historian to help our team understand the culture such as dress, appearance, lifestyle, and all the other aspects. Along with that, it was necessary to make each character visually appealing, and coherent with the village setting. Taking regular feedback from the client was also required to ensure quality.",
        para2:
          "We needed to work on meticulous detail leaving no room for errors and mistakes. Thus, q high level of expertise and skills were necessary for the 3D modeling, texturing, animation, and rigging process. It took a lot of work to maintain consistency across all the characters and environmental details.",
        para3:
          "The client gave us a timeline of 6 months to complete the characters. However, the complexity and detailed design of the project created time pressure on time. It was all about creating a balance between digital perfection and project timeliness. We implemented an agile project management approach to ensure the timeliness of the project.",
      },
      testimonal:
        "It was a delightful experience to let Hey Buddy design the characters of our short film. Their commitment to delivering the best was visible by going out of the way to ensure cultural authenticity in our characters. They delivered the best. The rigging is of high quality and the characters they designed realistically. Their 3D modeling expertise and great client support are highly commendable. I think we are going to work with Hey Buddy again in our future projects.",
      section11: {
        para: "Do you want to design realistic characters for your films or other projects? Realize your ideas in 3D form with us. We implement industry-standard tools to create artistic masterpieces. ",
      },
      link: "/Pages/casestudies/3ddevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "3",
      heading1: "Hollywood Styled Semi-Realistic",
      heading2: "3D Gaming Characters",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/hollywood/Hollywood Style 1.png",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/hollywood/Hollywood%20Style%202.png",
      para1:
        "Our client, a popular gaming publisher with multiple AAA and indie games needed a creative game development partner to design characters. They needed Hollywood-styled characters with meticulous detail for 4K resolution.",
      para2:
        "We extensively used Blender and ZBrush to capture the signature looks of each singer and design them individually",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our client, a gaming publisher, is popular for multiple AAA and indie games. They needed a creative game development partner to design characters for their latest Hollywood-styled game. 8 characters were needed with hair particles and 4K resolution. The potential partner must have a competent team that can meticulously sculpt each singer’s facial features with the highest accuracy. After a one-to-one meeting, Hey Buddy was selected as the creative partner to bring these characters into 3D life. We extensively used Blender and ZBrush to capture the signature looks of each singer and design them individually.",
      section5: {
        heading:
          "The Tale of Conceptualization, Sculpting, and Recreation of Singer Models",
        requirement:
          "Designing eight digital starts in 4K regulation and accuracy was a major challenge for our team. We dedicated our time and precision to capturing every facial detail of each character. Blender was heavily used to define iconic hairstyles with complex hair particles.",
        execution:
          "Our team understood the client's unique requirements and struck the perfect balance between artistic expression and technical proficiency. We brought iconic hairstyles to life with complex hair creation in Blender. Each strand was individually placed and stylized for authenticity. ",
        delivery:
          "The perfect blend of artistic expression and technical proficiency led to the creation of eight digital stars in full 4K glory. Our development process demonstrates the perfect integration of hair modeling, advanced sculpting, and clothing design techniques to provide a highly detailed gaming experience.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/hollywood/Hollywood%20Style%203.png",
      },
      section6: {
        heading:
          "The Client’s Unique Creative Vision in Achieving High-Quality 4K Characters",
        para: "We developed semi-realistic characters of popular Hollywood singers. Our designers recreated every wrinkle, mole, and freckle with the highest accuracy. Blender, ZBrush, and Marvelous Designer ensure their clothes are draped and moved realistically.",
        list1:
          "The game features 8 semi-realistic Hollywood singers with signature looks and unique hairstyles.",
        list2:
          "Each hairstyle has a unique flow, textures, and even imperfections.",
        list3:
          "Marvel Designer was used to provide fashion clothing for each character’s wardrobe.",
        grid: {
          cell11: "5",
          cell1: "Months of Creative Collaboration",
          cell21: "4K",
          cell2: "High Resolution Characters Rendering",
          cell31: "105",
          cell3: "Saves in Designing",
          cell41: "100%",
          cell4: "Delivery Within the Timeline",
        },
      },
      section7: {
        heading1: "Get Expert Consultancy",
        heading2: "for Your Next Gaming Project ",
      },
      section8: {
        heading: "",
        requirement:
          "We Gathered specific requirements and intricacies of the detailed features of the characters.",
        ideation:
          "Brainstorming sessions, considering unique features of each singer, and finalizing aesthetics.",
        designing:
          "Meticulous use of Blender and ZBrush for sculpting facial features and hairstyles.",
        development:
          "Use of Marvelous Designer to create authentic and accurate clothing for characters.",
        deployment:
          "Stringent testing to ensure characters meet realism and functionality goals in 4K glory.",
      },
      section9: {
        heading1: "Ensuring Facial Accuracy",
        heading2: "Building 4K Characters",
        heading3: "Implementing Iconic Looks",
        para1:
          "We had the major challenge of reaching the facial accuracy of the characters as it was beyond simple modeling. We had to replicate the unique variations in expression lines, skin texture, and other characteristics. The characters must be virtually accurate and emotively resonant.",
        para2:
          "Another hurdle was achieving high-quality 4K resolution to render details at a pixel-dense level. It increased the challenge regarding the technical capacity of the software and hardware used in the rendering process. The resource-intensive process had a major impact on rendering time, storage capacity, and overall system performance.",
        para3:
          "It was hard to ensure the perfect implementation of digital characters according to the iconic signature look of each singer. We had to go beyond the basic facial features to capture the unique elements, such as various hairstyles, special facial expressions, and recognizable characteristics. It was vital to create digital counterparts of real singers.",
      },
      testimonal:
        "It was necessary to collaborate with a creative team to bring our 3D characters to life. Hey Buddy’s team did a terrific job in achieving the highest level of detail in 4K resolution. The details in each character down to every wrinkle and freckle are truly remarkable. We appreciate the authenticity and commitment of the design team.",
      section11: {
        para: "Do you want to develop realistic characters for your games or other projects? Bring your creative ideas to us. We will use cutting-edge tools to bring concepts to the real world with accurate details. ",
      },
      link: "/Pages/casestudies/3ddevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "4",
      heading1: "AAA 3D Characters for a",
      heading2: "Gaming Project",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/onlyhand-1/3.png",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/onlyhand-1/AAA4.png",
      para1:
        "Our client, a gaming powerhouse, sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching their in-house team.",
      para2:
        "We took up the task of developing 3D characters using Unreal Engine.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our client, a gaming powerhouse, is known for multiple in-demand games. They sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching their in-house team. Additionally, the potential partners should follow best collaborative practices for smooth project execution. After multiple rounds of discussions, Hey Buddy emerged as the right choice. We took up the task of developing 3D characters using Unreal Engine. We developed a game with a unique stylized environment, consistent design, and smooth performance across all devices.",
      section5: {
        heading:
          "The Journey of Problem Identification, Coordination, and Innovative 3D Solutions",
        requirement:
          "Creating a cohesive stylized look in their game was challenging for the client. They wanted to achieve a smooth consistency across all their gaming elements, environments, and animations. Balancing performance and visual quality was also the top priority of the client.",
        execution:
          "Our metaverse and game development firm understands the importance of building strong relationships with our clients. We give huge emphasis on our communication skills, technical expertise, adaptability, creative vision, quality assurance, post-deployment support, and collaborative approach.",
        delivery:
          "We used cutting-edge 3D software for the rigging and modeling work. Using Unreal Engine 5 helped us ensure a vibrant, stylized painting aesthetic, and intense arena combat in the game. Characters also looked distinctive with unique visual aspects and oversized hands.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/onlyhand-1/4.png",
      },
      section6: {
        heading: "The Client’s Unique Vision is Realised with Our Creativity",
        para: "We developed a fully interactive 3D fighting game based on a unique concept of characters having unusually large hands. Our developers infused the maximum potential of Unreal Engine 5 to ensure a balance between performance and visual quality.",
        list1:
          "The game boasts 32 characters with distinctive features and textures.",
        list2:
          "Players can explore 48 dynamic environments and use them strategically during battles.",
        list3:
          "Inclusion of intuitive and responsive controls to enable players to use complex moves with accuracy.",
        grid: {
          cell11: "6",
          cell1: "Months Strategic Collaboration",
          cell21: "302",
          cell2: "creative props for player to choose from",
          cell31: "1100+",
          cell3: "productive hours of development",
          cell41: "100%",
          cell4: "Delivery Within the Timeline",
        },
      },
      section7: {
        heading1: "Get Expert Insights",
        heading2: "for Your Next Gaming Project.",
      },
      section8: {
        heading:
          "The client reached us to model the characters for its unique gaming project. We had to develop 32 diverse characters and 48 stylized environments. ",
        requirement:
          "Understanding the specific client requirements for this gaming project.",
        ideation:
          "Brainstorming sessions, multiple meetings, viability assessments, and collaboration establishment",
        designing:
          "Use of Blender, Maya, Zbrush, and Substance Painter for game designing.",
        development:
          "Use of Unreal Engine for high-quality visual development, Autodesk Maya, and Blender, for rigging and modeling process.",
        deployment:
          "Rigorous testing along with real players’ feedback, and planned launch.",
      },
      section9: {
        heading1: "Maintaining Proportion in Disproportion",
        heading2: "Delivering 8 Months of Work in 6",
        heading3: "Maintaining Quality without Compromise",
        para1:
          "Although the character had disproportionately larger hands than normal, this doesn’t mean we go a free hand. In practice, this required additional care to make their unusual appearance convey a sense and make them coherent with character.",
        para2:
          "Our client had already lost a lot of time in finding the right partner for this venture. This affected their timeline and as a result, we were short on time by 2 months. We had to complete our tasks in only six months which otherwise have required at least eight months. Our team worked round-the-clock to meet the collaborative need and deliver on time.",
        para3:
          "Maintaining a balance between visual quality and performance was critical. We didn’t want to sacrifice the artistic vision of our client while ensuring consistent performance across platforms. Thanks to our skilled team that went out of the way and used various optimizing techniques like polygon count adjustment to maintain a visual style and thematic consistency without affecting performance.",
      },
      testimonal:
        "We are truly thrilled to work with Hey Buddy for our upcoming gaming project. They did a terrific job in designing the characters and landscape of our 3D fighting game. We appreciate the professionalism and timely delivery of their design and development team. I hope we see great success with the game upon its launch",
      section11: {
        para: "Do you want to develop aesthetically pleasing 3D models for your games or other projects? Unleash your artistic vision with us. We infuse cutting-edge design with immersive storytelling. ",
      },
      link: "/Pages/casestudies/3ddevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
  ];

  const Selected_data = data.filter((casestudy) => casestudy.id === id);

  const {
    heading1,
    heading2,
    url1,
    url3,
    para1,
    para2,
    about,
    section5,
    section9,
    section8,
    section6,
    testimonal,
    section11,
    section7,
  } = Selected_data[0];

  return (
    <div className=" mx-auto">
      <Section1 heading1={heading1} heading2={heading2} url1={url1} />

      <div className=" mx-auto ">
        <Section2 about={about} />
      </div>

      <div className=" mx-auto ">
        <Section3
          heading1={heading1}
          heading2={heading2}
          para1={para1}
          para2={para2}
          url3={url3}
        />
      </div>

      {/* <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div> */}

      <div className=" mx-auto ">
        <Section5 {...section5} />
      </div>
      <div className=" mx-auto ">
        <Section6 {...section6} />
      </div>

      <div className=" mx-auto ">
        <Section7 {...section7} />
      </div>

      <div className=" mx-auto">
        <Section8 {...section8} />
      </div>
      <div className=" mx-auto ">
        <Section9 {...section9} />
      </div>

      <div className=" pb-12 mx-auto ">
        <Temp testimonal={testimonal} />
      </div>
      <div className=" mx-auto ">
        <Section11 {...section11} />
      </div>
    </div>
  );
};

export default page;
