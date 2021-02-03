import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './state/initialStoreData';
import { RecipeContext } from './state/appContexts';
//import { QueryContext } from './state/appContexts';
import { readLocalStorage } from './state/actions';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Recipe from './pages/Recipe';
import Search from './containers/Search';

function App() {
  const [query, setQuery] = React.useState(store.query);
  const [savedRecipes, setSavedRecipes] = React.useState( readLocalStorage() );
  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  return (
    <div className="App">      
      <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe}} >
        <BrowserRouter>

          <Search
            query={query}
            setQuery={setQuery} />    
          
          <Switch>          
            
            <Route exact path="/">
              <Home 
                savedRecipes={savedRecipes} />
            </Route>

            <Route path="/search">
              <SearchResults         
                query={query}        
                selectRecipe={setSelectedRecipe} />
            </Route>

            <Route path="/recipe">
              <Recipe
                savedRecipes={ savedRecipes }
                setSavedRecipes={ setSavedRecipes } />
            </Route>

          </Switch>
        </BrowserRouter>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
