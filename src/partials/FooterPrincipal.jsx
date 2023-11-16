import React from 'react'

export const FooterPrincipal = () => {
    return (
        <>
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <a href="/"><img src="img/inicio_sesion/logo.png" alt="" width="80px" /></a>
                        </a>
                        <span class="mb-3 mb-md-0 text-body-secondary">© 2023 San Antonio, Centro de Atención</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#twitter"></use></svg>Facebook</a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#instagram"></use></svg>Twitter</a></li>
                        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink: href="#facebook"></use></svg>Instagram</a></li>
                    </ul>
                </footer>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"
            ></script>

            {/* </body>
            </html> */}

        </>
    )
}
