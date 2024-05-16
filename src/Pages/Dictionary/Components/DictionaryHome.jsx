import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { getMeaning } from "../../../Services/DictionaryServices";
import { addWord } from "../../../Redux/dictionarySlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import "./CSS/DictionaryHome.css";

const DictionaryHome = ({loggedInUser}) => {
    const words = useSelector(state => state.dictionary);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState("");

    const searchMeaning = async () => {
        if(searchText.trim() !== '') {
            const response = await getMeaning(searchText);
            response?.forEach(item => {
                dispatch(addWord(item));
            });
        }
    };

    return (
        <div className="dictionary-home-container">
            <Navbar loggedInUser={loggedInUser} />
            <div className="content-body">
                <div className="search-container">
                    {/* <pre>{JSON.stringify(loggedInUser, null, 2)}</pre> */}
                    <TextField id="outlined-basic" label="Enter Word" variant="outlined" onChange={(e) => setSearchText(e.target.value)} />
                    <Button disabled={searchText.trim() === ''} className="search-btn " color="warning" variant="contained" onClick={searchMeaning}>Search</Button>
                </div>
                <div className="result-container">
                    {/* <div style={{width: "10rem"}}>{JSON.stringify(words)}</div> */}
                </div>
            </div>
        </div>
    );
}
export default DictionaryHome;