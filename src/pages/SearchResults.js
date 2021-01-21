import React from 'react';
import {API_ComplexSearch} from '../api/apiRequests';
import { ResultsDisplay } from '../containers/ResultsDisplay';

export default function SearchResults(props) {

    const [searchResults, setSearchResults] = React.useState({});

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect( () => {
        getSearchResults();        
    }, []);

    async function getSearchResults() {
        const data = await API_ComplexSearch(props.query);
        setSearchResults( data );
        setIsLoading(false);
    }

    return (
        <div>
            <h1>Search results</h1>
            { isLoading ? 
                <p>Gathering the ingredients...</p>
                :
                <ResultsDisplay
                    results={searchResults.results}
                    selectRecipe={props.selectRecipe} />
            }

        </div>
    )
}