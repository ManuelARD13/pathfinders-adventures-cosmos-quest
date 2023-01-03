import React from "react";

function ClassesSelector({ setSelectionStage, raze, gender, useSelectClass }) {
    return (
        <>
        <div>hola
            {
               gender === "male" ? 
                raze.availableClasses.male.map((pClass) => 
                    <>
                        <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                        <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className}></img></label>
                    </>
                ) 
                 :
                raze.availableClasses.female.map((pClass) => 
                    <>
                        <label className="classesLabels" htmlFor={pClass.className} id={`${pClass.className}Label`} onClick={useSelectClass}><img src={pClass.classIcon} alt={pClass.className} id={pClass.className} /></label>
                        <input type="radio" name="classes" className="classSelectors" id={pClass.className} />
                    </>
                )
            }
            <input type="button" className="continueButton" value="Comfirm Selections" onClick={() => setSelectionStage("razes")} />
        </div>
        <div>
          <p>class Descrtition</p>
          <p>
            An elf (pl: elves) is a type of humanoid supernatural being in Germanic mythology and folklore (especially North Germanic mythology and folklore). In medieval Germanic-speaking cultures, elves generally seem to have been thought of as beings with magical powers and supernatural beauty, ambivalent towards everyday people and capable of either helping or hindering them.[1] However, the details of these beliefs have varied considerably over time and space and have flourished in both pre-Christian and Christian cultures.
          </p>
        </div>
        </>
    )
}

export { ClassesSelector }