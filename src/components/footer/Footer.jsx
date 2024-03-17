import React from 'react'
import { FaGithub , FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, turpis id pretium facilisis, ante justo tincidunt mi, mollis condimentum urna turpis id mi. Vestibulum non orci porta, pulvinar justo et, vehicula sapien.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a href="https://github.com/ViniNathan" target='__blank'><FaInstagram /></a>
                    </span>
                    <span className="icon">
                        <a href="https://github.com/ViniNathan" target='__blank'><FaGithub /></a>
                    </span>
                    <span className="icon">
                    <a href="https://www.linkedin.com/in/vininathan/" target='__blank'><FaLinkedin /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
