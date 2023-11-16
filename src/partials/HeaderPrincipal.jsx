import React from 'react'

export const HeaderPrincipal = () => {
    return (
        <>
            {/* <html lang="en"> */}
            {/* <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Sistema Turnos</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                    crossorigin="anonymous"
                />
                <link rel="stylesheet" href="styles/inicio_sesion.css" />
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            </head> */}
            {/* <body> */}
            <header className="container-fluid">
                <nav
                    className="navbar navbar-expand-lg bg-body-tertiary rounded"
                    aria-label="Thirteenth navbar example"
                >
                    <div className="container-fluid text-center">
                        <a className="navbar-brand col-lg-4 me-0 h1 text-center" href="/"
                        ><img
                                src="img/inicio_sesion/logo.png"
                                alt="logo centro de atencion"
                                width="40px"
                            />
                            San Antonio</a
                        >
                        <button
                            className="navbar-toggler collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarsExample11"
                            aria-controls="navbarsExample11"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse d-lg-flex collapse" id="navbarsExample11">
                            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                                <li className="nav-item justify-content-center">
                                    <p className="">0810-222-333</p>
                                    <p className="">Lunes a Domingos - 7:00hs a 19:00hs</p>
                                </li>
                            </ul>
                            <div className="d-lg-flex col-lg-4 justify-content-lg-end">
                                <button className="btn btn-primary m-1">Ayuda</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
