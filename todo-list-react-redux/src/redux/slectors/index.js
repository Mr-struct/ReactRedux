
// here we get all our store from ../redux/reducers/index.js
export const getStore = store => store;

/**
 * We get from the store an article it's TodoOperation "from ../redux/reducers/TodoOperations"
 * so we get all the function state and data from this file like a simple article 
 * */
export const getTodoOperations = store => getStore(store).TodoOperations;

/**
 *  now we have access to the TodoOperations we get from it our todo List 
 */
export const getTodoList = store => getTodoOperations(store) ? getTodoOperations(store).list : [];