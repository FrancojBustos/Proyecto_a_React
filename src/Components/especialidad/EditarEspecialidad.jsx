
export const EditarEspecialidad = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div className="p-5" style={{ height: '1px', background: 'rgb(0, 4, 41)' }}></div>

                <div className="container px-4 py-1">
                    <form className="p-1 p-md-4" id="formEditarEspecialidad" data-id="<%= id %>">
                        <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
                            <p className="fs-5">
                                <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Editar
                                Especialidad
                            </p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="descripcion_especialidad"
                                    name="descripcion_especialidad"
                                    // value=""
                                    required
                                />
                                <label htmlFor="descripcion_especialidad">Nombre especialidad</label>
                            </div>

                            <hr className="my-4" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="/lista_especialidades" className="btn btn-lg btn-secondary mx-2"
                            >Volver</a
                            >

                            <button className="btn btn-lg btn-primary mx-2" type="submit">
                                Confirmar
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <script src="../../../public/js/pantalla_principal.js"></script>
            <script src="../../../public/js/administrador/especialidad/editar.js"></script>

        </>
    )
}
