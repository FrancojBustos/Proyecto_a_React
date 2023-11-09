import { FooterAdministrador } from "../../admin/FooterAdministrador"
import { Button_Aside } from "../../admin/HeaderAdmin/Button_Aside"
import { NavHeader } from "../../admin/HeaderAdmin/NavHeader"
import { ListaEspecialidad } from "../../especialidad/ListaEspecialidad"

const AppListaEspecialidad = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className="d-flex">
                        <NavHeader />
                        <ListaEspecialidad />
                    </div>
                </main>
                <FooterAdministrador />
            </div>

        </>
    )
}

export default AppListaEspecialidad