import { Navbar } from 'react-bootstrap';
import { BsHouseDoor, BsPerson, BsFillMenuButtonWideFill, BsReverseLayoutTextSidebarReverse, BsBarChart, BsChatText } from 'react-icons/bs'

export const NavBar = () => {
    return(
        <>
        <Navbar className="navbar">
            <a href='/'>
                <span><BsHouseDoor/></span>
                <p>Home</p>
            </a>
            <a href='/about'>
                <span><BsPerson/></span>
                <p>About</p>
            </a>
            <a href='...'>
                <span><BsReverseLayoutTextSidebarReverse/></span>
                <p>Resume</p>
            </a>
            <a href='...'>
                <span><BsFillMenuButtonWideFill/></span>
                <p>Proyect</p>
            </a>
            <a href='...'>
                <span><BsBarChart/></span>
                <p>Skill</p>
            </a>
            <a href='...'>
                <span><BsChatText/></span>
                <p>Contac</p>
            </a>
        </Navbar>
        </>
    )
}