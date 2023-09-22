import React, { useState } from "react";
import Autores from "../../Store/Database";
import '../Atoms/Table.css'
import Button from "./Button";

function Table () {
    const [autoresAgregados, setAutoresAgregados] = useState([0]);
    const [contadorIndice, setContadorIndice] = useState(0); // Contador de índice

    const agregarAutor = () => {
        // verifico si el tamaño de mi arreglo, ya es mayor para que no siga agregando
        if (contadorIndice < Autores.Autor.length ) {
            const nuevoAutor = Autores.Autor[contadorIndice];
            setAutoresAgregados([...autoresAgregados, nuevoAutor]);
            setContadorIndice(contadorIndice+1); // Incrementa el contador del índice
        }
    };

    const eliminarAutor =()=>{
        if (autoresAgregados.length >0) {
            const nuevosAutores = [...autoresAgregados];
            nuevosAutores.pop(); // Elimina el último autor de la lista
            setAutoresAgregados(nuevosAutores);
        } else{
            alert ("No hay elementos en la tabla");
        }
    }


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Título</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {autoresAgregados.map((autor, index) => (
                        <tr key={index}>
                            <td>{autor.name}</td>
                            <td>{autor.titulo}</td>
                            <td>{autor.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button value="Agregar" onClick={agregarAutor}>Agregar</Button>
            <Button value="Eliminar" onClick={eliminarAutor}>Agregar</Button>
        </>
    );
}

export default Table;
