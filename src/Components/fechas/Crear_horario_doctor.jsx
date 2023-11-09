import React from 'react'

export const Crear_horario_doctor = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                <div className="p-5" style={{ height: "1px", background: "rgb(0, 4, 41)" }}></div>

                <div className="container px-4 py-1">
                    <form className="p-1 p-md-4" id="formNuevoHorario" data-id="<%= id %>">
                        <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
                            <p className="fs-5">
                                <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Agregar
                                Horario
                            </p>
                        </div>

                        <div className="d-flex flex-column align-items-center">
                            <div className="form-floating m-2 inputForm w-50">
                                <input
                                    type="date"
                                    className="form-control border-secondary"
                                    id="fecha"
                                    placeholder="3704332211"
                                    name="fecha"
                                    required
                                />
                                <label htmlFor="fecha">Fecha del Turno</label>
                            </div>
                            <div className="form-floating m-2 inputForm w-50">
                                <input
                                    type="time"
                                    className="form-control border-secondary"
                                    id="horario_inicio"
                                    placeholder="example@gmail.com"
                                    name="horario_turno"
                                    required
                                />
                                <label htmlFor="horario_turno">Horario de Inicio</label>
                            </div>
                            <div className="form-floating m-2 inputForm w-50">
                                <input
                                    type="time"
                                    className="form-control border-secondary"
                                    id="horario_fin"
                                    placeholder="example@gmail.com"
                                    name="horario_turno"
                                    required
                                />
                                <label htmlFor="horario_turno">Horario de Fin</label>
                            </div>
                            <div className="form-floating m-2 inputForm w-50">
                                <select name="" id="descripcion" className="form-control border-secondary">
                                    <option value="#"></option>
                                    <option value="Mañana">Turno Mañana</option>
                                    <option value="Tarde">Turno Tarde</option>
                                    <option value="Noche">Turno Noche</option>
                                </select>
                                <label htmlFor="horario_turno">Descripcion Turno</label>
                            </div>
                            <div className="form-floating m-2 inputForm w-50">
                                <input
                                    type="number"
                                    className="form-control border-secondary"
                                    id="cantidad_turnos"
                                    name="cantidad_turnos"
                                    required
                                />
                                <label htmlFor="cantidad_turnos">Cantidad de Turnos</label>
                            </div>

                            <hr className="my-4" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <a
                                href="/lista_horarios/<%= id %>"
                                className="btn btn-lg btn-secondary mx-2"
                            >Volver</a
                            >

                            <button className="btn btn-lg btn-primary mx-2" type="submit">
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* <script src="/js/pantalla_principal.js"></script>
            <script src="/js/administrador/fechas/crear_horario.js"></script> */}
        </>
    )
}
