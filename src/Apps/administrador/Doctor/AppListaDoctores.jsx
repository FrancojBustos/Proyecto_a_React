import { Button_Aside } from "../../../partials/admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../../../partials/admin/HeaderAdmin/NavHeader"
import { FooterAdministrador } from "../../../partials/admin/FooterAdministrador"
import { ListaDoctores } from "../../../Components/administrador/doctor/ListaDoctores"
const AppListaDoctores = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className="d-flex">
                        <NavHeader />
                        <ListaDoctores />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppListaDoctores