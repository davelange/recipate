import React from 'react';
import SplashScreen from '../containers/SplashScreen';
import Search from '../containers/Search';
import PopularRecipes from '../containers/PopularRecipes';
import {QueryContext} from '../state/appContexts';
import {API_Random} from '../api/apiRequests';

export default function Home(props) {

    const [popularRecipes, setPopularRecipes] = React.useState([]);    
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect( () => {
        getPopularRecipes();        
    }, []); 

    async function getPopularRecipes() {
        const data = await API_Random();
        setPopularRecipes(data);
        setIsLoading(false);
    }

    return (
        <div>
            { popularRecipes.length ?                                 
                <>
                <QueryContext.Provider value={props}>
                    <Search />                                            
                </QueryContext.Provider>

                <PopularRecipes 
                    data={popularRecipes} />
                </>
                :
                <SplashScreen />
            }            
        </div>
    )
}