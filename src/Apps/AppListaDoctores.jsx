import React from 'react'
import { Button_Aside } from '../Components/admin/HeaderAdmin/Button_Aside'
import { NavHeader } from '../Components/admin/HeaderAdmin/NavHeader'

import { FooterAdministrador } from '../Components/admin/FooterAdministrador'
import { ListaDoctores } from '../Components/Doctor/ListaDoctores'

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