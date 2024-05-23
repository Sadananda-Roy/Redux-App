import { useState } from "react";
import { Backdrop, Button, CircularProgress, Collapse, TextField, Typography, Zoom } from "@mui/material";
import { getMeaning } from "../../../Services/DictionaryServices";
import { addWord, resetDictionary, addSearchedWord } from "../../../Redux/dictionarySlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import "./CSS/DictionaryHome.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import DefinitionCard from "./DefinitionCard";

const DictionaryHome = ({loggedInUser}) => {
    const dictionary = useSelector(state => state.dictionary);
    const dispatch = useDispatch();
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchText, setSearchText] = useState("");

    const searchMeaning = async () => {
        setSearchLoader(true);
        dispatch(resetDictionary());
        if(searchText.trim() !== '') {
            const response = await getMeaning(searchText);
            response?.forEach(item => {
                dispatch(addWord(item));
            });
            setSearchText("");
            dispatch(addSearchedWord(searchText));
            setSearchLoader(false);
        }
    };

    const onBadgeClick = async(text) => {
        dispatch(resetDictionary());
        if(text.trim() !== '') {
            const response = await getMeaning(text);
            response?.forEach(item => {
                dispatch(addWord(item));
            });
        }
    } 

    return (
        <div className="dictionary-home-container">
            <Navbar loggedInUser={loggedInUser} />
            <div className="content-body">
                <div className="search-container">
                    <TextField id="outlined-basic" value={searchText} label="Enter Word" variant="outlined" onChange={(e) => setSearchText(e.target.value)} />
                    <Button disabled={searchText.trim() === ''} className="search-btn " color="warning" variant="contained" onClick={searchMeaning}>Search</Button>
                </div>
                {dictionary.words && 
                <div className="result-container">
                    {dictionary?.searchedWords.length > 1 &&
                        <div className="last-searched-words-container">Last searched: {[...dictionary?.searchedWords].map((item,index) => <div style={{display: index === dictionary.searchedWords.length - 1 ? "none" : ""}} className="last-searched-word"><div className="searched-word-badge" onClick={() => onBadgeClick(item)} >{item}</div></div>)}</div>
                    }
                    <Typography className="title">{dictionary.words[0]?.word}</Typography>
                    <Grid2 container rowSpacing={5} columnSpacing={5} className="cards-container">
                        {dictionary.words[0]?.meanings.map(partOfSpeechItem => <Grid2 className="" xs={4}><DefinitionCard partOfSpeechItem={partOfSpeechItem} /></Grid2>)}
                    </Grid2>
                </div>}
            </div>

            <Backdrop
                sx={{ color: '#fff'}}
                open={searchLoader}
                onClick={() => setSearchLoader(false)}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
export default DictionaryHome;