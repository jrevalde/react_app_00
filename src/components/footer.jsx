import React from "react";

function Footer(){

    let current_year = new Date().getFullYear();

    console.log(current_year);



    return(
        <footer>
            <p>@copyright {current_year}</p>
        </footer>
    );
}

export default Footer;