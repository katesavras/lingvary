import React, {useState} from "react";
import {Button} from "../UI/Button";
import {NewWordForm} from "./NewWordForm";
import {Words} from "./Words";

export const Dictionary = () => {
    const [isFormOpened, setIsFormOpened] = useState(false);

    const openFormHandler = () => {
        setIsFormOpened(true);
    }

    const closeFormHandler = () => {
        setIsFormOpened(false);
    };

    return (
        <div>
           <Button label='Add word' onClick={openFormHandler}/>
            {isFormOpened && <NewWordForm onFormClose={closeFormHandler} />}
            <Words/>
        </div>
    )
}