import React from 'react';

const Resume = () => {

    return (
        <section className='my-5 text-background'>

            <h1 data-testid='h1tag'>Skills</h1>
            <div>
                
                <ul>
                    <li>HTML 5</li>
                    <li>CSS</li>
                     <li>Bootstrap</li> 
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Web API's</li>
                    <li>Handlebars</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>O.O.P.</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>M.V.C.</li>
                    <li>MongoDB & Mongoose</li>
                    <li>P.W.A.</li>
                    <li>React</li>
                </ul>
            </div>
            <p>Download my <a href={require(`../../assets/OlhaMyndziv.pdf`).default}>Resume</a></p>
        </section>
    )
}

export default Resume;