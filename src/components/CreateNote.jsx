import React, {useState} from 'react';
import AddIcon from "@material-ui/icons/Add";

function CreateNote(props) {

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
            };
        });
        
    }

    function submitNote(event) {
        
        props.addNote(inputText);
        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();
    
    }

    return (
        <div>
            <form className="create-note">
                <input  onChange={handleChange} name="title" placeholder="title" value={inputText.title}/>
                <textarea  onChange={handleChange} name="content" placeholder="content" rows="3" value={inputText.content}></textarea>
                <button>
                    <AddIcon 
                        onClick={submitNote}
                    />
                </button>
            </form>
        </div>
    );
}

export default CreateNote;