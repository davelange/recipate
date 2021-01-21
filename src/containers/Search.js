import React from 'react';
import { QueryContext } from '../state/appContexts';
import {setQueryTerm} from '../state/actions';
import {useHistory} from 'react-router-dom';
import SearchSettings from './SearchSettings';

function Search() {

    const history = useHistory();

    const {query, setQuery} = React.useContext(QueryContext);

    const [expand, setExpand] = React.useState(false);

    const [tempTerm, setTempTerm] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setQuery( setQueryTerm(query, tempTerm) );
        history.push('/search');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="search" 
                placeholder="Pasta or wtv" 
                onChange={ e => setTempTerm(e.target.value) } />

            <button
                type="button"
                onClick={ () => setExpand( true ) }>
                    More </button>
            
            { expand && <SearchSettings /> }                            

        </form>
    )
}

export default Search;