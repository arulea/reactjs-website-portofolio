import '../styles/About.css'

import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandGolang } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiRust } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiCodeigniter } from "react-icons/si";
import { FaGit } from "react-icons/fa";

function About() {
  return (
    <section id='about'>
        <div className='wrapper'>
            <h3>About</h3>
            <p>Tentang aku dan dia dia dia dia</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, laudantium accusamus mollitia eos, explicabo consequatur ea dolorum rem aliquam nam a id doloribus! Eligendi quis alias aperiam libero molestiae laboriosam?</p>
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
                <ImHtmlFive /><SiCss3 /><SiPhp /><SiJavascript /><GrReactjs /><TbBrandGolang /><FaBootstrap />
            <div className='skills'>
            <SiRust /><RiTailwindCssFill /><FaLaravel /><SiCodeigniter /><FaGit />
            </div>
            </div>
        </div>
    </section>
  )
}

export default About