import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './cocktail_search.css';
import DrinkList from '../DrinkList/drink_list';
import IngredientCont from './ingredient';

function Cocktail_Search() {
    const [input, setInput] = useState('');
    const [ingredients, setIngredients] = useState([]);
    // const [ingredientsArray, setIngredientsArray] = useState([]);
    
    // function filterDrinks()

    // const foundDrinks = filterDrinks(drinks, searchText);

    // const onSubmit = e => {
    //     e.preventDefault();
    //     setInput(document.getElementById('ingredient').value);

    //     if (!ingredients.includes(input) && input !== "") {
    //         setIngredients([...ingredients, input]);
    //         console.log('submitted ingredient');
    //         console.log(ingredients);
    //     }else {
    //         console.log('booo')
    //     }

    //     const tempIng = document.createElement('p');
    //     tempIng.textContent = input;
    //     tempIng.classList.add('inputIng');
    //     document.getElementById('ingContainer').appendChild(tempIng);

    //     e.currentTarget.previousElementSibling.value = '';
    // }

    // const handleSubmit = async e => {
    //     console.log(e.target.childNodes[0].value)
    //     e.preventDefault();

    //     setInput(e.target.childNodes[0].value);
    //     if (!ingredients.includes(input)) {
    //         setIngredients([...ingredients, input]);
    //         console.log(ingredients);
    //         const newIng = <IngredientCont value ={input} />
    //         console.log(newIng)
    //         // document.getElementById('ingContainer').appendChild(newIng);
    //     }

    // }

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
                <input type="text" placeholder='Enter and Ingredient'/>
                <input type="submit" value="Submit" />
            {/* </form> */}

            <div id="ingContainer">
            </div>
        </>

    );
}

export default Cocktail_Search;