

import '../public/styles/pantalla_principal.css'
import '../public/styles/estilo_tablas.css'
import AppCrearDoctor from './Apps/administrador/Doctor/AppCrearDoctor'
import AppEditarDoctor from './Apps/administrador/Doctor/AppEditarDoctor'
import AppListaDoctores from './Apps/administrador/Doctor/AppListaDoctores'
import AppListaDoctoresCompleta from './Apps/administrador/Doctor/AppListaDoctoresCompleta'



function App() {

  return (
    <>
      <AppListaDoctoresCompleta />
    </>
  )
}

export default App
