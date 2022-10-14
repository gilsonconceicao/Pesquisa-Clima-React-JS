import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
// css
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <header>
            <h2>App Clima</h2>
            <ul className={styles.linksMenu}>
                <li><a href="https://github.com/gilsonconceicao" target='_blank'><AiFillGithub/></a></li>
                <li><a href="https://www.linkedin.com/in/gilson-conceicao/" target='_blank'><AiFillLinkedin/></a></li>
            </ul>
        </header>
    )
}
