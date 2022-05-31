

export const Resume = () => {
    return(
        <div className="color-fondo">
            <div className="container resume">
                <h3 className="text-center resume-title">Resume</h3>
                <div className="resume-work">
                    <h1 className="resume-work-title text-end">Work experience</h1>
                    <div className="borde"></div>
                    <ul>
                        <li>Proyect G-Data</li>
                        <a href="/" target="_blank">visit the web site</a>
                        <li>Proyect Santa Bárbara Bikinis</li>
                        <a href="https://santabarbarabikini.netlify.app/index.html" target="_blank">visit the web site</a>
                        <li>Proyects from CODERHOUSE courses</li>
                        <a href="https://github.com/MelissaAime" target="_blank">visit github</a>

                        <hr/>
                        <p>Another work experience:</p>
                        <li>Math teacher in primary and secondary school</li>
                        <p className='text-muted'>From 2018 to present </p>
                    </ul>
                </div>
                <div className="resume-education">
                    <h1 className="resume-education-title text-end">Education</h1>
                    <div className="borde"></div>
                    <ul>
                        <li>CODERHOUSE</li>
                        <ul>
                            <li>Java (coming next)</li>
                            <li>Python (in progress)</li>
                            <li>React JS (2022)</li>
                            <li>JavaScript (2021)</li>
                            <li>Web development (2021)</li>
                        </ul>

                        <li>UDEMY</li>
                        <ul>
                            <li>Create four proyects with React JS (2022)</li>
                            <li>React JS Hooks (2022)</li>
                        </ul>

                        <hr/>
                        <li>Instituto Superior de Formación Docente N°23</li>
                        <ul>
                            <li>Math teacher</li>
                        </ul>

                    </ul>
                </div>
            </div>
        </div>
    )
}