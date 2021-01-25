import React from 'react';
import SplashScreen from '../containers/SplashScreen';
import PopularRecipes from '../containers/PopularRecipes';
import {API_Random} from '../api/apiRequests';

export default function Home(props) {

    const [popularRecipes, setPopularRecipes] = React.useState([]);    
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect( () => {
        getPopularRecipes();        
    }, []); 

    async function getPopularRecipes() {
        const data = await API_Random();
        /* const data = [
            {
              title: 'Garlicky Kale',
              image: 'https://spoonacular.com/recipeImages/644387-556x370.jpg',
              id: 644387
            },
            {
              title: 'Garlicky Kale',
              image: 'https://spoonacular.com/recipeImages/644387-556x370.jpg',
              id: 4345
            }
            ]; */
        setPopularRecipes(data);
        setIsLoading(false);
    }

    return (
        <div className="lg:container mx-auto py-6 px-8">

            { isLoading ? (
                <SplashScreen />
            ) : (
                <>                
                <PopularRecipes 
                    data={popularRecipes} />
                </>                
            )}      
        </div>
    )
}