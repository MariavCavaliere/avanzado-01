type Props = {
numero: number;
nombre: string;
tipo:string;
ataque:number;
defensa:number;
descripcion:string;
imagen:string;
}

function cartaDetail ( {
    ataque,
    defensa,
    descripcion,
    nombre,
    imagen,
    numero,
    tipo }: Props ) {
        return (
        <div>
            <h3>
                {nombre} (#{numero})
            </h3>
            img src={imagen} alt={nombre}
            <p> Tipo: {tipo}</p>
            <p> ataque: {tipo}</p>
            <p> defensa: {defensa}</p>
            <p> {descripcion}</p>
        </div>
         );
    }
 export default cartaDetail;