import React from 'react'
import { Button_Aside } from '../../../partials/admin/HeaderAdmin/Button_Aside'
import { NavHeader } from '../../../partials/admin/HeaderAdmin/NavHeader'
import { EditarEspecialidad } from '../../../Components/administrador/especialidad/EditarEspecialidad'
import { FooterAdministrador } from '../../../partials/admin/FooterAdministrador'

const AppEditarEspecialidad = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className='d-flex'>
                        <NavHeader />
                        <EditarEspecialidad />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppEditarEspecialidad