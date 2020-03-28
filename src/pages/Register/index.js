import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css'

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault()
        const data = { name, email, whatsapp, city, uf };

        try {
            const response = await api.post('/ongs', data);
            alert(`Seu ID de cadastro é: ${response.data.id}`)
            history.push('/')
        } catch (err) {
            alert(err)
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='logo' />
                    <h1>Cadastre-se</h1>
                    <p>Faça seu cadastro e participe da plataforma que faz do mundo um lugar melhor</p>
                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#e02041' />
                            Já tenho cadastro
                        </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder='Nome da Ong'
                        value={name}
                        onChange={txt => setName(txt.target.value)}
                    />
                    <input
                        type='email'
                        placeholder='E-mail'
                        value={email}
                        onChange={txt => setEmail(txt.target.value)}
                    />
                    <input
                        placeholder='Whatsapp'
                        value={whatsapp}
                        onChange={txt => setWhatsapp(txt.target.value)}
                    />
                    <div className="input-group">
                        <input
                            placeholder='Cidade'
                            value={city}
                            onChange={txt => setCity(txt.target.value)}
                        />
                        <input
                            placeholder='UF'
                            style={{ width: 80 }}
                            value={uf}
                            onChange={txt => setUf(txt.target.value)}
                        />
                    </div>
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
