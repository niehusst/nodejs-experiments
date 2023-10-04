import React from 'react';


/**
 * Renders a Footer component displaying a copyright message with the current year.
 */
function Footer() {
    return (
        <footer>
            <p>Copyright to some fucker in the year of our lord {(new Date()).getFullYear()}</p>
        </footer>
    );
}

export default Footer;
