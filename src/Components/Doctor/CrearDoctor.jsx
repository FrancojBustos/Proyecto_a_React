import React from 'react'


export const CrearDoctor = () => {
    return (
        <>

            {/* falta el header y footer */}
            <section className="w-100" style={{ backgroundColor: 'rgb(240, 240, 240)' }}>
                <div className="p-5" style={{ height: '1px', background: 'rgb(0, 4, 41)' }}></div>

                <div className="container px-4 py-1">
                    <form className="p-1 p-md-4" id="formNuevoDoctor">
                        <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
                            <p className="fs-5">
                                <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Agregar
                                Doctor
                            </p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
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
                            <div className="form-floating m-2 inputForm">
                                <select
                                    name="sexo"
                                    id="sexo"
                                    className="form-select border-secondary"
                                    aria-label="Sexos"
                                    required
                                >
                                    <option value="#">Elegir el Sexo</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otros</option>
                                </select>
                            </div>

                            <div className="form-floating m-2 inputForm">
                                <select
                                    name="especialidad"
                                    id="especialidad"
                                    className="form-select border-secondary"
                                    aria-label="Especialidad"
                                    required
                                >
                                    <option value="#">Seleccione Especialidad</option>
                                    <option value="1">Cardiologo</option>
                                </select>
                            </div>
                        </div>

                        <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
                            <p className="fs-5">Cuenta</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="text"
                                    className="form-control border-secondary"
                                    id="nombre_usuario"
                                    placeholder="3704332211"
                                    name="nombre_usuario"
                                    required
                                />
                                <label htmlFor="nombre_usuario">Nombre de Usuario</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="email"
                                    className="form-control border-secondary"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    required
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="form-floating m-2 inputForm">
                                <input
                                    type="password"
                                    className="form-control border-secondary"
                                    id="password"
                                    placeholder="3704332211"
                                    name="password"
                                    required
                                />
                                <label htmlFor="password">Contraseña</label>
                            </div>

                            <div className="form-floating m-2 inputForm mb-5">
                                <input
                                    type="password"
                                    className="form-control border-secondary"
                                    id="confirmPassword"
                                    placeholder="3704332211"
                                    name="confirmPassword"
                                    required
                                />
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                            </div>

                            <hr className="my-4" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <a href="/lista_doctores" className="btn btn-lg btn-secondary mx-2"
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
            <script src="../../../public/js/administrador/doctor/crear_doctor.js"></script>

        </>
    )
}
