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
        <form className="rounded-xl rounded-t-none shadow-lg py-6 px-8" onSubmit={ handleSubmit }>
            <div className="flex">
                <input 
                    className="py-2 px-4 border border-gray-400 border-solid rounded-3xl"
                    type="search" 
                    placeholder='Try "Pasta"'
                    onChange={ e => setTempTerm(e.target.value) } />

                <button
                    className="bg-red-500 rounded-3xl"
                    type="button"
                    onClick={ () => setExpand( true ) }>
                        . </button>
            </div>
            { expand && <SearchSettings /> }                            

        </form>
    )
}

export default Search;