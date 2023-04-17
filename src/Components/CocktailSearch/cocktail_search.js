import {useEffect, useState} from 'react';
import axios from 'axios';
import './cocktail_search.css';
import { TextField, Button } from '@mui/material';
import CocktailItem from './cocktail_item';

function Cocktail_Search() {
    let TrendingTitle = "Trending Recipes...";
    const [title, setTitle] = useState(TrendingTitle);
    const [cocktailItems, setCocktails] = useState([]);
    const [input, setInput] = useState('');
  
    function filterIngredients(rawData){
        rawData.map((data)=>{
            let ingredients =[]
            for (const[key,value] of Object.entries(data)){
                if(key.includes("strIngredient") &&value!== ""&& value!==null){
                    ingredients.push(value)
                }
            }
            data["ingredients"]= ingredients;
            return true;
        }) 
    }
  
  
    function filterIngredientsMeasure(rawData){
        rawData.map((data)=>{
            let ingredients =[]
            for (const[key,value] of Object.entries(data)){
                if(key.includes("strIngredient") &&value!== ""&& value!==null){
                    ingredients.push(value)
                }
            }
            data["ingredients"]= ingredients;
    
    
            let measures =[]
            for (const[key,value] of Object.entries(data)){
                if(key.includes("strMeasure") &&value!== ""&& value!==null){
                    measures.push(value)
                }
            }
            let ingredientsMeasure = []
            for (let i = 0; i < ingredients.length; i++){
                ingredientsMeasure.push(`${measures[i]} of ${ingredients[i]}`)
            }
            data["ingredientsMeasure"]= ingredientsMeasure;
            return true;
        })
    }
  
    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
            .then( (response) => {
                filterIngredients(response.data.drinks)
                filterIngredientsMeasure(response.data.drinks)
                setCocktails(response.data.drinks);
            })
            .catch( (err) => {
                console.log(err);
            })
        
    }, [])

    const onSubmit = e => {
        e.preventDefault();
        setTitle("");
        
        let inputDrink = input;
        axios(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${inputDrink}`)
            .then(function (response) {
                filterIngredients(response.data.drinks)
                filterIngredientsMeasure(response.data.drinks)
                setCocktails(response.data.drinks);
                setInput("");
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    return (
        <main id='searchContainer'>
            <form>
                {< TextField onChange={(newValue) => setInput(newValue.target.value)} label="Search for Cocktails" variant="outlined" name='ingredient' style={{ width: 500 }}/> }
                    <Button 
                        variant="outlined" 
                        type="submit"
                        onClick={onSubmit}
                        name="ingSubmit"
                        >submit</Button>
            </form>

            <div id="SearchContainer">
                <div id = "suggestion"> {title} </div>
                {
                    cocktailItems !== null?
                    cocktailItems.map((item, index)=> {
                        // console.log(item)
                        return(
                            <>
                                <CocktailItem key={index} 
                                name={item.strDrink}
                                image={item.strDrinkThumb}
                                instructions={item.strInstructions}
                                ingredients={item.ingredients}
                                ingredientsMeasure={item.ingredientsMeasure}
                                glass={item.strGlass}/> 
                            </>
                        ) 
                    })
                    : <div id = "noResults">No results found!</div>
                }
            </div>
      </main>
    );
}

export default Cocktail_Search;