import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <Link className="title" to="/home">
            <button className="ball"></button>
            {/*<h1 className='title'>Pokemon App</h1>*/}
        </Link>
    )
}