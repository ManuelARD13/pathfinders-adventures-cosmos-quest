import React from "react";
import { CharacterImgDisplay } from "../CharacterImgDisplay/CharacterImgDisplay";
import { StatsList } from "../StatsList/StatsList";

import "./CharacterProfile.css"

function CharacterProfile ( { characterName, gender, raze, characterClass, characterImg, characterStats, setScreen, savedCharacters } ) {

    const createPlayerId = () => 
        "00" + Math.floor(Math.random() * 100)

    const createTimeStamp = () => new Date().toLocaleString()
      

    const createNewCharacterObj = (characterName, gender, raze, characterClass, characterImg, stats) => ({

        playerId: createPlayerId(),
        savedTimestamp: createTimeStamp(),
        characterName: characterName,
        gender: gender,
        raze: raze,
        characterClass: characterClass,
        characterImg: characterImg,
        stats: stats,
    })

    const finishCharacterProcess = () => {
        let usersCharacter = createNewCharacterObj(characterName, gender, raze, characterClass, characterImg, characterStats)
        saveCharacter(usersCharacter)
        setScreen("Greetings")
    }

    const saveCharacter = (character) => {
        savedCharacters.push(character)
        let parsedSavedCharacters = JSON.stringify(savedCharacters)
        localStorage.setItem("savedCharacters_V1", parsedSavedCharacters)
    }

    return (
        <section className="characterProfile" style={{backgroundImage: `url(${raze.razeBKImg})`}}>
            <h2>{characterName}</h2>
            <div className="characterGeneralInfo">
                <p id="selectedCharacterGender">{gender}</p>
                <p id="selectedCharacterRazeTittle">{raze.razeName}</p>
                <p>Attributes</p>
                <StatsList characterStats={characterStats} raze={raze} />
                {/* <ul>
                    <li>{"CON: " + characterStats.CON}</li>
                    <li>{"STR: " + characterStats.STR}</li>
                    <li>{"DEX: " + characterStats.DEX}</li>
                    <li>{"INT: " + characterStats.INT}</li>
                    <li>{"WIS: " + characterStats.WIS}</li>
                    <li>{"CHA: " + characterStats.CHA}</li>
                </ul> */}
                <p>Height: {characterStats.characterHeight}</p>
                <p>Weight: {90 + " Pounds"}</p>
                <p>Hit Point: {characterClass.hitPoints}</p>

                <input type="button" className="continueButton" value="Continue" id="continueProfile" onClick={() => finishCharacterProcess(characterName, gender, raze, characterClass, characterImg)} />
            </div>
            <div className="displayImgContainer">
                {/* <h4>{characterName}</h4> */}
                <CharacterImgDisplay characterImg={characterImg}/>
            </div>
            <div className="characterSkillsInfo">
                <img src={characterClass.classIcon} />
                <h4 id="selectedClassName">{characterClass.className}</h4>
                <p className="characterLore">
                    {raze.razeLore}
                </p>
                <h5>Skills</h5>
                <ul className="razeSkills">
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