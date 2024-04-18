import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        // console.push('Valorant');
        if (categories.includes(newCategory)) return;
        //setCategories([...categories, 'Hola mundo']);
        setCategories([newCategory, ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
        
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}
            />

         
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
           
        </>
    )
}