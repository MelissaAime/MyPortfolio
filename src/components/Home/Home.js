import image from '../../image/image.jpeg'

export const Home = () => {

    return(
        <div className="color-fondo">
            <div className="container home">
                <img src={image} alt='imagen' className='home-img'/>
                <p className='fs-4 home-text'>Hi, I'm Melissa Daiana Aime...</p>
            </div>
        </div>
    )
}