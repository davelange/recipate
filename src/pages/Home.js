import React from 'react';
import {API_Random} from '../api/apiRequests';
import Loader from '../components/Loader';
import RecipeList from '../containers/RecipeList';

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
                <RecipeList 
                    results={popularRecipes}
                    title="Popular right now"
                    none="Something went wrong :(" />
                    
                <RecipeList
                    results={savedRecipes}
                    title="Saved recipes"
                    none="You haven't saved any recipes yet." />
                </>                
            )}      
        </div>
    )
}