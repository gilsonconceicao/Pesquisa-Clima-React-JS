import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { UseHookStoreAuth } from '../../contexts/authStoreContext';
import { Temperature } from '../temperature/Temperature';

import styles from './Home.module.css';

export const Home = () => {
    const [name, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // messages error
    const [nameEmpty, setEmptyname] = useState('');
    const [lastNameEmpty, setEmptyLastName] = useState('');

    // hook context
    const { getNameAndLastNameUser, isLogged } = UseHookStoreAuth();

    const handleEnterData = (e) => {
        e.preventDefault();

        if (name == '') {
            setEmptyname('Esse campo é obrigatório.');
            return
        }
        if (lastName == '') {
            setEmptyLastName('Esse campo é obrigatório');
            setEmptyname('');
            return
        } else {
            getNameAndLastNameUser(name, lastName);
        }
    }

    return (
        <div>
            {isLogged == true ?
                <Temperature />
                :
                <section>
                    <h2 className={styles.title_home}>Olá{name && ', ' + name + ' ' + lastName + '!'}</h2>
                    <p className={styles.paragraph}>Para poder avançar, preencha abaixo o seu nome e sobrenome para tornar sua experiência melhor.</p>
                    <p className={styles.bar}></p>
                    <form onSubmit={handleEnterData} className={styles.form_info_user}>
                        <label>
                            Nome
                            <input
                                type="text"
                                value={name}
                                className={styles.enter_info}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder='Insira o seu nome'
                            />
                        </label>
                        {nameEmpty && (<span className={styles.messageSmall}>{nameEmpty}</span>)}
                        <label style={{ marginTop: '10px' }}>
                            Sobrenome
                            <input
                                type="text"
                                value={lastName}
                                className={styles.enter_info}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder='Insira o seu sobrenome'
                            />
                        </label>
                        {lastNameEmpty && (<span className={styles.messageSmall}>{lastNameEmpty}</span>)}
                        <p className={styles.message}>Suas informações estará em privacidade.</p>
                        <button className={styles.button_submit}>Entrar</button>
                    </form>
                </section>
            }
        </div>
    )
}