import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState, useRef } from "react";
import "../componentes/button_style.css";

function FuncionColaboradores() {
  const [colaboradores, setColaboradores] = useState([...BaseColaboradores]);
  const [busqueda, setBusqueda] = useState("");
  const nombreRef = useRef();
  const correoRef = useRef();

  function colaboradorAdd(e) {
    e.preventDefault();
    setColaboradores([
      ...colaboradores,
      {
        nombre: nombreRef.current.value,
        correo: correoRef.current.value,
        id: Date.now() % 100,
      },
    ]);
    nombreRef.current.value = "";
    correoRef.current.value = "";
  }

  const filtrados =
    busqueda !== ""
      ? colaboradores.filter(
          (colaborador) =>
            colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            colaborador.correo.toLowerCase().includes(busqueda.toLowerCase())
        )
      : colaboradores;

  return (
    <div>
      <div class="d-flex align-items-center flex-row-reverse">
        <div class="d-flex ">
          <input
            onChange={(e) => setBusqueda(e.target.value)}
            type="text"
            placeholder="Filtro"
            class="form-control m-2"
          />
        </div>

        <form
          class="d-flex flex-wrap justify-content-center"
          onSubmit={colaboradorAdd}
        >
          <input
            ref={nombreRef}
            required
            type="text"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder="Colaborador"
          />
          <input
            ref={correoRef}
            required
            type="mail"
            class="form-control m-2"
            id="exampleFormControlInput1"
            placeholder="Correo"
          />

          <button type="submit" class="btnn m-1">
            <span class="text">+</span>
          </button>
        </form>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <ul class="list-group">
          {filtrados.map((filtrado) => {
            return (
              <li key={filtrado.id} class="list-group-item">
                <span class="text-muted">ID:</span>{" "}
                <span class="text-danger"> {filtrado.id} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                <span> {filtrado.nombre} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope text-muted"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <span> {filtrado.correo}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FuncionColaboradores;
