import styles from './Cadastro.module.css'
import { Link } from "react-router-dom";

function Cadastro() {
    
    return (
        <body className={styles.corpo} id={styles["corpo"]}>
            <main id={styles["mains"]}>
            <form action="/" method="post" id={styles["form1"]}>
                <h1 id={styles["criar-conta"]}>Criar uma conta</h1>
                <p id={styles["descricao"]}>Bem-vindo ao Libraries & Dragons! Preencha o formulário abaixo para criar a sua conta grátis.
                </p>
                <hr id={styles["linha"]}/>
                <div className={styles.container}>
                    <div className={styles.inserir}>
                        <label for="primeiro-nome" className={styles.labe}>Primeiro Nome</label>
                        <input id="primeiro-nome" className={styles.puts} type="text" placeholder="Nome" name="nome" required />
                    </div>
                    <div className={styles.inserir}>
                        <label for="ultimo-nome" className={styles.labe}>Último Nome</label>
                        <input id="ultimo-nome" className={styles.puts} type="text" placeholder="Sobrenome" name="sobrenome" required />
                    </div>
                    <div className={styles.inserir}>
                        <label for="email" className={styles.labe}>Endereço de e-mail</label>
                        <input id="email" type="email" className={styles.puts} placeholder="usuário@rpg.net" name="email" required />
                    </div>
                    <div className={styles.inserir}>
                        <label for="senha" className={styles.labe}>Senha</label>
                        <input id="senha" type="password" className={styles.puts} placeholder="••••••••••" name="senha" required />
                    </div>
                    <div className={styles.inserir}>
                        <label for="confirmacao-senha" className={styles.labe}>Confirmação da Senha</label>
                        <input id="confirmacao-senha" className={styles.puts} type="password" placeholder="••••••••••" required />
                    </div>
                    <div className={styles.inserir}>
                        <input type="submit" value="Criar uma Conta" className={styles.btn1} />
                        <p className={styles.ou}>ou</p>
                        <Link to="/login">
                        <button className={styles.btn2} >Iniciar Sessão</button>
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    </body>
    );
};

export default Cadastro;
