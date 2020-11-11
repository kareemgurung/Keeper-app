import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";

function CreateNote() {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {

        const {name, value} = event.target;
        setInputText(prevValue => {
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    return (
        <div>
            <form className="create-note">
                <input  onChange={handleChange} type="text" name="title" placeholder="title"/>
                <textarea  onChange={handleChange} name="content" placeholder="content" rows="3"></textarea>
                <button>
                    <AddIcon />
                </button>
            </form>
        </div>
    );
}

export default CreateNote;