import React from "react";

function CharacterImgDisplay( { characterImg }) {
    return(
        <div>
            <img src={characterImg} alt="Your Character" />
        </div>
    )
}

export { CharacterImgDisplay } 