import React from 'react'
import { Link } from "react-router-dom";

class Landing extends React.Component {
    render() {
        return(
            <>
                <h1>Welcome to tacoBout!</h1>
                <Link to="/app" className="btn btn-primary">Build Recipe Page</Link>
            </>
        )
    }
}

export default Landing;
