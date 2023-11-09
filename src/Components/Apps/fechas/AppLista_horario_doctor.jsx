import { FooterAdministrador } from "../../admin/FooterAdministrador"
import { Button_Aside } from "../../admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../../admin/HeaderAdmin/NavHeader"
import { Lista_horario_doctor } from "../../fechas/lista_horario_doctor"

const AppLista_horario_doctor = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className='d-flex'>
                        <NavHeader />
                        <Lista_horario_doctor />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppLista_horario_doctor