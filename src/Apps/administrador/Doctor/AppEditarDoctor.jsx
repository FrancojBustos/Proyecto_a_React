import { NavHeader } from "../../../partials/admin/HeaderAdmin/NavHeader"
import { EditarDoctor } from "../../../Components/administrador/doctor/EditarDoctor"
import { FooterAdministrador } from "../../../partials/admin/FooterAdministrador"
import { Button_Aside } from "../../../partials/admin/HeaderAdmin/Button_Aside"

const AppEditarDoctor = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className="d-flex">
                        <NavHeader />
                        <EditarDoctor />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppEditarDoctor