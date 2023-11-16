import { FooterAdministrador } from "../../partials/admin/FooterAdministrador"
import { Button_Aside } from "../../partials/admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../../partials/admin/HeaderAdmin/NavHeader"
import { Crear_horario_doctor } from "../../Components/administrador/fechas/crear_horario_doctor"

const Appcrear_horario_doctor = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className='d-flex'>
                        <NavHeader />
                        <Crear_horario_doctor />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default Appcrear_horario_doctor