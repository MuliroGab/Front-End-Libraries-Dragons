import React, { useEffect, useState } from 'react';
import styles from './Login.module.css'
import axios from 'axios'
import { Link } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("cliqued")
      
          const response = await axios.post(
            'http://localhost:3000/login', JSON.stringify( { email, password }),
            {
                headers: { 'Content-Type': 'application/json'}
            }  
           
          );
      
          // Handle successful login (e.g., store token in local storage, redirect)
      };
    return (
        <body className={styles.corpo1}>
        <main id={styles["mains"]}>
            <form action="/login" method="post" id={styles["form2"]}>
                <h1 id={styles["criar-conta"]}>Iniciar sessão no<br/>Libraries & Dragons</h1>
                <hr id={styles["linha"]}/>
                <div className={styles.container}>
                    <div className={styles.inserir}>
                        <label htmlFor="email" className={styles.labe}>Endereço de e-mail</label>
                        <input id="email" type="email" className={styles.puts} placeholder="usuário@rpg.net" name="email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.inserir}>
                        <label htmlFor="senha" className={styles.labe}>Senha</label>
                        <input id="senha" type="password" className={styles.puts} placeholder="••••••••••" name="senha" required
                        onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className={styles.inserir}>
                        <button className={styles.btn1} onClick={(e) => handleLogin(e)}>Iniciar Sessão</button>
                        <p className={styles.ou}>ou</p>
                        <Link to="/">
                        <button className={styles.btn2}>Criar uma conta</button>
                        </Link>
                        <p id={styles["esqueceu-senha"]}><a href="#">Esqueceu sua senha</a></p>
                    </div>
                </div>
            </form>
        </main>
    </body>
    );
};

export default Login;
