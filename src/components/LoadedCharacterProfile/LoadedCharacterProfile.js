import React from "react";
import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";

function LoadedCharacterProfile({ character, setScreen }) {
    console.log(character)
    return(
        <section>
            <div id="characterGeneralInfo">
                <p id="selectedCharacterGender">{character.gender}</p>
                <p id="selectedCharacterRazeTittle">{character.raze.razeName}</p>
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
            <div>
                <h4>{character.name}</h4>
                <CharacterImgDisplay characterImg={character.characterImg}/>
            </div>
            <div id="characterSkillsInfo">
                <h4 id="selectedClassName">{character.characterClass.className}</h4>
                <p id="characterLore">
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