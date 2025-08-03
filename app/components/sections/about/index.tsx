import { useState } from "react";
import { Element } from "react-scroll";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import timelineEvents from "./aboutTimeline";
import pillars from "./aboutPillars";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState(2);
  
  const toggleShowMore = () => {
    setShowMore((prevState) => {
      const newShowMore = !prevState;
      if (newShowMore) { setVisibleEvents((prevEvents) => prevEvents + 5); } 
      else { setVisibleEvents(2); }
      return newShowMore;
    });
  };

  return (
    <section>
      <Element name="about">
        <div className="max-w-6xl mx-auto">
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

            <div className="text-center my-6">
              <button
              onClick={toggleShowMore}
              className="text-blue font-bold">
                {showMore ? "ENCURTAR HISTÓRICO" : "EXPANDIR HISTÓRICO"}
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mx-5 items-center grid lg:grid-cols-3 gap-10 mt-10">
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