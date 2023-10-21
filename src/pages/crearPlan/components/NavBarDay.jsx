import { Link, useParams } from "react-router-dom";
import { addDay } from "./planPageReducerActions";

export function NavBarDay({days,distpatch}) {

  const {dayName} = useParams()

  console.log(days)

  return (
    //TODO:La cantidad de days sera un .map de lo que se extraiga de la DB segun los days existentes
    <div className="divDayNavBar">
        {days.map((day)=>{
          return(
            <div key={day.name} >
              <Link className={`dayBarItem  ${dayName==day.name?'daySelected':''}`} to={`./${day.name}`}>{day.name}</Link>
            </div>
          )
        })}
         <div className="addDayButton dayBarItem" type onClick={() => addDay(distpatch,'Dia 4')} >
          <p>+</p>
        </div>
    </div>
  )
}
