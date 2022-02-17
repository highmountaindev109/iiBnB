import React from "react";
import { FaGithub, FaLinkedin, FaAngellist, FaSquarespace } from "react-icons/fa/index"
const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* <div className="about-me"> */}
                    {/* <h2>About Me</h2>
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
                </div> */}
                <div className="socials">
                    <p>
                        Socials
                    </p>
                    <ul>
                        <a href="https://www.linkedin.com/in/alwong191/" target="_blank">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/AlexDoes" target="_blank"><FaGithub/></a>
                        {/* <a href="#"><FaSquarespace/></a> */}
                        <a href="https://angel.co/u/awong191"target="_blank"><FaAngellist/></a>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;