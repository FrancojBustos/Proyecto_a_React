
export const NavHeader = () => {
    return (
        <>
            <nav
                className="responsive"
                style={{ background: 'linear-gradient:100deg,rgba(4, 0, 61, 0.945),70%,rgba(0, 0, 138, 0.9)' }}
                id="admin"
            >
                <div
                    className="d-flex flex-column a flex-shrink-0 px-3"
                    style={{ width: '240px', height: '100vh', display: 'none' }}

                >
                    <a
                        href="/administrador"
                        className="d-flex align-items-center text-white text-decoration-none border-bottom py-2"
                    >
                        <img
                            src="/img/inicio_sesion/logo.png"
                            alt="logo.png"
                            width="70px"
                        />
                        <span className="fs-4">San Antonio</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item py-1">
                            <a
                                href="/lista_pacientes_completos"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <i className="fa fa-wheelchair mx-1" aria-hidden="true"></i>
                                Lista de Pacientes
                            </a>
                        </li>
                        <li className="nav-item py-1">
                            <a
                                href="/crear_paciente"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true"></i>
                                Agregar Paciente
                            </a>
                        </li>
                        <li className="nav-item py-1">
                            <a
                                href="/lista_doctores_completo"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <i className="fa fa-user-md mx-1" aria-hidden="true"></i>
                                Lista de Doctores
                            </a>
                        </li>
                        <li className="nav-item py-1">
                            <a
                                href="/crear_doctor"
                                className="nav-link text-white"
                                aria-current="page"
                            >
                                <i className="fa fa-stethoscope mx-1" aria-hidden="true"></i>
                                Agregar Doctor
                            </a>
                        </li>
                        <li className="nav-item text-center">
                            <a
                                href="/"
                                className="text-white btn btn-primary"
                            >
                                Cerrar Sesion
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
