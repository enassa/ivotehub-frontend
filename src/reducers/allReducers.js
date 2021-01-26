// import {combineReducers} from "redux"
// import {
//     fetchContestantsReducer,
// } from "./reducer"

// const AllReducers = combineReducers({
//     contestantsList:fetchContestantsReducer,
// })
// export default AllReducers;
import axios from "axios";

const innitialState = {
    contestantsList:[]
}
export const rootReducer = (state=innitialState , action) => {
    switch(action.type){
        case "/GET_CONTESTANTS":
           return axios.get('https://jsonplaceholder.typicode.com/posts')
               .then(resp => {
                   return {
                    ...state,
                     contestantsList:[...resp]
                   }
               })
               .catch(err => {
                   // Handle Error Here
                   console.error(err);
               });
        //    {
        //        ...state,
        //        contestantsList:action.payload
        //    }
                break;
    }
}
export default rootReducer;
// store.dispatch({type:"BB", ad:"milk"})


