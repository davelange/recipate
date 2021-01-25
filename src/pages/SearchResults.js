import React from 'react';
import {API_ComplexSearch} from '../api/apiRequests';
import { ResultsDisplay } from '../containers/ResultsDisplay';
import Loader from '../components/Loader';

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
        <div className="lg:container mx-auto py-6 px-8">            

            { isLoading ? 
                <Loader />                
                :
                <>
                <ResultsDisplay
                    results={searchResults.results}
                    selectRecipe={props.selectRecipe} />
                </>
            }

        </div>
    )
}