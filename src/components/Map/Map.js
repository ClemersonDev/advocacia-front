import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

const Map = (props) => {
    return(
        <GoogleMap 
            defaultZoom={15}
            defaultCenter={{lat: -10.836337, lng: -38.536554}}
        />
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)