import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaSquarespace } from "react-icons/fa/index"
const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="about-me">
                    <h2>About Me</h2>
                    <ul>
                        <li>Alex Wong</li>
                        <li>New York</li>
                        <li>Owner of 4 Blue Eyes</li>
                        <li>TFT Grand Master</li>
                    </ul>
                </div>

                <div className="filler1">
                    <h2>Text Placeholder</h2>
                    <ul>
                        <li>Pallet Town</li>
                        <li>Viridian City</li>
                        <li>Pewter City</li>
                        <li>Cerulean City</li>
                    </ul>
                </div>

                <div className="filler2">
                        <h2>Text Placeholder</h2>
                        <ul>
                            <li>Vermillion City</li>
                            <li>Lavendar Town</li>
                            <li>Celadon City</li>
                            <li>Fuschia City</li>
                        </ul>
                </div>
                <div className="socials">
                    <h2>Socials</h2>
                    <ul>
                        <li><FaLinkedin/></li>
                        <li><FaGithub/></li>
                        <li><FaSquarespace/></li>
                        <li><FaInstagram/></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;