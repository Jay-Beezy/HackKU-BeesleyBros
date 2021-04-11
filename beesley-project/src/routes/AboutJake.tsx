import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const AboutJakePage = () => {
    const history = useHistory();

    const backJakePage = (event: any) => {
        history.goBack();
    }

    const handleMovieJakeClick = (event: any) => {
        history.push('/jakemovies');
    }

    return(
        <div>
            <h1 id="aboutHeader">
                About Jake (That's me!):
            </h1>
            <div>
                <li>
                    I am a junior studying computer science at the University of Kansas
                </li>
                <li>
                    I recieved an associates degree in engineering from the Northern Virginia Community College in 2019
                </li>
                <li>
                    I plan on graduating from KU in the Fall of 2022
                </li>
                <li>
                    I have a passion for learning and improving my programming skills
                </li>
            </div>
            <div>
                <h2 id="factsHeader">
                    Fun Facts:
                </h2>
                <li>
                    Lived in Las Vegas, Northern Virginia ( close to DC ), and Kansas!
                </li>
                <li>
                    Enjoy backpacking and hiking during the summer (Winter ... not so much!)
                </li>
                <li>
                    Huge fan of the Washington Nationals and the Kansas City Chiefs!
                </li>
                <li>
                    Enjoy video games! (World of Warcraft, Binding of Isaac, Minecraft, the occasional "hide-and-go-seek")
                </li>
                <li>
                    Worked at Dairy Queen and Walgreens throughout high-school and community college!
                </li>
            </div>
            <div>
                <h3 id="skillsHeader">
                    Skills:
                </h3>
                <li>
                    Proficient in C++, JavaScript/HTML/CSS, and VHDL
                </li>
                <li>
                    Skillfull in Microsoft Office applications (Word, Powerpoint, Excel)
                </li>
                <li>
                    Gaining experience in React, Node.js, and Typescript (Shoutout to Colin !)
                </li>
                <li>
                    Custom built a personal computer (Insert a link to PCPartPicker once I figure out how...?)
                </li>
            </div>
            <br />
            <Button variant="contained" color="primary" id="buttonLeft" onClick={handleMovieJakeClick}> 
                Jake's favorite movies!
            </Button>
            <Button variant="contained" color="secondary" id="buttonRight" onClick={backJakePage}> 
                Back
            </Button>
        </div>
    )
}

export default AboutJakePage;