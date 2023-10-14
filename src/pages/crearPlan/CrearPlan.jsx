import '../../styles/pages.css'
import {DayPage,NavBarDay} from './components'
import PlanProvider from './context/PlanProvider'

export function CrearPlan() {
  return (
    <PlanProvider>
      <div>
        <p>Nombre del Paciente</p>
        <p>Data configurable (macros)</p>
        <p> Lunes | Martes | Miercoles   - COMPONENTE Selector de dias (simulara ser parte de la pag el seleccionado)</p>
        <NavBarDay/>
        <DayPage/>
      </div>
    
    </PlanProvider>
  )
}
