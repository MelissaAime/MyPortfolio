import { Navbar , Button } from 'react-bootstrap';
import { BsHouseDoor, BsPerson, BsFillMenuButtonWideFill, BsReverseLayoutTextSidebarReverse, BsBarChart, BsChatText } from 'react-icons/bs'

export const NavBar = () => {
    return(
        <>
        <Navbar vertical className="navbar">
            <a>
                <span><BsHouseDoor/></span>
                <p>Home</p>
            </a>
            <a>
                <span><BsPerson/></span>
                <p>About</p>
            </a>
            <a>
                <span><BsReverseLayoutTextSidebarReverse/></span>
                <p>Resume</p>
            </a>
            <a>
                <span><BsFillMenuButtonWideFill/></span>
                <p>Proyect</p>
            </a>
            <a>
                <span><BsBarChart/></span>
                <p>Skill</p>
            </a>
            <a>
                <span><BsChatText/></span>
                <p>Contac</p>
            </a>
        </Navbar>
        </>
    )
}