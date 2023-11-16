import React from 'react'

export const ListaDoctoresCompleta = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div
                    className="p-5 fs-5 text-white"
                    style={{ height: '1px', background: 'rgb(0, 4, 41)' }}
                >
                    Listado de doctores completos
                </div>

                <div
                    className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between"
                >
                    <a href="/crear_doctor" className="btn btn-primary text-light"
                    >Agregar Doctor</a
                    >
                    <form>
                        <div className="d-flex">
                            <select name="filtro" id="filtro" className="btn btn-secondary">
                                <option value="dni">DNI</option>
                                <option value="telefono">Telefono</option>
                                <option value="especialidad">Especialidad</option>
                            </select>
                            <input
                                type="text"
                                id="valor"
                                name="valor"
                                className="form-control"
                                required
                            />
                            <button type="submit" className="btn btn-primary">Filtrar</button>
                        </div>
                    </form>
                </div>

                <div className="main-table shadow m-5 bg-body rounded border">
                    <table className="table table-striped rounded text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">DNI</th>
                                <th scope="col">Nombre y Apellido</th>
                                <th scope="col">Especialidad</th>
                                <th scope="col" colSpan="2">Funciones</th>
                            </tr>
                        </thead>
                        <tbody
                            className="d-flex-reverse align-items-center justify-content-center"
                            id="listaDoctores"
                        ></tbody>
                    </table>
                </div>
            </section>
            <script src="../../../public/js/pantalla_principal.js"></script>
            <script src="../../../public/js/administrador/doctor/lista_doctores_completo.js"></script>
            <script src="../../../public/js/alerta.js"></script>
        </>
    )
}
