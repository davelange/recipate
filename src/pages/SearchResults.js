import React from 'react';
import {API_ComplexSearch} from '../api/apiRequests';
import { ResultsDisplay } from '../containers/ResultsDisplay';
import Loader from '../components/Loader';

export default function SearchResults(props) {

    const [searchResults, setSearchResults] = React.useState(false);

    React.useEffect( () => {        
        getSearchResults();        
    }, [props.query]);

    async function getSearchResults() {
        const data = await API_ComplexSearch(props.query);
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
                <ResultsDisplay
                    title="Here's what we found"
                    results={searchResults.results}
                    selectRecipe={props.selectRecipe} />
                </>
            }
        </div>
    )
}