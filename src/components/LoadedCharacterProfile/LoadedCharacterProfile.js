import React, { useContext, useEffect } from "react";
import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";

import "./LoadedCharacterProfile.css"
import { SelectorsContext } from "../../context/SelectorsCtx";

function LoadedCharacterProfile() {

    const { character, dispatch ,setScreen } = useContext(SelectorsContext)
    useEffect(() => {
        dispatch({
            type: "SET_IMG",
            payload: character.img
        })
    }, [character.img, dispatch])
    /*TODO: Combine this component with CharacterProfile and add it to DisplayScreen */
    return(
        <section className="loadedCharacterProfile" style={{backgroundImage: `url(${character.raze.razeBKImg})`}}>
            <h2>{character.name}</h2>
            <div className="characterGeneralInfo">
                <p className="selectedCharacterGender">{character.gender}</p>
                <p className="selectedCharacterRazeTittle">{character.raze.razeName}</p>
                <p>Attributes</p>
                <ul>
                    <li>{"CON: " + character.stats.CON}</li>
                    <li>{"STR: " + character.stats.STR}</li>
                    <li>{"DEX: " + character.stats.DEX}</li>
                    <li>{"INT: " + character.stats.INT}</li>
                    <li>{"WIS: " + character.stats.WIS}</li>
                    <li>{"CHA: " + character.stats.CHA}</li>
                </ul>
                <p>Height: {character.stats.characterHeight}</p>
                <p>Weight: {90 + " Pounds"}</p>
                <p>Hit Points: {character.cClass.hitPoints}</p>
                <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => setScreen("Acknoledgements")} />
            </div>
            <div className="displayImgContainer">
                <CharacterImgDisplay />
            </div>
            <div className="characterSkillsInfo">
            <img src={character.cClass.classIcon} alt={character.cClass.className + " Logo"}/>
                <h4 id="selectedClassName">{character.cClass.className}</h4>
                <p className="characterLore">
                    {character.raze.razeLore}
                </p>
                <h4>Skills</h4>
                <p id="razeSkills"></p>
                <ul>
                    <li>Skill 1</li>
                    <li>Skill 1</li>
                    <li>Skill 1</li>
                    <li>Skill 1</li>
                </ul>
            </div>
        </section>
    )
}

export { LoadedCharacterProfile }

//Combine this component with CharaterProfile component. NO OTHER CHOICE Img issues