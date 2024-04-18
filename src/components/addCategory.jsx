import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');
    const onInputChange = ({target}) => {
        //console.log(event);
        //console.log(event.target.value);
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');
    }


    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
