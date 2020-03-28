import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import './styles.css'
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(event) {
        event.preventDefault()

        const data = { title, description, value }

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')

        } catch (err) {
            alert('Erro ao gravar incidente')
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt='logo' />
                    <h1>Cadastre um novo caso</h1>
                    <p>Descreva o caso detalhamente para obter melhor ajuda</p>
                    <Link className='back-link' to='/profile'>
                        <FiArrowLeft size={16} color='#e02041' />
                    Voltar ao início
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input
                        placeholder='Título do caso'
                        value={title}
                        onChange={txt => setTitle(txt.target.value)}
                    />
                    <textarea
                        placeholder='Descrição'
                        value={description}
                        onChange={txt => setDescription(txt.target.value)}
                    />
                    <input
                        placeholder='Valor em reais'
                        value={value}
                        onChange={txt => setValue(txt.target.value)}
                    />
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
