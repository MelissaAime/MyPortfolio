import image from '../../image/image.jpeg'

export const About = () => {
    return(
        <div>
            <div className="container about">
                <img src={image} alt='imagen' className='about-img'/>
                <div className='about-content'>
                    <p className='fs-4 about-content-title'>Melissa Daiana Aime</p> 
                    <p className='fs-6'>Full Stack Developer</p>
                </div>
                <p className='fs-5 about-text'>web developer jkawkefh dkshjskdahv jhcz xbsdgh kedghcj xsjhkdgcbhs dgcbhzxsjnh kdfgcvbxznash dgjcbxzas jkcbxznas jkhwdeycfh bxjnsadf gysxcbzna sjedhgcb svksbvsa djhlhkjah lgkfhsjl</p>
            </div>
        </div>
    )
}