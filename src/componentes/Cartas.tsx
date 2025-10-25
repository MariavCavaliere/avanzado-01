type Props = {
numero: number;
pinta: string;
mostrarCarta :(numero:number, pinta:string) => void;
}

function Cartas({numero,pinta,mostrarCarta}:Props) {
    const handleClick = () => {
       mostrarCarta (numero, pinta);
    };

    return (
    <button onClick={handleClick}>
    <h3> Hola soy una Carta {numero + " " + pinta} 🃏</h3>;
</button>)
};
export default Cartas;
