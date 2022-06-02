import { BsWhatsapp, BsLinkedin, BsEnvelope, BsGithub } from 'react-icons/bs'

export const Contact = () => {
    return(
        <>
        <div className="contact">
            <div>
                <h3>Contact me</h3>
                <div className='barra'></div> 
            </div>

        </div>
        <div className="contact-two">
            <div>
                <h3>Contact me</h3>
                <div className='barra'></div> 
            </div>

            <section>
                <h5><BsEnvelope/> Email</h5>
                <p>aimemelissa1@gmail.com</p>
            </section>
            
            <section>
                <h5><BsWhatsapp/> WhatsApp</h5>
                <p>+549 11 41737221</p>
            </section>

            <section>  
                <h5><BsLinkedin/> LinkedIn</h5>
                <p>visit me profile</p>
            </section>

            <section>
                <h5><BsGithub/> Github</h5>
                <p>visit me repository</p>
            </section>

        </div>
        </>

    )
}