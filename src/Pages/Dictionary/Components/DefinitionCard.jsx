import { Card } from "@mui/material";
import React from "react";

const DefinitionCard = ({partOfSpeechItem}) => {
    return (
        <Card variant="outlined" style={{ height: "15rem", overflowY: "auto", padding: "1rem", backgroundColor: "#00ADB5", borderRadius: "1rem"}}>
            <h1 style={{textTransform: "capitalize"}}>{partOfSpeechItem.partOfSpeech}</h1>
            <ul style={{textAlign:"left"}}>{
                partOfSpeechItem.definitions.map(definition => <li>{definition.definition}</li>)}
            </ul>
        </Card>
    );
}

export default DefinitionCard;