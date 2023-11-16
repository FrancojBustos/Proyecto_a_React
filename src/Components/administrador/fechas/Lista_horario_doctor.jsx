
export const Lista_horario_doctor = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
                <div
                    className="p-5 fs-5 text-white"
                    style={{ height: "1px", background: "rgb(0, 4, 41)" }}
                >
                    Horarios y turnos
                </div>

                <div
                    className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between"
                >
                    <a href="/crear_horario/<%= id %>" className="btn btn-primary text-light"
                    >Agregar Horario</a
                    >
                </div>

                <div className="main-table shadow m-5 bg-body rounded border">
                    <table className="table table-striped rounded text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Horario</th>
                                <th scope="col" colSpan="2">Funciones</th>
                            </tr>
                        </thead>
                        <tbody
                            className="d-flex-reverse align-items-center justify-content-center"
                            id="listaHorarios"
                            data-id="<%= id %>"
                        ></tbody>
                    </table>
                </div>
            </section>

            <script src="../../../public/js/pantalla_principal.js"></script>
            <script src="../../../public/js/administrador/fechas/lista_horarios.js"></script>

        </>
    )
}
