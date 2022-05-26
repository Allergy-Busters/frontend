import React from 'react';
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const RecordLocationQ = () => {

return(
    <div>
        <h1>Would you like to map your location?</h1>
            <Button size="lg" variant="dark">
                <Link to={'/map'} style={{textDecoration: 'none', color: 'white'}}>Yes, take me to the map.</Link>
            </Button>
            <Button size="lg" variant="dark">
                <Link to={'/entries'} style={{textDecoration: 'none', color: 'white'}}>No, take me back to my entries.</Link>
            </Button>
    </div>
    )
}   
export default RecordLocationQ