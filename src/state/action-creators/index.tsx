import axios from 'axios'
import { Dispatch} from 'redux';
import { Action } from '../actions'
import { ActionType } from '../action-types';

export const searchRepositories = (term:string)=>{

    return async(dispatch:Dispatch<Action>)=>{
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        })

        try{
            const {data} = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params:{
                        text: term
                    }
                }
            )


            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: data
            })
        }catch(err){
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}