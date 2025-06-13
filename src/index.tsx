import React from "react"; // importa o react, que é a biblioteca que usamos para criar os componentes da interface(como botões, textos, etc.)
import ReactDOM from 'react-dom/client';// importa o ReactDom, que é o conector entre o React e o navegador.Ele sabe como mostrar o React na tela.
import App from './App';// Estamos dizendo "Quero usar o componente App" que é o coração do nosso site. Tudo que vemos na tela vem de APP.tsx.

const root = ReactDOM.createRoot(document.getElementById('root')!);/* Aqui o React está procurando um lugar dentro do HTML para mostrar o site. No arquivo public/index.html, existe uma div assim: <div id "root></div> Esse é o lugar onde o React vai desenhar seu site."*/


// Essa parte mostra o que deve aparecer na tela
root.render( 
  <React.StrictMode>
    <App/> 
  </React.StrictMode>);// ajuda a encontrar erros e boas praticas durante o desenvolvimento
  // <App/> mostra o conteudo do componente app. 