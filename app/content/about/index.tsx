import { Element, Link } from "react-scroll";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineEvents from "../../data/aboutTimeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import pillars from "../../data/aboutPillars";

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState(2);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const safari = /^((?!chrome|android).)*safari/i.test(ua);
    setIsSafari(safari);
  }, []);


  const toggleShowMore = () => {
    setShowMore((prevState) => {
      const newShowMore = !prevState;
      if (newShowMore) { setVisibleEvents((prevEvents) => prevEvents + 3); } 
      else { setVisibleEvents(2); }
      return newShowMore;
    });
  };

  return (
    <section>
      <div className="relative h-[700px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <p className="text-3xl font-bold mb-2">SOMOS<br/>ESPECIALIZADOS EM</p>
          <p className="text-2xl font-medium">manutenção de computadores,<br/> notebooks e celulares.</p>

          <Link 
          smooth={true}
          duration={500}
          to="contact"
          className="mt-8 px-6 py-3 bg-blue rounded-xl cursor-pointer font-medium hover:text-blue-white">
            FAÇA UM ORÇAMENTO
          </Link>
        </div>

        {isSafari ? 
        (<img
        src="images/bg-smartech.mp4"
        alt="Video poster"
        className="w-[100%] h-full object-cover"/>) 
        : (<video
          src="images/bg-smartech.mp4"
          className="w-[100%] h-full object-cover"
          muted
          autoPlay
          playsInline
          loop/>)}
      </div>

      <Element name="about">
        <div className="max-w-6xl mx-auto py-10">
          <div className="mx-5">
            <h2 className="font-bold text-2xl text-blue mb-5">SOBRE NÓS</h2>
            <VerticalTimeline className="custom-timeline">
              {timelineEvents.slice(0, visibleEvents).map((event, index) => (
                <VerticalTimelineElement
                key={index}
                date={event.date}
                icon={<FontAwesomeIcon icon={event.icon} />}
                iconStyle={{ background: "#052B47", color: "#D6EDFF"}}
                contentStyle={{ background: "#f9f9f9", color: "#333", boxShadow: "0 7px 7px rgba(5,43,71,1.0)" }}
                contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}>
                  <h2 className="font-bold text-blue">{event.title}</h2>
                  <p className="text-black-grey">{event.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            <div className="text-center mt-5">
              <button
              onClick={toggleShowMore}
              className="text-blue font-bold">
                {showMore ? "ENCURTAR HISTÓRICO" : "EXPANDIR HISTÓRICO"}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mx-5 items-center grid lg:grid-cols-3 gap-10">
            {pillars.map((item, index) => (
              <div key={index} className="text-center p-8 bg-blue/20 shadow-2xl shadow-blue-cyan/50 rounded-2xl">
                <FontAwesomeIcon icon={item.icon} className="text-blue text-3xl"/>
                <h2 className="font-bold text-blue text-lg mt-2 mb-4">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
    
  )
}