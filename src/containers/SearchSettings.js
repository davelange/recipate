import React from 'react';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import MealTypeCard from '../components/MealTypeCard';
import {mealTypes, options} from '../state/initialStoreData';

function SearchSettings({ tempQuery, setQueryProp}) {

    function setOption( opt ) {
        let newOpts = tempQuery.options.includes(opt) ? tempQuery.options.filter( item => item !== opt ) : [...tempQuery.options, opt];                    
        setQueryProp( 'options', newOpts );
    }   

    function setMealType( str ) {
        let newType = tempQuery.mealType === str ? '' : str;
        setQueryProp( 'mealType', newType );
    }
    
    return (
        <div className="expand-collapse overflow-hidden">           

            <div className="my-5">
                <legend className="my-2 text-gray-400">Settings</legend>
                <fieldset className="flex justify-between align-center md:justify-start">
                    { options.map( item => (
                    <Checkbox 
                        item={item} 
                        key={item} 
                        clickEv={() => setOption( item ) } />
                    )) }
                </fieldset>
            </div>  

            <div className="my-5">
                <legend className="my-2 text-gray-400">Type of meal</legend>
                <fieldset className="bg-gray-50 flex flex-wrap justify-between px-3 rounded-2xl relative -left-1">
                    { mealTypes.map( item => (
                        <MealTypeCard
                            data={item}     
                            isChosen={ item.name === tempQuery.mealType }                       
                            key={item.name}
                            clickEv={() => setMealType( item.name) }  />
                    )) }
                </fieldset>
            </div> 
                                            
            <Button 
                className="bg-red-500 rounded-3xl p-3 my-2 text-white w-full text-center"
                text="Find me some recipes!"
                type="submit">                    
            </Button>
        </div>
    );
}

export default React.memo(SearchSettings);