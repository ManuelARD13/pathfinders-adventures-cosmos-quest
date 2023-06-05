import { useContext } from "react"
import { SelectorsContext } from "../../context/SelectorsCtx"

function ClassIcon({ totalScores, pClass }) {

  const { setTotalScores, useSelectClass } = useContext(SelectorsContext)

  return (
    <div className="classContainer">
      <input type="radio" name="classes" className="classSelectors" id={pClass.className}
        onClick={() => setTotalScores(totalScores)}
      />
      <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`}
        onClick={useSelectClass}
      >
        <img src={pClass.classIcon} alt={pClass.className} id={pClass.className}>
        </img>
      </label>
      <p>{pClass.className}</p>
    </div>
  )
}

export { ClassIcon }