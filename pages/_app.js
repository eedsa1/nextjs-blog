import '../styles/global.css'

// o componente app torna-se o componente do nível topo que será comum pelas diferente páginas 
// ao adicioná-lo devemos reiniciar o server
// css global só pode ser importado aqui
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }