import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { authDictionary } from "../../Chat/Firebase";
import Navbar from "./Navbar";
import "./CSS/DictionaryHome.css";
import { getMeaning } from "../../../Services/DictionaryServices";

const DictionaryHome = ({loggedInUser}) => {
    const [searchText, setSearchText] = useState("");

    const searchMeaning = () => {
        getMeaning(searchText);
    }

    return (
        <div className="dictionary-home-container">
            <Navbar loggedInUser={loggedInUser} />
            <div className="content-body">
                <div className="search-container">
                    {/* <pre>{JSON.stringify(loggedInUser, null, 2)}</pre> */}
                    <TextField id="outlined-basic" label="Enter Word" variant="outlined" onChange={(e) => setSearchText(e.target.value)} />
                    <Button className="search-btn " color="warning" variant="contained" onClick={searchMeaning}>Search</Button>
                </div>
            </div>
        </div>
    );
}
export default DictionaryHome;