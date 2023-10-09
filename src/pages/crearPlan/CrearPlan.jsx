import '../../styles/pages.css'
import {DayPage} from './components'
import PlanProvider from './context/PlanProvider'

export function CrearPlan() {
  return (
    <PlanProvider>
      <h1>Nombre del Paciente</h1>
      <h2>Data configurable (macros)</h2>
      <p> Lunes | Martes | Miercoles   - COMPONENTE Selector de dias (simulara ser parte de la pag el seleccionado)</p>
     <DayPage/>
    </PlanProvider>
  )
}
