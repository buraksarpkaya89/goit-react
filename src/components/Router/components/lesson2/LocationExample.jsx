import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const LocationExample = () => {

    const location = useLocation();
    console.log(location);
  return (
    <div>
        <div>
            <h2>Location Example</h2>
            <p>pathname: {location.pathname || ""}</p>
            <p>search: {location.search || ""}</p>
            <p>hash: {location.hash || ""}</p>
            <p>state: {JSON.stringify(location.state) || ""}</p>
            <p>key: {location.key || ""}</p>
        </div>
        <div style={{display: "flex", gap: "10px", marginTop: "20px"}}>
            <Link to="/location-test?filter=active">
                Query
            </Link>
            <Link to="/location-test?filter=active#burak">
                Hash
            </Link>
        </div>
        
    </div>
  )
}

export default LocationExample