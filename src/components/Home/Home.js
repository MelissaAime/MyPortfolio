import image from '../../image/image.jpeg'

export const Home = () => {

    return(
        <div>
            <div className="container home">
                <img src={image} alt='imagen' className='home-img'/>
                <p className='fs-4 home-text'>Hi, I'm Melissa Daiana Aime</p>
                <p className='fs-4 home-content'>Full Stack Developer</p>
            </div>
        </div>
    )
}