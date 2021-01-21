import React from 'react';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import MealTypeCard from '../components/MealTypeCard';
import {toggleQueryOption, setMealOption} from '../state/actions';
import {QueryContext} from '../state/appContexts';
import {mealTypes} from '../state/initialStoreData';

function SearchSettings() {
    
    const {query, setQuery} = React.useContext(QueryContext);
    
    console.log('advanced settings RERENDER')

    return (
        <div>            
            <span>Settings</span>

                { query.options.map( (item, i) => (
                <Checkbox 
                    item={item} 
                    key={item.queryStr} 
                    clickEv={() => setQuery( toggleQueryOption(query, i) ) } />
                )) }

                
                <span>Type of meal</span>

                { mealTypes.map( item => (
                    <MealTypeCard
                    name={item.name}
                    key={item.name}
                    clickEv={() => setQuery( setMealOption(query, item.name) ) } />
                )) }

                <Button 
                text="Find me some recipes"
                type="submit" />             
        </div>
    );
}

export default React.memo(SearchSettings);