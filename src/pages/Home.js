import React from 'react';
import {API_Random} from '../api/apiRequests';
import Loader from '../components/Loader';
import PopularRecipes from '../containers/PopularRecipes';
import SavedRecipes from '../containers/SavedRecipes';

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
                <PopularRecipes 
                    data={popularRecipes} />
                    
                <SavedRecipes
                    savedRecipes={savedRecipes} />
                </>                
            )}      
        </div>
    )
}