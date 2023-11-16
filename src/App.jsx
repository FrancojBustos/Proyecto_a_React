

import '../public/styles/pantalla_principal.css'
import '../public/styles/estilo_tablas.css'
import { HeaderPaciente } from './partials/HeaderPaciente'
import AppAtenderPaciente from './Apps/doctor/AppAtenderPaciente'
import AppCrearDoctor from './Apps/administrador/Doctor/AppCrearDoctor'



function App() {

  return (
    <>
      <AppCrearDoctor />
    </>
  )
}

export default App
