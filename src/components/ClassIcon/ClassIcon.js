import { useState, useEffect ,useContext } from "react"
import { SelectorsContext } from "../../context/SelectorsCtx"

function ClassIcon({ totalScores, pClass }) {

  const { setTotalScores, useSelectClass } = useContext(SelectorsContext)
  const [ isSelectableIcon, setSelectableIcon] = useState(true)

  useEffect(() => {

    let requisites = 0

    for (const [key, value] of Object.entries(totalScores)){
        for (const [classKey, classValue] of Object.entries(pClass.classRequirements)){
            if(key === classKey) {
                if(value >= classValue) {
                    requisites++
                }
            }   
        }

      if(requisites === 2) {
          setSelectableIcon(true)
      } else {
          setSelectableIcon(false)
      }
    }
  
  }, [totalScores, pClass])

  return (
    <div className="classContainer">
      <input type="radio" name="classes" className="classSelectors" id={pClass.className}
        onClick={() => setTotalScores(totalScores)}
      />
      <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`}
        onClick={useSelectClass}
      >
        <img src={pClass.classIcon} alt={pClass.className} id={pClass.className} style={ !isSelectableIcon
         ? {filter: "grayscale(100%)"} : {} } >
        </img>
      </label>
      <p>{pClass.className}</p>
    </div>
  )
}

export { ClassIcon }