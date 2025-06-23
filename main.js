/* Reset e variáveis */
@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&family=Poppins:wght@400;600&display=swap');

:root {
  --vermelho: #e50914;
  --azul: #001f3f;
  --azul-claro: #0074D9;
  --branco: #ffffff;
  --cinza-claro: #f4f4f4;
  --escuro: #111;
  --sombra: 0 4px 10px rgba(0, 0, 0, 0.1);
  --radius: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--cinza-claro);
  color: #333;
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Cabeçalho */
header {
  background: linear-gradient(90deg, var(--azul), #003366);
  padding: 40px 20px;
  text-align: center;
  box-shadow: var(--sombra);
  position: sticky;
  top: 0;
  z-index: 1000;
}

header h1 {
  font-family: 'Rubik Moonrocks', cursive;
  font-size: 3em;
  color: var(--vermelho);
  text-shadow: 2px 2px #000;
}

/* Navegação */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background: var(--branco);
  box-shadow: var(--sombra);
}

nav a {
  text-decoration: none;
  color: var(--azul);
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: var(--vermelho);
}

/* Cards de resumo */
.stats-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin: 40px 0;
}

.card {
  background: var(--branco);
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--sombra);
  text-align: center;
  width: 220px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  color: var(--azul);
  margin-bottom: 10px;
}

.card p {
  font-size: 1.2em;
  font-weight: bold;
}

/* Tabela */
main {
  padding: 50px 10%;
  background-color: var(--branco);
  border-radius: var(--radius);
  margin: 20px auto;
  box-shadow: var(--sombra);
}

table {
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--sombra);
}

th, td {
  padding: 15px;
  text-align: center;
}

th {
  background-color: var(--azul-claro);
  color: var(--branco);
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
}

tr:nth-child(even) {
  background-color: var(--cinza-claro);
}

tr:hover {
  background-color: #e8f4ff;
  cursor: pointer;
}

/* Gráfico */
.chart-container {
  width: 100%;
  margin-top: 50px;
}

canvas {
  background: var(--branco);
  border-radius: var(--radius);
  box-shadow: var(--sombra);
  padding: 20px;
}

/* Rodapé */
footer {
  text-align: center;
  padding: 20px;
  background-color: var(--azul);
  color: var(--branco);
  font-size: 0.9em;
  box-shadow: var(--sombra);
  margin-top: 50px;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--vermelho);
  color: var(--branco);
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.5s;
}

/* Animações */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(229, 9, 20, 0); }
  100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
}

/* Responsividade */
@media (max-width: 768px) {
  main {
    padding: 20px;
  }

  header h1 {
    font-size: 2em;
  }

  .stats-cards {
    flex-direction: column;
    align-items: center;
  }

  table, th, td {
    font-size: 0.9em;
  }
}