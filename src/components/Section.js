import React from "react";
import Button from "./Button";

function Section(props) {
    const {name, onClick, value} = props

    // Emoji-picker
    let fruit = undefined;
    switch (name){
        case "strawberry": fruit = "🍓"; break;
        case "banana": fruit = "🍌"; break;
        case "apple": fruit = "🍏"; break;
        case "kiwi": fruit = "🥝"; break;
    }
  
    return(
        <section>
            <p>{fruit}{name}</p>
            <Button
                name={name}
                onClick={onClick}
                value={value}
            >-
            </Button>
            <p>{value}</p>
            <Button
                name={name}
                onClick={onClick}
                value={value}
            >+
            </Button>
        </section>

    )
}

export default Section