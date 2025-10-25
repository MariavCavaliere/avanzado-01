
import './App.css'
import Cartas from './componentes/Cartas'
function App() {

  const mostrarCarta = (numero:number, pinta:string) => {
alert (`Carta de numero: ${numero} y pinta ${pinta}` );

  };
  return (
   <div>
    <h1>mi primer proyecto en react</h1>
    <p>Hecho por Maria</p>
    <p>hola hoy es un nuevo dia</p>
    <Cartas numero= {1} pinta='♠' mostrarCarta={mostrarCarta}/>
    <Cartas  numero= {4}pinta='♠' mostrarCarta={mostrarCarta} />
    <Cartas  numero= {5}pinta='♣' mostrarCarta={mostrarCarta}/>
    <Cartas  numero= {7}pinta='♥' mostrarCarta={mostrarCarta}/>
    <Cartas  numero= {10}pinta='♦'mostrarCarta={mostrarCarta}/>
   </div>
  )
}

export default App