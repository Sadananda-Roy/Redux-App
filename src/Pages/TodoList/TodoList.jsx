import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, editTodo, saveEditedTodo} from "../../Redux/todoSlice"
import "./TodoList.css";
//Component Inputs
// import TextField from '@mui/material/TextField';
import { Button, Checkbox, IconButton, Box, TextField, Grid } from "@mui/material";
// import Box from '@mui/material/Box';
// Icons 
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PublishIcon from '@mui/icons-material/Publish';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const TodoList = () => {
    const todos = useSelector(state => state.todos) //name of slice
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [editedInput, setEditedInput] = useState([]);

    const handleAddTodo = () => {
        if(inputValue.trim() !== "") {
            dispatch(addTodo(inputValue));
            setInputValue("");
        }
    };

    const handleCheckboxChange = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleEdit = (id, text, index) => {
        let arr = [...editedInput];
        arr[index] = text;
        setEditedInput(arr);
        dispatch(editTodo(id));
    };

    const handleEditInputChange = (e, index) => {
        let arr = [...editedInput];
        arr[index] = e.target.value;
        setEditedInput(arr);
    };
    const saveEditedInput = (id, index) => {
        const textToSubmit = editedInput[index];
        dispatch(saveEditedTodo({id: id, text: textToSubmit}));
        dispatch(editTodo(id));
    }

    return (
        <div className="todolist_container">
            <div><h1>Todo List</h1></div>
            <div>
                <TextField id="outlined-basic" label="New Task" variant="outlined" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
            <div className="button_container">
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} onClick={handleAddTodo}>
                    Add
                </Button>
            </div>
            <div className="item_list">{
                todos.map((item, index) => (
                    <div key={item.id}>
                        {/* Not editing state  */}
                        {!item.isEdit &&
                        <Grid container spacing={3} style={{display: "flex", alignItems: "center", borderBottom: "1px solid black", padding: "0.5em 2em"}}>
                            <Grid item xs={1}>
                                <Checkbox
                                checked={item.completed}
                                onChange={() => handleCheckboxChange(item.id)}
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <span>{item.text}</span>
                            </Grid>
                            <Grid item xs={1}>
                                <span> 
                                    <IconButton onClick={() => handleEdit(item.id, item.text, index)} aria-label="delete" color="primary">
                                        <EditNoteIcon />
                                    </IconButton>
                                </span>
                            </Grid>
                            <Grid item xs={1}>
                                <span>
                                    <IconButton onClick={() => handleDelete(item.id)} aria-label="delete" color="error">
                                        <DeleteIcon />
                                    </IconButton>
                                </span>
                            </Grid>
                        </Grid>}
                        {/* Editing State      */}
                        {item.isEdit &&
                            <Grid container spacing={3} style={{display: "flex", alignItems: "center", borderBottom: "1px solid black", padding: "0.5em 0em", justifyContent: "center"}}>
                                <Grid item xs={9}>
                                    <TextField id="outlined-basic" label="New Task" variant="outlined" value={editedInput[index]} onChange={(e) => handleEditInputChange(e, index)} style={{marginTop: "1em", width: "100%"}} />
                                </Grid>
                                <Grid item xs={3}>
                                    <Button variant="contained" startIcon={<PublishIcon />} onClick={() => saveEditedInput(item.id, index)} color="success" size="small">
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList