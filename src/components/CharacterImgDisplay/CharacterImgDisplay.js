import React from "react";

function CharacterImgDisplay( { characterImg }) {
    return(
        <div className="displayImgContainer">
            <img src={!characterImg ? "https://i.imgur.com/aryfPBv.png" : characterImg} alt="Your Character" />
        </div>
    )
}

export { CharacterImgDisplay } 