import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { readLocalStorage } from './state/actions';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Recipe from './pages/Recipe';
import Search from './containers/Search';
import Footer from './components/Footer';

function App() {
  const [query, setQuery] = React.useState({});
  const [savedRecipes, setSavedRecipes] = React.useState( readLocalStorage() );

  return (
    <div className="App flex flex-col h-full">    
      <div className="flex-grow">
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
                query={query} />
            </Route>

            <Route path="/recipe/:id">
              <Recipe
                savedRecipes={ savedRecipes }
                setSavedRecipes={ setSavedRecipes } />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>  
      <Footer />
    </div>
  );
}

export default App;
