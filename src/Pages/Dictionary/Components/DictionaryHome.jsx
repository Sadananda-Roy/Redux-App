import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { getMeaning } from "../../../Services/DictionaryServices";
import { addWord, resetDictionary } from "../../../Redux/dictionarySlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import "./CSS/DictionaryHome.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DefinitionCard from "./DefinitionCard";

const DictionaryHome = ({loggedInUser}) => {
    const words = useSelector(state => state.dictionary);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    const searchMeaning = async () => {
        dispatch(resetDictionary());
        if(searchText.trim() !== '') {
            const response = await getMeaning(searchText);
            response?.forEach(item => {
                dispatch(addWord(item));
            });
            setSearchText("");
        }
    };

    return (
        <div className="dictionary-home-container">
            <Navbar loggedInUser={loggedInUser} />
            <div className="content-body">
                <div className="search-container">
                    <TextField id="outlined-basic" value={searchText} label="Enter Word" variant="outlined" onChange={(e) => setSearchText(e.target.value)} />
                    <Button disabled={searchText.trim() === ''} className="search-btn " color="warning" variant="contained" onClick={searchMeaning}>Search</Button>
                </div>
                {words && 
                <div className="result-container">
                    <Typography className="title">{words[0]?.word}</Typography>
                    <Grid2 container rowSpacing={5} columnSpacing={5} className="cards-container">
                        {words[0]?.meanings.map(partOfSpeechItem => <Grid2 className="" xs={4}><DefinitionCard partOfSpeechItem={partOfSpeechItem} /></Grid2>)}
                    </Grid2>
                </div>}
            </div>
        </div>
    );
}
export default DictionaryHome;