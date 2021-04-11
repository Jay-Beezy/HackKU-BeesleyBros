import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const JakeMoviePage = () => {
    const history = useHistory();

    const backJakePage = (event: any) => {
        history.goBack();
    }

    const backHomePage = (event: any) => {
        history.goBack();
        history.goBack();
        history.goBack();
    }

    return(
        <div>
            <div>
                <h1 id="aboutHeader">
                    Jake's Favorite Movies (I really LOVE movies!):
                </h1>
                <p>
                    In no particular order..
                </p>
                <div>
                    <li>
                        Hot Rod (Dir. Akiva Schaffer, Stars: Andy Samberg, Isla Fisher, Bill Hader)
                    </li>
                    <li>
                        12 Monkeys (Dir. Terry Gilliam, Stars: Bruce Willis, Brad Pitt, Madeleine Stowe)
                    </li>
                    <li>
                        Napoleon Dynamite (Dir. Jared Hess, Stars: Jon Heder, Efren Ramirez, Tina Majorino)
                    </li>
                    <li>
                        Fight Club (Dir. David Fincher, Stars: Edward Norton, Brad Pitt, Helena Bonham Carter)
                    </li>
                    <li>
                        The Godfather (Dir. Francis Ford Coppola, Stars: Marlon Brando, Al Pacino, Diane Keaton)
                    </li>
                    <li>
                        Pulp Fiction (Dir. Quentin Tarantino, Stars: John Travolta, Samuel L. Jackson, Uma Thurman)
                    </li>
                    <li>
                        The Big Lebowski (Dir. The Coen Brothers, Stars: Jeff Bridges, John Goodman, Julianne Moore)
                    </li>
                    <li>
                        Butch Cassidy and the Sundance Kid (Dir. George Roy Hill, Stars: Paul Newman, Robert Redford)
                    </li>
                    <li>
                        Interstellar (Dir. Christopher Nolan, Stars: Matthew McConaughey, Anne Hathaway, Jessica Chastain)
                    </li>
                    <li>
                        The Place Beyond the Pines (Dir. Derek Cianfrance, Stars: Ryan Gosling, Bradley Cooper, Eva Mendes)
                    </li>
                    <li>
                        The Life Aquatic with Steve Zissou (Dir. Wes Anderson, Stars: Bill Murray, Owen Wilson, Cate Blanchett)
                    </li>
                </div>
            </div>
            <br/>
            <Button variant="contained" color="secondary" id="buttonRight" onClick={backJakePage}> 
                Back
            </Button>
            <Button variant="contained" color="secondary" id="buttonRight" onClick={backHomePage}> 
                Home
            </Button>
        </div>
    )
}

export default JakeMoviePage;