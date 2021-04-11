import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const JakePage = () => {
    const history = useHistory();

    const backJakeClick = (event: any) => {
        history.goBack();
    }

    const handleAboutJakeClick = (event: any) => {
        history.push('/aboutJake');
    }

    const handleJakeImageClick = (event: any) => {
        history.push('/jakeimages');
    }

    return(
        <div>
            <div id="jakeTitleCard">
                The Man, The Myth, The Legend...
            </div>
            <br/>
            <img src={require('../images/jakeimage1.jpg').default} height={629} width={558.6}/>
            <p>
                Welcome to Jake's page!
            </p>
            <i>
                It ain't much, but it's honest work
            </i>
            <br/>
            <Button variant="contained" color="primary" id="buttonLeft" onClick={handleAboutJakeClick}> 
                About me!
            </Button>
            <Button variant="contained" color="primary" id="buttonRight" onClick={handleJakeImageClick}> 
                Images!
            </Button>
            <br/>
            <Button variant="contained" color="secondary" onClick={backJakeClick}> 
                Back
            </Button>
        </div>
    )
}

export default JakePage;