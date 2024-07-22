import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiNextjsFill } from "react-icons/ri";
import { RiVuejsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiLaravel } from "react-icons/si";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
    <Navbar />
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - present"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<RiNextjsFill />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2022 - 2023"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<RiVuejsFill />}
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Arules Corporation</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2021 - 2022"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<RiReactjsLine />}
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Arules Corporation</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
            <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2020 - 2021"
    iconStyle={{ background: '#222831', color: '#fff' }}
    icon={<SiLaravel />}
  >
    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Arules Corporation</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer />
        <ScrollToTop />
    </>
  )
}

export default Experience