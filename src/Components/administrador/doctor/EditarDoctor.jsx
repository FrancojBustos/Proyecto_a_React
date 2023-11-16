
export const EditarDoctor = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div className="p-5" style={{ height: '1px', background: 'rgb(0, 4, 41)' }}></div>

                <div className="container px-4 py-5">
                    <form className="p-1 p-md-4" id="formEditarDoctor" data-id="<%= id %>">
                        <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
                            <p className="fs-5">
                                <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Modificar
                                Doctor
                            </p>
                        </div>

                        <div className="d-flex flex-wrap mb-5 justify-content-center w-100">
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="nombres"
                                    placeholder="juan"
                                    name="nombre"

                                    required
                                />
                                <label htmlFor="nombre">Nombres</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="apellidos"
                                    placeholder="Perez"
                                    name="apellido"

                                    required
                                />
                                <label htmlFor="apellido">Apellidos</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="date"
                                    className="form-control border-secondary"
                                    id="fecha_nac"
                                    placeholder="00/00/0000"
                                    name="fecha_nac"

                                    required
                                />
                                <label htmlFor="fecha">Fecha de Nacimiento</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="number"
                                    className="form-control border-secondary"
                                    id="dni"
                                    placeholder=""
                                    name="dni"

                                    required
                                />
                                <label htmlFor="dni">DNI</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="direccion"
                                    placeholder="mz 71 cs 30"
                                    name="direccion"

                                    required
                                />
                                <label htmlFor="direccion">Dirección</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="number"
                                    className="form-control border-secondary"
                                    id="telefono"
                                    placeholder="3704332211"
                                    name="telefono"

                                    required
                                />
                                <label htmlFor="telefono">Telefóno</label>
                            </div>

                            <hr className="my-4" />
                        </div>
                        <div className="d-flex justify-content-center flex-wrap">
                            <a href="/lista_doctores" className="btn btn-secondary btn-lg mx-2"
                            >Volver</a
                            >
                            <button className="btn btn-lg btn-primary mx-2" type="submit">
                                Editar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <script src="../../../public/js/pantalla_principal.js"></script>
            <script src="../../../public/js/administrador/doctor/editar_doctor.js"></script>
        </>
    )
}
