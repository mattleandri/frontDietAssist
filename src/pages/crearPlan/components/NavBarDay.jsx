import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteModal from "./DeleteModal";
import TituloEditable from "./TituloEditable";


export function NavBarDay({days,dayActions}) {

  const {dayName} = useParams()
  const location = useLocation()
  const [showDeleteModal,setShowDeleteModal] = useState(false)

  
  console.log()

  return (
    <>
      {showDeleteModal?<DeleteModal name={showDeleteModal} setShowDeleteModal={setShowDeleteModal} confirmDelete={dayActions.deleteDay} />:null}
      <div className="divDayNavBar">
        
          {days.map((day)=>{

            let selected = false
            day.name == dayName? selected=true:null

            return(
              <div key={day.name}>
                <Link 
                
                className={`dayBarItem  ${selected?'daySelected':''}`} 
                onClick={ (e) => {localStorage.setItem('lastDay',day.name); if(selected)e.preventDefault()}}
                to={`./${day.name}`}
                >
                  <div className="dayBarItemInside">
                    <TituloEditable name={day.name} type="p" clase = 'dayName' setName={dayActions.setDayName} conditions={[selected] } />
                    {dayName == day.name &&(<>
                      <i onClick={()=>setShowDeleteModal(day.name)} className='bx bx-x dayBarTrash'></i>
                    </>)
                    }
                    
                  </div>
                </Link>
              </div>
            )
          })}
          <div className="addDayButton dayBarItem"  onClick={() => dayActions.addDay() } >
            <p>+</p>
          </div>
      </div>
    </>
  )
}
