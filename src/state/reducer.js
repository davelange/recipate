const reducer = function(state, action) {
  
    switch (action.type) {
      case 'SET_MEAL_TYPE':      
        return {...state, selectedMealType: action.value};                    

      case 'QUERY_TOGGLE':        
        return { ...state, query: { ...state.query, [action.value]: !state.query[action.value]}};

      case 'SET_POPULAR_RECIPES':
        return {...state, popularRecipes: action.payload };

      case 'SET_SEARCH_RESULTS':
        return {...state, sarchResults: action.payload};

        
      default:
        return state;
    }
  
  }

  export default reducer;