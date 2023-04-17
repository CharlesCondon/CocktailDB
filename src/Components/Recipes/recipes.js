import {useEffect, useState} from 'react';
import './recipes.css';
import { TextField, Button } from '@mui/material';

function Recipes() {
  const [input, setInput] = useState('');
  const [ingredients, setIngs] = useState([]);

  const newIng = e => {
    e.preventDefault();
    
    // FIX CASE SENSATIVITY
    if (!ingredients.includes(input)) {
      setIngs([...ingredients, input]);
      
      let newIng = document.createElement('div');
      newIng.classList.add('ing');
      newIng.innerText = input;
      document.getElementById('ingContainer').appendChild(newIng);
    }
  };

  return (
    <main id='searchContainer'>
        <form>
          {< TextField onChange={(newValue) => setInput(newValue.target.value)} label="Enter An Ingredient" variant="outlined" name='ingredient' style={{ width: 500 }}/> }
            <Button 
                variant="outlined" 
                type="submit"
                onClick={newIng}
                name="ingSubmit"
                >submit</Button>
        </form>
        <div id='ingContainer'>

        </div>

        <div id='submitIng'>
          <Button 
            variant="outlined" 
            type="submit"
            onClick={null}
            name="ingSubmit"
            style={{ width: 500}}
            >submit</Button>
        </div>

    </main>
  )
}

export default Recipes;