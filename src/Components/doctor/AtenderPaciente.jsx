// import '../../../public/js/pantalla_principal'
// import '../../../public/js/doctor/crear_devolucion'
// import '../../../public/js/doctor/modificar_devolucion'
// import '../../../public/js/doctor/listar_devoluciones'
// import '../../../public/js/alerta'

export const AtenderPaciente = () => {
    const finalizarTurno = async (event) => {
        //Obtengo el ID
        const id = event.target.dataset.id;
        console.log(id);

        try {
            const res = await fetch(`http://localhost:3000/api/turno/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            Swal.fire({
                icon: "success",
                title: "Excelente",
                text: data.message,
            });

            setTimeout(() => {
                window.location.href = `/doctor/turnos/dia`;
            }, 1500);
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
            });
        }
    };

    return (
        <>

            {/* <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="/styles/pantalla_principal.css" />
                    <link rel="stylesheet" href="/styles/estilo_tablas.css" />
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                        crossorigin="anonymous"
                    />
                    <title>Atender Paciente</title>
                </head> */}
            <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                <section className="w-100" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                    <div
                        className="p-5 text-white font-bold d-flex justify-content-between"
                        style={{ height: "1px", background: "rgb(0, 4, 41)" }}
                    >
                        <a
                            href="/doctor/turnos/dia"
                            className="d-flex align-items-center text-white text-decoration-none py-2"
                        >
                            <img src="/img/inicio_sesion/logo.png" alt="logo.png" width="70px" />
                            <span className="fs-4">Atender Paciente</span>
                        </a>
                        <p>User:
                            {/* <%= user %> */}
                        </p>
                    </div>
                    <div className="row m-0">
                        <section className="col-lg-4 mt-5">
                            <div className="d-flex justify-content-center">
                                <h6 className="fw-bold fs-4">Paciente</h6>
                                <p><b></b></p>
                            </div>
                            <div
                                data-id="<%= idPaciente %>"
                                id="DatoPaciente"
                                className="shadow mb-5 bg-body rounded border"
                            ></div>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-lg btn-success"
                                    onClick={finalizarTurno}
                                    data-id="<%= idTurno %>"
                                >
                                    Finalizar
                                </button>
                            </div>
                        </section>

                        <section className="col-lg-8">
                            <div className="shadow mt-5 p-2 bg-body rounded">
                                <form id="crearDevolucion" data-id="<%= idTurno %>">
                                    {/* <% if(idDevolucion === ":idDevolucion") { %>
              <p class="fs-5 border-bottom border-dark">Cargar Devolución</p>
              <input
                type="text"
                name="turnos_id"
                id="turno_id"
                value="<%= idTurno %>"
                hidden
              />
              <div class="input-group mb-2">
                <span
                  class="input-group-text bg-dark text-white w-1"
                  id="basic-addon1"
                  >Titulo</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recetas"
                  aria-label="titulo_turno"
                  aria-describedby="basic-addon1"
                  name="titulo_turno"
                  id="titulo_turno"
                  required
                />
              </div>

              <div class="input-group">
                <span class="input-group-text bg-dark text-white"
                  >Descripción</span
                >

                <textarea
                  name="descripcion:turno"
                  id="descripcion_turno"
                  class="form-control"
                  aria-label="With textarea"
                  required
                ></textarea>
              </div>
              <div class="text-center mt-2">
                <button type="submit" class="btn btn-primary">Cargar</button>
              </div>
              <% } else { %>
            </form>

            <p class="fs-5 border-bottom border-dark">Modificar Devolución</p>
            <form id="modificarDevolucion" data-id="<%= idDevolucion %>">
              <input
                type="text"
                name="turnos_id"
                id="turno_id"
                value="<%= idTurno %>"
                hidden
              />
              <div class="input-group mb-2">
                <span
                  class="input-group-text bg-dark text-white w-1"
                  id="basic-addon1"
                  >Titulo</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recetas"
                  aria-label="titulo_turno"
                  aria-describedby="basic-addon1"
                  name="titulo_turno"
                  id="titulo_turno"
                  value=""
                  required
                />
              </div>

              <div class="input-group">
                <span class="input-group-text bg-dark text-white"
                  >Descripción</span
                >

                <textarea
                  name="descripcion:turno"
                  id="descripcion_turno"
                  class="form-control"
                  aria-label="With textarea"
                  required
                ></textarea>
              </div>
              <div class="text-center mt-2">
                <a
                  href="/doctor/turno/atender/<%= idTurno %>/:idDevolucion/<%= idPaciente %>"
                  class="btn btn-secondary"
                  >Cancelar</a
                >
                <button type="submit" class="btn btn-primary">Modificar</button>
              </div>
            <% } %> */}
                                </form>

                            </div>
                            <div className="shadow mt-5 p-2 bg-body rounded">
                                <p className="fs-5 border-bottom border-dark">Devoluciones</p>
                                <div className="d-flex flex-wrap" id="ListadoDevoluciones"></div>
                            </div>
                        </section>
                    </div>
                </section>



                {/* <%- include("../partials/admin/footer_admin.ejs") -%> */}
            </div>
        </>
    )
}
