import './App.css'
import Formulario from './components/Formulario'
import Header from './components/header'
import ListadoPacientes from './components/ListadoPacientes'

import { useState } from 'react'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <div className='container mx-auto mt-20'>
      <Header />
    <div className='mt-12 md:flex'>
      <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
      />
      <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
      />
    </div>

    </div>
  )
}

export default App
