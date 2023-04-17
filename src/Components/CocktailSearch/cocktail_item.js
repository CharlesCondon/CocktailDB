import React from 'react';
import {Link} from 'react-router-dom';
import './cocktail_search.css';

function Cocktail_Item({name,image,ingredients,instructions, ingredientsMeasure, glass}){
    return(
        <Link to={{
            pathname: "/drinkrecipe",
            state: {
                name,
                image,
                ingredients,
                instructions,
                ingredientsMeasure,
                glass
                }
            }}>
            <div className="searchImg">
                <h3 className="name">{name}</h3>
                {/* </div><div className="Name"> {name}</div> */}

                <div className="content">
                    <img id='Drink-Image' src={image} alt={name}/>
                
                    {/* <div className="ingredients">{ingredients}</div> */}
                    <div className= "ingredientsContainer">
                        <h4>Ingredients needed:</h4>
                        <ul>
                            {
                                ingredients.map((ingredient, index) => {
                                return (
                                    <li key={index} className="ingredients">{ingredient}</li>
                                    )
                                })
                            } 
                        </ul>
                    </div>
                </div>  
            </div>  
        </Link>
    )
}
export default Cocktail_Item;