import { Button_Aside } from '../../../partials/admin/HeaderAdmin/Button_Aside'
import { FooterAdministrador } from '../../../partials/admin/FooterAdministrador'
import { NavHeader } from '../../../partials/admin/HeaderAdmin/NavHeader'
import { CrearDoctor } from '../../../Components/administrador/doctor/CrearDoctor'

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
