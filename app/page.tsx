"use client";
import { useEffect, useState } from "react";
const projects = [
  {
    name: "Excel Analytics Platform",
    category: "Dados & SaaS",
    featured: true,
    tag: "PROJETO PRINCIPAL",
    description:
      "Plataforma de análise de ficheiros Excel com dashboards, indicadores de negócio, gestão de pessoas e tickets em quadros Kanban e histórico de dados.",
    stack: ["Next.js", "TypeScript", "BI", "Dashboards"],
    icon: "▥",
    color: "blue",
    url: "",
  },
  {
    name: "WellControled",
    category: "Fintech",
    featured: true,
    tag: "PROJETO EM DESTAQUE",
    description:
      "Aplicação de gestão financeira pessoal com autenticação, transações persistentes, receitas, despesas, poupanças e relatórios mensais.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Auth"],
    icon: "◈",
    color: "violet",
    url: "https://github.com/jwellingtonjuniordev-dev/wellcontroled",
  },
  {
    name: "Crónicas do Trono Fragmentado",
    category: "Game Dev",
    featured: true,
    description:
      "MMORPG de fantasia medieval em desenvolvimento (MVP 1.0.1), com exploração, combate em tempo real, três classes jogáveis, missões, crafting e progressão persistente. Cliente Godot e servidor Python.",
    stack: ["Godot 4", "GDScript", "Python", "FastAPI", "SQLite"],
    icon: "⚔",
    color: "slate",
    url: "https://github.com/jwellingtonjuniordev-dev/TronoFragmentado",
  },
  {
    name: "Belisco Delivery",
    category: "Web",
    featured: false,
    description:
      "Experiência de encomendas online para petiscaria com catálogo, componentes reutilizáveis e interface responsiva.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    icon: "◉",
    color: "orange",
    url: "",
  },
  {
    name: "TechWell",
    category: "Web",
    featured: false,
    description:
      "Landing page para serviços tecnológicos com identidade visual própria e apresentação de trabalhos.",
    stack: ["Vue.js", "JavaScript", "CSS"],
    icon: "⌘",
    color: "teal",
    url: "",
  },
  {
    name: "Python — Estudos e Automação",
    category: "Backend",
    featured: false,
    description:
      "Repositório de exercícios de Python: orientação a objetos, exceções, métodos especiais, ficheiros e automação.",
    stack: ["Python", "POO", "Git"],
    icon: "{ }",
    color: "yellow",
    url: "",
  },
  {
    name: "SQL & Modelação de Dados",
    category: "Dados",
    featured: false,
    description:
      "Modelação relacional, normalização, chaves primárias e estrangeiras e scripts de criação e povoamento de bases de dados.",
    stack: ["SQL", "PostgreSQL", "MySQL"],
    icon: "▤",
    color: "slate",
    url: "",
  },
  {
    name: "Task Manager — SDLC",
    category: "Backend",
    featured: false,
    description:
      "Planeamento de uma aplicação de gestão de tarefas através das fases do ciclo de vida do desenvolvimento de software.",
    stack: ["SDLC", "Arquitetura", "Planeamento"],
    icon: "☷",
    color: "green",
    url: "",
  },
];
const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "UX/UI",
];
export default function Home() {
  const [filter, setFilter] = useState("Todos");
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const dark = saved === "dark" || (saved === null && matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(dark);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.classList.toggle("dark-theme", dark);
  }, []);
  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    document.documentElement.classList.toggle("dark-theme", next);
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
  };
  const visible = projects.filter(
    (p) => filter === "Todos" || p.category === filter,
  );
  return (
    <>
      <header className="nav">
        <a className="brand" href="#inicio">
          JW<span>.</span>
        </a>
        <nav id="portfolio-navigation" className={menu ? "navlinks open" : "navlinks"}>
          <a onClick={() => setMenu(false)} href="#sobre">
            Sobre
          </a>
          <a onClick={() => setMenu(false)} href="#projetos">
            Projetos
          </a>
          <a onClick={() => setMenu(false)} href="#competencias">
            Competências
          </a>
          <a onClick={() => setMenu(false)} href="#formacao">Formação</a>
          <a onClick={() => setMenu(false)} href="#experiencia">
            Experiência
          </a>
        </nav>
        <a className="navcontact" href="mailto:jwellingtonjuniordev@gmail.com">
          Vamos conversar <span>↗</span>
        </a>
        <div className="nav-actions">
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"} aria-pressed={darkMode} title={darkMode ? "Modo claro" : "Modo escuro"}>
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
          </button>
        <button
          className="hamb"
          aria-label={menu ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menu}
          aria-controls="portfolio-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? "✕" : "☰"}
        </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="dot" /> DISPONÍVEL PARA OPORTUNIDADES
              </div>
              <p className="intro">OLÁ, EU SOU</p>
              <h1>
                José
                <br />
                <span>Wellington</span>
                <br />
                Júnior<span className="period">.</span>
              </h1>
              <div className="role">
                <span />
                FULL STACK DEVELOPER <b>&</b> DATA ENTHUSIAST
              </div>
              <p className="hero-desc">
                Transformo ideias em experiências digitais. Desenvolvo
                aplicações web, soluções inteligentes e ferramentas que tornam
                dados em decisões.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#projetos">
                  Explorar projetos <span>↗</span>
                </a>
                <a className="btn secondary" href="/cv.pdf" download>
                  Descarregar CV ↓
                </a>
              </div>
              <div className="hero-social">
                <a
                  href="https://github.com/jwellingtonjuniordev-dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB ↗
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN ↗
                </a>
                <span>SINTRA, PORTUGAL</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="art-circle" />
              <div className="art-outline" />
              <div className="art-grid" />
              <img src="/profile.png" alt="Retrato de José Wellington Júnior" />
              <div className="float-tag">&lt; developer /&gt;</div>
              <div className="float-star">✳</div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>SCROLL PARA EXPLORAR ↓</span>
            <span>01 / PORTFÓLIO 2026</span>
          </div>
        </section>
        <section className="ticker">
          <div>
            DESENVOLVIMENTO WEB <span>✳</span> AUTOMAÇÃO <span>✳</span> ANÁLISE
            DE DADOS <span>✳</span> SOLUÇÕES DIGITAIS <span>✳</span>{" "}
            DESENVOLVIMENTO WEB <span>✳</span>
          </div>
        </section>
        <section className="section about" id="sobre">
          <div className="section-label">01 / SOBRE MIM</div>
          <div className="about-grid">
            <h2>
              Curiosidade técnica.
              <br />
              <em>Impacto real.</em>
            </h2>
            <div>
              <p>
                Sou um programador em evolução, com experiência em suporte
                técnico, resolução de problemas e liderança de equipas. Hoje,
                foco-me na criação de aplicações web e sistemas que simplificam
                o trabalho das pessoas.
              </p>
              <p>
                Frequento o CET de Tecnologias e Sistemas de Informação na Tech
                Academy (nível 5) e desenvolvo projetos práticos que combinam
                frontend, backend e bases de dados.
              </p>
              <a
                className="text-link"
                href="mailto:jwellingtonjuniordev@gmail.com"
              >
                ENTRAR EM CONTACTO ↗
              </a>
            </div>
          </div>
        </section>
        <section className="section work" id="projetos">
          <div className="section-label">02 / TRABALHOS SELECIONADOS</div>
          <div className="section-heading">
            <div>
              <h2>
                Projetos que
                <br />
                <em>ganham vida.</em>
              </h2>
              <p>
                Uma seleção de aplicações, experiências e soluções que tenho
                desenvolvido.
              </p>
            </div>
            <a
              className="text-link"
              href="https://github.com/jwellingtonjuniordev-dev"
              target="_blank"
              rel="noreferrer"
            >
              VER GITHUB ↗
            </a>
          </div>
          <div className="filters">
            {[
              "Todos",
              "Dados & SaaS",
              "Fintech",
              "Game Dev",
              "Web",
              "Backend",
              "Dados",
            ].map((f) => (
              <button
                key={f}
                className={filter === f ? "active" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visible.map((p, i) => (
              <article
                key={p.name}
                className={"project-card " + (p.featured ? "featured" : "")}
              >
                <div className={"project-visual " + p.color}>
                  <div className="preview-window" aria-label={"Pré-visualização ilustrativa do projeto " + p.name}>
                    <div className="preview-browser"><span/><span/><span/><small>{p.name}</small></div>
                    <div className="preview-app">
                      <aside className="preview-sidebar"><b>{p.icon}</b><i/><i/><i/><i/></aside>
                      <div className="preview-main">
                        <div className="preview-heading"><strong>{p.name}</strong><span>● ONLINE</span></div>
                        {p.category === "Game Dev" ? (
                          <div className="preview-game">
                            <div className="preview-game-title">CRÓNICAS DO TRONO FRAGMENTADO</div>
                            <div className="preview-game-scene"><span>🌲</span><span>🏰</span><span>⚔️</span><span>🌲</span></div>
                            <div className="preview-game-hud"><b>HP ███████░░</b><b>MP █████░░░░</b><small>Valedouro · MVP 1.0.1</small></div>
                          </div>
                        ) : p.category === "Fintech" ? (
                          <><div className="preview-metrics"><div>Saldo total<strong>€ 12.480</strong></div><div>Receitas<strong>€ 3.250</strong></div><div>Despesas<strong>€ 1.420</strong></div></div><div className="preview-bars">{[38,65,48,82,57,91,72,100,68,86].map((v,j)=><i key={j} style={{height:v+"%"}}/>)}</div></>
                        ) : p.category === "Dados & SaaS" ? (
                          <><div className="preview-metrics"><div>Registos<strong>2.845</strong></div><div>Indicadores<strong>24</strong></div><div>Relatórios<strong>18</strong></div></div><div className="preview-bars">{[28,52,45,73,58,94,66,88,77,100].map((v,j)=><i key={j} style={{height:v+"%"}}/>)}</div></>
                        ) : p.name === "Belisco Delivery" ? (
                          <><div className="preview-banner">BELISCO <span>Petiscaria Delivery</span></div><div className="preview-products"><span>🍔<small>Burgers</small></span><span>🍟<small>Porções</small></span><span>🥤<small>Bebidas</small></span></div></>
                        ) : p.name === "TechWell" ? (
                          <><div className="preview-banner">TECHWELL <span>Soluções digitais para o futuro</span></div><div className="preview-products"><span>⌘<small>Web</small></span><span>◇<small>Design</small></span><span>⚙<small>Tech</small></span></div></>
                        ) : p.name.includes("Python") ? (
                          <div className="preview-code"><span>class Developer:</span><span>  def build(self):</span><span>    return "Python"</span><span>print("Hello, World!")</span></div>
                        ) : p.name.includes("SQL") ? (
                          <div className="preview-code"><span>SELECT projeto, status</span><span>FROM portfolio</span><span>WHERE ativo = true;</span><span>-- PostgreSQL / MySQL</span></div>
                        ) : (
                          <div className="preview-kanban"><div>Por fazer<i/><i/><i/></div><div>Em progresso<i/><i/></div><div>Concluído<i/><i/><i/></div></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="visual-title">PREVIEW ILUSTRATIVO · {p.name}</div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span>
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {p.category.toUpperCase()}
                    </span>
                    {p.featured && (
                      <span className="featured-label">✳ DESTAQUE</span>
                    )}
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="project-foot">
                    <div className="tags">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={"Abrir " + p.name}
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">
            Os links individuais serão ativados quando os URLs públicos dos
            repositórios ou demos forem configurados.
          </p>
        </section>
        <section className="section skills" id="competencias">
          <div className="section-label">03 / FERRAMENTAS & TECNOLOGIAS</div>
          <div className="skills-grid">
            <div>
              <h2>
                O meu kit
                <br />
                <em>de criação.</em>
              </h2>
              <p>
                Tecnologias que utilizo e continuo a aprofundar para construir
                soluções completas.
              </p>
            </div>
            <div className="skill-tags">
              {skills.map((s) => (
                <span key={s}>
                  {s}
                  <b>↗</b>
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="section experience" id="formacao">
          <div className="section-label">04 / FORMAÇÃO ACADÉMICA</div>
          <h2>Aprender para <em>evoluir.</em></h2>
          <div className="timeline">
            {[
              ["09/2026 — PRESENTE", "CET — Tecnologias e Sistemas de Informação", "Tech Academy · Qualificação nível 5"],
              ["2026 — PRESENTE", "Formação prática autónoma em Full Stack", "Python, React, Vue, Node.js, APIs, bases de dados e Git"],
              ["04/2022", "Desenvolvimento Web com PHP e MySQL", "Udemy"],
              ["2010", "Ensino secundário", "Escola Estadual Padre José Maria Biezinger · Brasil"],
            ].map((x) => (
              <div className="timeline-row" key={x[0] + x[1]}>
                <span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><span className="timeline-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>
        <section className="section experience professional" id="experiencia">
          <div className="section-label">05 / EXPERIÊNCIA PROFISSIONAL</div>
          <h2>Experiência que <em>transforma.</em></h2>
          <div className="timeline">
            {[
              ["02/11/2026 — PRESENTE", "Técnico de Informática", "CEDIS · Suporte e assistência técnica informática"],
              ["06/08/2025 — 30/10/2026", "Técnico de Manutenção Industrial", "Kaffa Café, Lda. · Sintra, Portugal · Diagnóstico de avarias e manutenção preventiva e corretiva"],
              ["05/2023 — 01/2024", "Suporte Técnico", "RHMais · Porto, Portugal · Apoio em internet, IPTV/RF e telefonia"],
              ["09/2018 — 04/2022", "Analista de Desenvolvimento de Produtos", "Coteminas S/A · Brasil · Registos, relatórios de produção e análise de paragens"],
              ["06/2014 — 09/2017", "Supervisor de Suporte Técnico", "Teleperformance SGA · Brasil · Coordenação de equipas, formação, KPIs e auditoria"],
            ].map((x) => (
              <div className="timeline-row" key={x[0]}>
                <span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><span className="timeline-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>
        <section className="contact" id="contacto">
          <div className="section-label">06 / VAMOS CRIAR ALGO</div>
          <p>TENS UM PROJETO EM MENTE?</p>
          <h2>
            Vamos fazer
            <br />
            <em>acontecer.</em>
          </h2>
          <a
            href="mailto:jwellingtonjuniordev@gmail.com"
            className="contact-button"
          >
            FALA COMIGO ↗
          </a>
          <div className="contact-email">jwellingtonjuniordev@gmail.com</div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#inicio">
          JW<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} JOSÉ WELLINGTON JÚNIOR</span>
        <div>
          <a
            href="https://github.com/jwellingtonjuniordev-dev"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB ↗
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LINKEDIN ↗
          </a>
          <a href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
      </footer>
    </>
  );
}
