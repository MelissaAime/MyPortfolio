import { ProgressBar } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaGithub, FaJs, FaReact, FaPython, FaJava } from 'react-icons/fa';


export const Skill = () => {
    
    return (
        <div className="skill">
            <h3 className="text-center skill-title">Skills</h3>

            
            <div className="skill-section1">        
                <p><FaHtml5/> HTML </p>
                
                <ProgressBar now={90} className='skill-progress mx-3'/>
                <p><FaCss3Alt/> CSS </p>
                <ProgressBar now={85} className='skill-progress mx-3'/>
                <p><FaSass/> SCSS </p>
                <ProgressBar now={85} className='skill-progress mx-3'/>
                <p><FaBootstrap/>Bootstrap </p>
                <ProgressBar now={80} className='skill-progress mx-3'/>
                <p><FaGithub/>GitHub </p>
                <ProgressBar now={75} className='skill-progress mx-3'/>
            </div>

            <div className=" skill-section2">
                <p><FaJs/>JavaScript </p>
                <ProgressBar now={50} className='skill-progress mx-3'/>
                <p><FaReact/>React JS </p>
                <ProgressBar now={70} className='skill-progress mx-3'/>
                <p><FaPython/>Python </p>
                <ProgressBar now={10} className='skill-progress mx-3'/>
                <p><FaJava/>Java </p>
                <ProgressBar now={2} className='skill-progress mx-3'/>
            </div>
            
            
        </div>
    )
}