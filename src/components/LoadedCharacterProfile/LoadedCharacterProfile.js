import React from "react";
import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";

import "./LoadedCharacterProfile.css"

function LoadedCharacterProfile({ character, setScreen }) {
    /*TODO: Combine this component with CharacterProfile and add it to DisplayScreen */
    return(
        <section className="loadedCharacterProfile" style={{backgroundImage: `url(${character.raze.razeBKImg})`}}>
            <h2>{character.characterName}</h2>
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
                <p>Hit Points: {character.characterClass.hitPoints}</p>
                <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => setScreen("Greetings")} />
            </div>
            <div className="displayImgContainer">
                <CharacterImgDisplay characterImg={character.characterImg}/>
            </div>
            <div className="characterSkillsInfo">
            <img src={character.characterClass.classIcon} alt={character.characterClass.className + " Logo"}/>
                <h4 id="selectedClassName">{character.characterClass.className}</h4>
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