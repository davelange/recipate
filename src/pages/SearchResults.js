import React from 'react';
import {API_ComplexSearch} from '../api/apiRequests';
import RecipeList from '../containers/RecipeList';
import Loader from '../components/Loader';

export default function SearchResults({query}) {

    const [searchResults, setSearchResults] = React.useState(false);

    console.log('RERENDER SEARCH RESULTS')

    React.useEffect( () => {        
        getSearchResults();    
        // eslint-disable-next-line    
    }, [query]);

    async function getSearchResults() {
        const data = await API_ComplexSearch(query);
        setSearchResults( data );        
    }

    function isLoading() {
        return !searchResults;
    }

    return (
        <div className="lg:container mx-auto py-6 px-8">            
            { isLoading() ? 
                <Loader />                
                :
                <>
                <RecipeList
                    title="Here's what we found"
                    none="We could't find any recipes. Perhaps try something different?"
                    results={searchResults.results} />
                </>
            }
        </div>
    )
}