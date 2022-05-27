

export const Resume = () => {
    return(
        <div className="color-fondo">
            <div className="container about">
                <h3 className="text-center about-title">Resume</h3>
                <div className="about-work">
                    <h1 className="about-work-title text-end">Work experience</h1>
                    <div className="borde"></div>
                    <ul>
                        <li>Proyect G-Data</li>
                        <a href="/">visit the web site</a>
                        <li>Proyect Santa Bárbara Bikinis</li>
                        <a href="https://santabarbarabikini.netlify.app/index.html">visit the web site</a>

                    </ul>
                </div>
                <div className="about-education">
                    <h1 className="about-education-title text-end">Education</h1>
                    <div className="borde"></div>
                    <ul>
                        <li>CODERHOUSE</li>
                        <ul>
                            <li>Python (2022)</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}