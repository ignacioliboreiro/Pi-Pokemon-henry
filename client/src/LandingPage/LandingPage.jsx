import React from "react";
import { Link } from "react-router-dom";


export default function LandingPage() {
    return(
        <div className="background">
            <div className="container">
                <h4 className="Text">Developed Igancio Liboreiro</h4>
                <Link to = "/home">
                    <button className="button"></button>
                </Link>
                <div className="right">
                    <a href="https://github.com/ignacioliboreiro" target="_blank">
                            <button className="Git" />
                    </a>
                    <a href="https://www.linkedin.com/in/ignacio-liboreiro-28b5631b0/" target="_blank">
                            <button className="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}