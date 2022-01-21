import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const [id, setId] = useState("");
    const [choice, setChoice] = useState("");
    const history = useHistory();

    const sendForm = (e) => {
        e.preventDefault();
        // do something with the data
        history.push("/" + choice + "/" + id);
    }

    const handleChoice = (e) => {
        setChoice(e.target.value);
    }

    return (
        <form onSubmit={sendForm}>
            <select value={choice} onChange={e => setChoice(e.target.value)}>
                <option value="">Please select a value</option>
                <option key="People" value="People">People</option>
                <option key="Planets" value="Planets">Planets</option>
                {/* console.log(choice) */}
            </select>
            
            <label>ID:</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;