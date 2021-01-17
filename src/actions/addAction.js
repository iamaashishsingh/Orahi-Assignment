
const searchAction = (data) => (dispatch) => {

    dispatch({type: 'SET_VALUE', payload: data});
}

export default searchAction;
