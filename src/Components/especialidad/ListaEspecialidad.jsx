import React from 'react'

export const ListaEspecialidad = () => {
    return (
        <>
            <section className="w-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div
                    className="p-5 text-white fs-5"
                    style={{ height: '1px', background: 'rgb(0, 4, 41)' }}
                >
                    Listado de Especialidades
                </div>

                <div
                    className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between"
                >
                    <form id="formNuevaEspecialidad">
                        <div className="d-flex">
                            <input type="text" className="form-control" id="descripcion_especialidad" placeholder="Ej: Odontólogo" required />
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                    <form id="buscador">
                        <div className="d-flex">
                            <input type="text" className="form-control" id="dniInput" />
                            <button className="btn btn-secondary">Buscar</button>
                        </div>
                    </form>
                </div>

                <div className="main-table shadow m-5 bg-body rounded border">
                    <table className="table table-striped rounded text-center">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Nombre Especialidad</th>
                                <th scope="col">Funciones</th>
                            </tr>
                        </thead>
                        <tbody
                            className="d-flex-reverse align-items-center justify-content-center"
                            id="listaEspecialidad"
                        ></tbody>
                    </table>
                </div>
            </section>

            <script src="../../../public/js/pantalla_principal.js"></script>
            <script src="../../../public/js/administrador/especialidad/crear.js"></script>
            <script src="../../../public/js/administrador/especialidad/lista_especialidades.js"></script>
        </>
    )
}
