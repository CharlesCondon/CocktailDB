import './random_drink.css';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Random_Drink() {
  const [drinkInfo, setDrinkInfo] = useState([]);

  function filterIngredientsMeasure(rawData){
    rawData.forEach((data)=>{
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
    })
  }

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
        filterIngredientsMeasure(data.data.drinks)
        setDrinkInfo(data.data.drinks);
        
        console.log(data.data)
      }
    fetchData()
  }, [])
  
  return (
    <main>
      <div id='randContainer'>
        <div className="drinkInfo">
            <img id = "Drink-Image" src={drinkInfo[0]?.strDrinkThumb} alt=""/>
            <h2 id = "Drink-Name">{drinkInfo[0]?.strDrink}</h2>
        </div>

        <div className="recContainer">
            <div id = "Drink-Rec">
                <h4 id = "Instructions">Description/Instructions:</h4>{drinkInfo[0]?.strInstructions}
                <h4 id = "Glass">Recommended Glass:</h4>{drinkInfo[0]?.strGlass}
                <h4 id = "Ingredients">Ingredients:</h4> 
                <div>
                <ul>
                    {
                        drinkInfo[0]?.ingredientsMeasure.map((item, index) => {
                            return(
                              <div key={index*10}>
                                <li key={index}>{item}</li>
                                <hr/>
                              </div>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Random_Drink;