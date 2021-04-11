import React from 'react';

import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const LukePage = () => {
    const history = useHistory();

    const backLukeClick = (event: any) => {
        history.goBack();
    }

    return(
        <div>
            <p>
                Welcome to Luke's page!
            </p>
            <Button variant="contained" color="secondary" onClick={backLukeClick}> 
                Back
            </Button>
        </div>
    )
}

export default LukePage;