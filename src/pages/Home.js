import React from 'react';
import {API_Random} from '../api/apiRequests';
import Loader from '../components/Loader';
import {ResultsDisplay} from '../containers/ResultsDisplay';

export default function Home({savedRecipes}) {

    const [popularRecipes, setPopularRecipes] = React.useState([]);    

    React.useEffect( () => {
        getPopularRecipes();        
    }, []); 

    async function getPopularRecipes() {
        const data = await API_Random();
        setPopularRecipes(data);
    }

    function isLoading() {
        return !popularRecipes.length;
    }

    return (
        <div className="lg:container mx-auto py-6 px-8">

            { isLoading() ? (
                <Loader />
            ) : (
                <>                
                <ResultsDisplay 
                    results={popularRecipes}
                    title="Popular right now" />
                    
                <ResultsDisplay
                    results={savedRecipes}
                    title="Saved recipes" />
                </>                
            )}      
        </div>
    )
}