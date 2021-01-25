import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './state/initialStoreData';
import { RecipeContext } from './state/appContexts';
import { QueryContext } from './state/appContexts';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Recipe from './pages/Recipe';
import Search from './containers/Search';

function App() {
  const [query, setQuery] = React.useState(store.query);
  const [savedRecipes, setSavedRecipes] = React.useState(store.savedRecipes);
  const [selectedRecipe, setSelectedRecipe] = React.useState({});

  return (
    <div className="App">      
      <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe}} >
        <BrowserRouter>

          <QueryContext.Provider value={{query, setQuery}}>
              <Search />                                            
          </QueryContext.Provider>        
          
          <Switch>          
            
            <Route exact path="/">
              <Home 
                query={query} 
                setQuery={setQuery} />
            </Route>

            <Route path="/search">
              <SearchResults 
                query={query} 
                setQuery={setQuery}
                selectRecipe={setSelectedRecipe} />
            </Route>

            <Route path="/recipe">
              <Recipe 
                id={selectedRecipe} />
            </Route>
          </Switch>
        </BrowserRouter>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
