// DE LA TORRE MALVADO TIENE SU COMPONENTE COMO 'PACIENTE.JSX' YO LO TENGO COMO 'PACIENTES.JSX'

const Pacientes = ({paciente, setPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas} = paciente

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre de la Mascota: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Dueño: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
            onClick={() => setPaciente(paciente)}
          >Editar</button>
            <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded"
          >Eliminar</button>
      </div>
    </div>
    
    )
}

export default Pacientes