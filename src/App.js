import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { RecipeContext } from './state/appContexts';
import { readLocalStorage } from './state/actions';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Recipe from './pages/Recipe';
import Search from './containers/Search';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = React.useState({});
  const [savedRecipes, setSavedRecipes] = React.useState( readLocalStorage() );
  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  return (
    <div className="App flex flex-col h-full">    
      <div className="flex-grow">
      <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe}} >
        <BrowserRouter>

          <Search            
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
      <Footer />
    </div>
  );
}

export default App;
