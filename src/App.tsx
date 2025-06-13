import React, {useState, useEffect } from 'react';// importamos o React para usar JSX(a linguagem que parece HTML dentro do JavaScript).

import './App.css';

// Criamos uma função chamada App, que retorna (ou seja, mostra) o que queremos ver na tela.
function App() {
  // Criamos uma "caixinha de memória " chamada contador e começamos com 0
  const [contador, setContador] = useState<number>(0);
  useEffect(() => { // Diz: "Ei React, quero rodar um código assim que a pagina abrir."
    const numeroSalvo = localStorage.getItem('contador'); // vai até o localStorage do navegador e procura se tem algo guardado com o nome contador 
    if (numeroSalvo !== null) {
      setContador(Number(numeroSalvo))
    }
  }, []); // Esses [] dizem ao React "rode esse código só uma vez, quando a página abrir."

  useEffect(() => {
    localStorage.setItem('contador', String(contador));
  }, [contador]); // Esse colchetes dizem: "Rode esse efeito sempre que o valor do contador mudar."

  // função para aumentar
  const aumentar = () => {
    setContador(contador + 1);
  };

  // função para diminuir
  const diminuir = () => {
    setContador(contador - 1);
  }

  const resetar = () => {
    setContador(0);
  };


  return (
  <main className="container">
    <h1>Contador</h1>
    <p className="numero">{contador}</p>
    <div className="botoes">
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  </main>
);
}

export default App; // Essa função App pode ser usada em outros arquivos.