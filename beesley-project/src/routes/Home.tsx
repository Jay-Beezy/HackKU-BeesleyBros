import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();

    const handleJakeClick = (event: any) => {
        history.push('/jake');
    }

    const handleLukeClick = (event: any) => {
        history.push('/luke');
    }


    return(
        <div>
            <h1>
                Welcome to the Beesley Brother's Home Page!
            </h1>
            <p>
                <i>
                    Such style!
                </i>
            </p>
            <Button variant="contained" color="secondary" id="buttonLeft" onClick={handleJakeClick}> 
                Visit Jake!
            </Button>
            <Button variant="contained" color="primary" id="buttonRight" onClick={handleLukeClick}> 
                Visit Luke!
            </Button>
        </div>
    )
}

export default Home;