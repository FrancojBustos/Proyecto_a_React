import React from 'react'
import { Button_Aside } from '../Components/admin/HeaderAdmin/Button_Aside'
import { NavHeader } from '../Components/admin/HeaderAdmin/NavHeader'
import { ListaDoctoresCompleta } from '../Components/Doctor/ListaDoctoresCompleta'
import { FooterAdministrador } from '../Components/admin/FooterAdministrador'

const AppListaDoctoresCompleta = () => {
    return (
        <>
            <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
                <Button_Aside />
                <main className="container-fluid m-0 p-0">
                    <div className="d-flex">
                        <NavHeader />
                        <ListaDoctoresCompleta />
                    </div>
                </main>
                <FooterAdministrador />
            </div>
        </>
    )
}

export default AppListaDoctoresCompleta