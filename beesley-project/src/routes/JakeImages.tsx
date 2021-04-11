import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const JakeImagePage = () => {
    const history = useHistory();

    const backJakePage = (event: any) => {
        history.goBack();
    }

    return(
        <div>
            <div>
                <br/>
                <img src={require('../images/jakeimage3.JPG').default} height={653} width={490}/>
                <img src={require('../images/jakeimage8.JPG').default} height={653} width={490}/>
                <img src={require('../images/jakeimage7.JPG').default} height={653} width={490}/>
                <img src={require('../images/jakeimage11.JPG').default} height={490} width={653}/>
                <img src={require('../images/jakeimage12.JPG').default} height={490} width={653}/>
                <img src={require('../images/jakeimage4.JPG').default} height={490} width={653}/>
                <img src={require('../images/jakeimage5.JPG').default} height={490} width={653}/>
                <img src={require('../images/jakeimage6.JPG').default} height={490} width={653}/>
                <img src={require('../images/jakeimage2.JPG').default} height={490} width={490}/>
                <img src={require('../images/jakeimage10.JPG').default} height={490} width={870}/>
            </div>
            <br/>
            <Button variant="contained" color="secondary" id="buttonRight" onClick={backJakePage}> 
                Back
            </Button>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default JakeImagePage;