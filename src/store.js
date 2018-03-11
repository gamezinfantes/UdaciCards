import { createStore, combineReducers } from 'redux'
import decksReducer from './ducks/decks/reducer'

const reducers = combineReducers({
  decks: decksReducer,
})

const store = createStore(reducers)

export default store;
