import React from "react";
import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";

function CharacterProfile ( { characterName, gender, raze, characterClass, characterImg, characterStats, setScreen, savedCharacters } ) {

    const createPlayerId = () => 
        "00" + Math.floor(Math.random() * 100)
      

    const createNewCharacterObj = (characterName, gender, raze, characterClass, characterImg, stats) => ({

        playerId: createPlayerId(),
        characterName: characterName,
        gender: gender,
        raze: raze,
        characterClass: characterClass,
        characterImg: characterImg,
        stats: stats,
    })

    const finishCharacterProcess = () => {
        let usersCharacter = createNewCharacterObj(characterName, gender, raze, characterClass, characterImg, characterStats)
        console.log(usersCharacter)
        saveCharacter(usersCharacter)
        setScreen("Greetings")
    }

    const saveCharacter = (character) => {
        savedCharacters.push(character)
        let parsedSavedCharacters = JSON.stringify(savedCharacters)
        localStorage.setItem("savedCharacters_V1", parsedSavedCharacters)
    }

    return (
        <section>
            <div id="characterGeneralInfo">
                <p id="selectedCharacterGender">{gender}</p>
                <p id="selectedCharacterRazeTittle">{raze.razeName}</p>
                <p>Attributes</p>
                <ul>
                    <li>{"CON: " + characterStats.CON}</li>
                    <li>{"STR: " + characterStats.STR}</li>
                    <li>{"DEX: " + characterStats.DEX}</li>
                    <li>{"INT: " + characterStats.INT}</li>
                    <li>{"WIS: " + characterStats.WIS}</li>
                    <li>{"CHA: " + characterStats.CHA}</li>
                </ul>
                <p>Height: {characterStats.characterHeight}</p>
                <p>Weight: {90 + " Pounds"}</p>
                <p>Hit Point: {characterClass.hitPoints}</p>

                <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => finishCharacterProcess(characterName, gender, raze, characterClass, characterImg)} />
            </div>
            <div>
                <h4>{characterName}</h4>
                <CharacterImgDisplay characterImg={characterImg}/>
            </div>
            <div id="characterSkillsInfo">
                <h4 id="selectedClassName">{characterClass.className}</h4>
                <p id="characterLore">
                    {raze.razeLore}
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

export { CharacterProfile } 