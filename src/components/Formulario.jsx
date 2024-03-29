import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente }) => {

const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [fecha, setFecha] = useState('');
const [sintomas, setSintomas] = useState('');

const [error, setError] = useState(false)

// useEffect () para enviar a edicion del formulario
//Se comprueba si hay paciente y despues si hay regresa las funciones modificadoras de useState

useEffect(() => {
    if( Object.keys(paciente).length > 0 ){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }    
}, [paciente])

const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha
}

const handleSubmit = (e) => {
  e.preventDefault();

    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      setError(true)      
      return;
    }

    setError(false)

    //OBJETO PACIENTE
    const objetoPaciente ={
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id: generarId()
    }

    setPacientes([ ...pacientes, objetoPaciente ])

    //REINICIAR FORMULARIO, SOLAMENTE USANDO EL MODIFICADOR DE USE STATE

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }


  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center text-indigo-800">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded py-10 px-5 mb-10"
        >
          { error && <Error><p>Todos los campos son obligatorios</p></Error> }

          <div className="mb-5">
            <label htmlFor='mascota' className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
            <input
              id='mascota'
              type='text'
              placeholder='Nombre de la Mascota' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor='dueño' className="block text-gray-700 uppercase font-bold">Nombre del Dueño</label>
            <input
              id='dueño'
              type='text'
              placeholder='Nombre del dueño' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor='email' className="block text-gray-700 uppercase font-bold">Email</label>
            <input
              id='email'
              type='mail'
              placeholder='Ingrese su email' 
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor='fecha-alta' className="block text-gray-700 uppercase font-bold">Fecha de Cita</label>
            <input
              id='fecha-alta'
              type='date'
              className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
          </div>
          <div className="mb-5">
            <label htmlFor='notas-sintomas' className="block text-gray-700 uppercase font-bold">Notas</label>
            <textarea 
              id="notas-sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describa los síntomas"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>
          
          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
          />

        </form>
    </div>
  )
}

export default Formulario