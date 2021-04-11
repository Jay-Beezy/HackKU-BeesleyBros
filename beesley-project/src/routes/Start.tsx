import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router-dom';

const Start = () => {
    const history = useHistory();

    const handleClick = (event: any) => {
        history.push('/home');
    }

    return(
        <div>
            <p>
              Welcome to Luke and Jake's Website!
           </p>
            <Button variant="contained" color="secondary" onClick={handleClick}> 
                Continue to website!
            </Button>
        </div>
    )
}

export default Start;