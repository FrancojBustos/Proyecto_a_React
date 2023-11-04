import { FooterAdministrador } from "../admin/FooterAdministrador"
import { Button_Aside } from "../admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../admin/HeaderAdmin/NavHeader"
import { EditarDoctor } from "./EditarDoctor"

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