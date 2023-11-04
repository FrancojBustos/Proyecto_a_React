import { Button_Aside } from "../Components/admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../Components/admin/HeaderAdmin/NavHeader"
import { CrearDoctor } from "../Components/Doctor/CrearDoctor"
import { FooterAdministrador } from "../Components/admin/FooterAdministrador"

const AppCrearDoctor = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1" >
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className="d-flex">
                        <NavHeader />
                        <CrearDoctor />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppCrearDoctor
