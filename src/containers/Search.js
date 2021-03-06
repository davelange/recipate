import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import SearchSettings from './SearchSettings';
import Button from '../components/Button';
import FeatherIcon from 'feather-icons-react';

function Search({ setQuery}) {

    const routerHistory = useHistory();
    
    const [expand, setExpand] = React.useState(false);

    const [tempQuery, setTempQuery] = React.useState({
        term: '',
        options: [],
        mealType: ''
    });    

    function handleSubmit(e) {
        e.preventDefault();
        setExpand( false );
        setQuery( tempQuery );        
        routerHistory.push('/search');
    }

    function setQueryProp( prop, val ) {        
        let newQuery = {...tempQuery, [prop]: val};
        setTempQuery( newQuery );
    }

    return (
        <form 
            onSubmit={ handleSubmit } 
            className="rounded-xl rounded-t-none shadow-lg py-6 px-8 lg:container mx-auto">

            <div className="flex justify-between items-center">
                
                <Link to="/" className="font-bold text-red-500 mr-8 hidden md:block">
                    recipate
                </Link>

                <input 
                    className="py-2 px-4 border border-gray-400 border-solid rounded-3xl flex-grow mr-2 focus:border-3 focus:border-red-500"
                    type="search" 
                    placeholder='Try "Pasta"'
                    onChange={ e => setQueryProp('term', e.target.value) } />
                
                <Button 
                    className="bg-red-500 rounded-3xl w-10 h-10 flex items-center justify-center p-2" 
                    type="button"
                    clickEv={ () => setExpand( !expand ) }>
                        <FeatherIcon icon="sliders" color="#fff " />
                </Button>
            </div>

            <CSSTransition 
                in={expand} 
                timeout={100} 
                classNames="expand">

                <SearchSettings
                    tempQuery ={tempQuery}
                    setQueryProp={setQueryProp} />                    

            </CSSTransition>
        </form>
    )
}

export default Search;