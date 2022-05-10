function configReducer(state, action) {
    // what does each case do? Update passed in state

    switch (action.type) {
      case "TOGGLE_EXPAND":
        //   build a new object, spread in existing state (...state), update value of expanded posts to flip it using bang operator
        return { ...state, expandPosts: !state.expandPosts };
  
      case "CHANGE_FILTER":
        //   if all is set to true, return previous state and replace filter object with string 'all' 
        if (action.all) {
          return { ...state, filter: "all" };
        }
        // checks if state is currently object or string, if its set to all it will be a string
        let filter = typeof state.filter === "object" ? state.filter : {};
        if (action.fromDate) {
          filter = { ...filter, fromDate: action.fromDate };
        }
        if (action.byAuthor) {
          filter = { ...filter, byAuthor: action.byAuthor };
        }
        return { ...state, filter };
      default:
        throw new Error();
    }
  
  }