import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Video from "../../Components/Video";
import landingpagevideo from "/Main3.mp4";
import TextAnimation from "../../Components/AnimateText/AnimatedText";
import { motion } from "framer-motion";
import {
  dataToFeed,
  dataToFeedStory1,
  dataToFeedStory2,
} from "../../Data/LandingpageData";
import { InfiniteMovingCards } from "../../Components/CardComponent/NewCardComponent";
import { ContainerScroll } from "../../Components/ScrollAnimation/Chairmanmessage";
import { ProductPortfolio } from "../Productprotfolio/ProductProtfolio";
import BoardOfDirector from "../Boardsofdirector/BoardOfDirector";
import { ScaleIn } from '../../Components/AnimationVarient';
import { InfiniteMovingCardsNew } from '../../Components/CardComponent/InfiniteMovingCardNew';
import BodSlider from '../../Components/Boardofdirector/BoardOfDirector';
import TextAnimation01 from '../../Components/AnimateText/AnimatedText01';
const LandingPage = () => {
  const words = ['Purpose', 'People', 'Partnerships', 'Performance', 'Planet'];
    const [visibleWordIndex, setVisibleWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }, 5200);

        return () => clearInterval(intervalId);
    }, []);

  const imageVarientUp = {
    hidden: {
      opacity: 0,
      y: "-100px",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // const bodArray = [
  //   ["Mr. Suresh Narayanan", "Chairman and Managing Director", "./Bod/MD1.png"],
  //   [
  //     "Mr. R. V. Kanoria*",
  //     "Independent Non-Executive Director",
  //     "./Bod/MD2.png",
  //   ],
  //   ["Mr. P. R. Ramesh", "Independent Non-Executive Director", "./Bod/MD3.png"],
  //   [
  //     "Ms. Anjali Bansal",
  //     "Independent Non-Executive Director",
  //     "./Bod/MD4.png",
  //   ],
  //   [
  //     "Ms. Alpana Parida",
  //     "Independent Non-Executive Director",
  //     "./Bod/MD5.png",
  //   ],
  //   [
  //     "Ms. Svetlana Boldina",
  //     "Executive Director – F&C and CFO",
  //     "./Bod/MD6.png",
  //   ],
  //   [
  //     "Mr. Satish Srinivasana",
  //     "Executive Director - Technical",
  //     "./Bod/MD7.png",
  //   ],
  //   [
  //     "Ms. Suneeta Reddy*",
  //     "Independent Non-Executive Director",
  //     "./Bod/MD8.png",
  //   ],
  //   [
  //     "Mr. Sidharth Kumar Birla**",
  //     "Independent Non-Executive Director",
  //     "./Bod/sidhartji.png",
  //   ],
  //   [
  //     "Mr. Pramod Kumar Rai",
  //     "Company Secretary and Compliance Officer",
  //     "./Bod/MD9.png",
  //   ],
  // ];

  return (
    <div className="landing-page-container scroll-smoot pb-6">
      <div className="hero-section-main">
        <Video src={landingpagevideo} />

        <motion.img
          variants={imageVarientUp}
          initial="hidden"
          animate="visible"
          className="absolute-image"
          src="./nestlegirl.webp"
          alt=""
        />
        <div className="laanding-page-text-container ">
          <TextAnimation text={"Our Path to "} />
          <br />
          <span className="words-wrapper">
                                        {words.map((word, index) => (
                                            <b key={index} className={index === visibleWordIndex ? 'is-visible' : 'is-hidden'}>
                                                {word}
                                            </b>
                                        ))}
                                    </span>
        </div>
      </div>

      <motion.div   variants={ScaleIn}
          initial="hidden"
          whileInView="visible"
           className="main-section-02 flex flex-col  align-middle justify-start gap-8 mb-4 w-full overflow-hidden">
        <div className="equal-wrapper-container">
          <div className="black-bold-text-conatiner p-5 px-8 text-black font-bold md:w-1/2 sm:w-full">
            <h3 className="bold-heading-text text-black font-bold ml-[-22px] pl-0">
            <TextAnimation01 text={"  Our Purpose"} />   
            </h3>
            Unlocking the power of food to enhance quality of life for everyone,
            today and for generations to come.
          </div>
          <div className="bold-white-text-container p-10 ml-10  text-black ">
            Progress is a continuous journey of palpable possibilities that
            entails taking steady steps, being bold and ethical, through courage
            and wisdom, through compassion and confidence through our quest for
            innovation, by making the right investments and responsible choices.
            The journey is not without its challenges, but needs to be navigated
            with resilience and integrity.
            <br />
            Every action, every decision is fueled by the desire to create
            positive change and leave a trail of positive impact, not just for
            our Company, but for employees, communities, shareholders,
            stakeholders and the environment, as the road before us unfolds and
            we walk the path of progress.
          </div>
        </div>

        <InfiniteMovingCards dataToFeed={dataToFeed} issec2={false} />
      </motion.div>
      <h3 className="bold-heading-text text-black font-bold text-center my-8">
       <TextAnimation01 text={'Board of Directors'} />
      </h3>
      {/* <div className="bod-main-container flex flex-wrap gap-4 w-[86%] m-auto justify-center mb-6 ">
        {bodArray.map((bod) => {
          return <BoardOfDirector data={bod} />;
        })}
      </div> */}
      <BodSlider/>
      <div className="main-section-03  w-[86%] m-auto">
        <ContainerScroll />
      </div>
      <div className="section-main-0002 flex flex-col justify-center align-middle">
        <ProductPortfolio />
        <button className=" text-white normal-btn mb-8"> <Link to={'/Product-portfolio'}> Explore more</Link></button>
      </div>
      <div className="main-section-04 bg-white">
        <h3 className="bold-heading-text text-black font-bold text-center">
        <TextAnimation01 text={"Nestlé's India story"} />  
        </h3>
        <div className="equal-wrapper-container">
          <InfiniteMovingCardsNew
            dataToFeed={dataToFeedStory1}
            issec2={true}
            imgWidth={"100px"}
          />
          <InfiniteMovingCardsNew dataToFeed={dataToFeedStory2} issec2={true} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
