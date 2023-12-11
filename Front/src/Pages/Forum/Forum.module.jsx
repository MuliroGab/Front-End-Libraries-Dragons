import './App.css'
function Cadastro() {
    return (
            <main>
            <form action="/" method="post">
                <h1>Criar uma conta</h1>
                <p id="descricao">Bem-vindo ao Libraries & Dragons! Preencha o formulário abaixo para criar a sua conta grátis.
                </p>
                <hr />
                <div class="container">
                    <div>
                        <label for="primeiro-nome">Primeiro Nome</label>
                        <input id="primeiro-nome" type="text" placeholder="Nome" name="nome" required />
                    </div>
                    <div>
                        <label for="ultimo-nome">Último Nome</label>
                        <input id="ultimo-nome" type="text" placeholder="Sobrenome" name="sobrenome" required />
                    </div>
                    <div>
                        <label for="email">Endereço de e-mail</label>
                        <input id="email" type="email" placeholder="usuário@rpg.net" name="email" required />
                    </div>
                    <div>
                        <label for="senha">Senha</label>
                        <input id="senha" type="password" placeholder="••••••••••" name="senha" required />
                    </div>
                    <div>
                        <label for="confirmacao-senha">Confirmação da Senha</label>
                        <input id="confirmacao-senha" type="password" placeholder="••••••••••" required />
                    </div>
                    <div>
                        <input type="submit" value="Criar uma Conta" class="registro btn1" />
                        <p>ou</p>
                        <button class="login btn2">Iniciar Sessão</button>
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Cadastro;
