import styles from './Home.module.css'
import logo from '../../assets/icone-2.png'
import logohome from '../../assets/home.png'
import search from '../../assets/search.png'
import book from '../../assets/book.png'
import cap from '../../assets/graduation.png'
import user from '../../assets/user.png'
import users from '../../assets/users.png'
import out from '../../assets/out.png'
import file from '../../assets/file.png'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import React, { useState } from 'react';
function HomePage() {
  const [fechado, setFechado] = useState(false);
  const [escuro, setEscuro] = useState(false);

  const alternarModo = () => {
    setEscuro((prevEscuro) => !prevEscuro);
  };

  const alternarBarraLateral = () => {
    setFechado(!fechado);
  };
  const alternarBarraLateral2 = () => {
    setFechado((prevFechado) => !prevFechado);
  };
  return (
    <html className={`${styles.html} ${fechado ? styles.fechado : ''}`} >
    <body className={`${escuro ? styles.escuro : ''}`} id={styles["corpo"]}>
      <nav className={`${styles.navbar} ${fechado ? styles.fechado : ''}`}>
        <header id={styles["head"]} >
          <div id={styles["logo"]}>
            <img id={styles["img"]} src={logo} alt="logo" />
            <p className={styles.texto} id={styles["titulo"]}>Libraries & Dragons</p>
          </div>
          <i id={styles["alternar"]} className="fa fa-chevron-right" onClick={alternarBarraLateral}></i>
        </header>
        <div id={styles["barra-menu"]} className={fechado ? styles.fechado : ''}>
          <div id={styles["menu"]}>
            <li id={styles["caixa-pesquisa"]} onClick={() => fechado && alternarBarraLateral2()}><img className={styles.icones} src={search}/><input id={styles["pesquisa"]} type="text" placeholder="Pesquisar..." /></li>
            <ul id={styles["links-menu"]}>
              <li className={styles.linknavegacao}><a href="#sessao-1" className={styles.links}><img className={styles.icones} src={logohome}/><span className={styles.texto}>Início</span></a></li>
              <li className={styles.linknavegacao}><a href="#sessao-1" className={styles.links}><img className={styles.icones} src={users}/><span className={styles.texto}>Aventuras em Grupo</span></a></li>
              <li className={styles.linknavegacao}><a href="#sessao-2" className={styles.links}><img className={styles.icones} src={user}/><span className={styles.texto}>Aventuras Solo</span></a></li>
              <li className={styles.linknavegacao}><a href="#sessao-3" className={styles.links}><img className={styles.icones} src={cap}/><span className={styles.texto}> Aventuras Educacionais</span></a></li>
              <li className={styles.linknavegacao}><a href="#sessao-4" className={styles.links}><img className={styles.icones} src={book}/><span className={styles.texto}>Livros Suplementares</span></a></li>
              <li className={styles.linknavegacao}><a href="#sessao-5" className={styles.links}><img className={styles.icones} src={file}/><span className={styles.texto}>Fichas de Personagens</span></a></li>
            </ul>
          </div>
          <div id={styles["conteudo-inferior"]}>
            <li><a href="#" onclick="sair();" className={styles.links}><img className={styles.icones} src={out}/><span className={styles.texto}>Sair</span></a></li>
            <li id={styles["modo"]}>
              <div id={styles["sol-lua"]}>
                <img className={styles.icones} src={moon} id={styles["lua"]}/>
                <img className={styles.icones} src={sun} id={styles["sol"]}/>
              </div>
              <span className={styles.texto}>{escuro ? 'Modo Escuro' : 'Modo Claro'}</span>
              <div id={styles["botao-alternar"]} onClick={alternarModo}>
                <span id={styles["botao"]}></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <main>
        <section className={styles.estante}>
          <div className="sessao sessao-1">
            <h1 id="sessao-1" className={styles.h11}>Aventuras em Grupo</h1>
            <div className={styles.prateleira}>
              <figure className={styles.figure}>

              </figure>
              <figure className={styles.figure}>

              </figure>
              <figure >

              </figure>
            </div>
            <div className={styles.prateleira}>
              <figure className={styles.figure}>

              </figure>
              <figure className={styles.figure}>

              </figure>
              <figure className={styles.figure}>

              </figure>
            </div>
            <button className={styles.pobutton}><i className="fa fa-angle-left"></i> Anterior</button>
            <label id="visor-1">0 / 0</label>
            <button className={styles.pobutton}>Próximo <i className="fa fa-angle-right"></i></button>
          </div>
          <hr className={styles.hr}/>
          <div className="sessao sessao-2">
            <h1 id="sessao-2" className={styles.h11}>Aventuras Solo</h1>
            <div className={styles.prateleira}>
              <figure className={styles.figure}>

              </figure>
              <figure className={styles.figure}>

              </figure>
              <figure className={styles.figure}>

              </figure>
            </div>
            <div className={styles.prateleira}>
              <figure className={styles.figure}>

              </figure>
              <figure>

              </figure>
              <figure className={styles.figure}>

              </figure>
            </div>
            <button className={styles.pobutton}><i className="fa fa-angle-left" aria-hitemIDden="true"></i> Anterior</button>
            <label id="visor-2">0 / 0</label>
            <button className={styles.pobutton}>Próximo <i className="fa fa-angle-right" aria-hitemIDden="true"></i></button>
          </div>
          <hr className={styles.hr1}/>
            <div className="sessao sessao-3">
              <h1 id="sessao-3" className={styles.h11}>Aventuras Educacionais</h1>
              <div className={styles.prateleira}>
                <figure className={styles.figure}>

                </figure>
                <figure className={styles.figure}>

                </figure>
                <figure className={styles.figure}>

                </figure>
              </div>
              <div className={styles.prateleira}>
                <figure className={styles.figure}>

                </figure>
                <figure className={styles.figure}>

                </figure>
                <figure className={styles.figure}>

                </figure>
              </div>
              <button className={styles.pobutton}><i className="fa fa-angle-left" aria-hitemIDden="true"></i> Anterior</button>
              <label id="visor-3">0 / 0</label>
              <button className={styles.pobutton}>Próximo <i className="fa fa-angle-right" aria-hitemIDden="true"></i></button>
            </div>
            <hr className={styles.hr1}/>
              <div className="sessao sessao-4">
                <h1 id="sessao-4" className={styles.h11}>Livros Suplementares</h1>
                <div className={styles.prateleira}>
                  <figure className={styles.figure}>

                  </figure>
                  <figure className={styles.figure}>

                  </figure>
                  <figure className={styles.figure}>

                  </figure>
                </div>
                <div className={styles.prateleira}>
                  <figure className={styles.figure}>

                  </figure>
                  <figure className={styles.figure}>

                  </figure>
                  <figure className={styles.figure}>

                  </figure>
                </div>
                <button id="bt-voltar-4" onclick="mudar_colecao_suplementares('anterior')" className={styles.pobutton}><i className="fa fa-angle-left" aria-hitemIDden="true"></i> Anterior</button>
                <label id="visor-4">0 / 0</label>
                <button id="bt-avancar-4" onclick="mudar_colecao_suplementares('proxima')" className={styles.pobutton}>Próximo <i className="fa fa-angle-right" aria-hitemIDden="true"></i></button>
              </div>
              <hr className={styles.hr1}/>
                <div className="sessao sessao-5">
                  <h1 id="sessao-5" className={styles.h11}>Fichas de Personagens</h1>
                  <div className={styles.prateleira}>
                    <figure className={styles.figure}>

                    </figure>
                    <figure className={styles.figure}>

                    </figure>
                    <figure className={styles.figure}>

                    </figure>
                  </div>
                  <div className={styles.prateleira}>
                    <figure className={styles.figure}>

                    </figure>
                    <figure className={styles.figure}>

                    </figure>
                  </div>
                  <button id="bt-voltar-5" onclick="mudar_colecao_fichas('anterior')" className={styles.pobutton}><i className="fa fa-angle-left" aria-hitemIDden="true"></i> Anterior</button>
                  <label id="visor-5">0 / 0</label>
                  <button id="bt-avancar-5" onclick="mudar_colecao_fichas('proxima')" className={styles.pobutton}>Próximo <i className="fa fa-angle-right" aria-hitemIDden="true"></i></button>
                </div>
              </section>
            </main>
            <button id={styles["forum"]} onclick="redirectToForum()"><i className="fa fa-comments-o" aria-hitemIDden="true"></i></button>
          </body>
          </html>
          );
};

          export default HomePage;
