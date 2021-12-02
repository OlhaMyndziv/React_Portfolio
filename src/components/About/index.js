import React from 'react';
import OlyasPhoto from '../../assets/images/1.jpg'

const About = () => {
    return (
        <section className='my-5 about' name='container' style={{'textAlign': 'center'}}>
            <div className=''>
                <img className='bio-photo' alt='Olha' src={OlyasPhoto}/>
            </div> 
            <h1 id='about'>About Me</h1>
            <p className='text-background' id='aboutText'>
            <h5>Hi, my name is Olha Myndziv. I am a full-stack web developer. I also have a background in mathematics. Currently completing the coding boot camp at Northwestern University.
            </h5>
            </p>
        </section>
    )
};

export default About;