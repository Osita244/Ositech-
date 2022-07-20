import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } 
from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function  Experience ()  {
    return (
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
         className="vertical-timeline-element--education"
          date="2008 - 2012"
          iconStyle={{background:"#3e497a",color:"#fff" }}

              icon={<SchoolIcon />}>

           <h3 className="vertical-timeline-element-title">
            My Certificate High School,  Nigeria Africa
          </h3>
          <p> High National Diploma</p>
              
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
          date="2012 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />} >
          <h3 className="vertical-timeline-element-title">
            My Electrical University, Nigeria, Enugu State.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Bachelor's Degree
            </h4>
     <p> Electrical Engineering </p>

     </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />} >

          <h3 className="vertical-timeline-element-title">
            Front End Engineer 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ositech, E.
          </h4>
          <p>Developed the frontend infrastructure for 3 projects.</p>

          </VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="2018 - present"
  iconStyle={{ background: "#e9d35b", color: "#fff" }}
  icon={<WorkIcon />} > 

  <h3 className="vertical-timeline-element-title">
    Front-End Engineer 
  </h3>
  <h4 className="vertical-timeline-element-subtitle">
  Ositech, E.
  </h4>
  <p>
    Helped the team launch 2 major features by working in the front
    end section.</p>
    </VerticalTimelineElement>
      </VerticalTimeline>
   
  </div>
   );  
}

export default Experience;
