/*jshint esversion: 6 */
import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return (
        <div>
            <footer> 
                <p>Karan Singh Kaira ⓒ {year}</p>
            </footer>
        </div>
    );
}

export default Footer;