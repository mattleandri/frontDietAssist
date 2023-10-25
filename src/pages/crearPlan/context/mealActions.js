
export const updateFoodListDB = (dispatch) =>{
    dispatch({
        type: 'updateFoodListDB'
    })
}

export const loadFoods = (dispatch,food) =>{
    dispatch({
        type: 'loadFoods',
        payload:food
    })
}

export const changeMode = (dispatch) =>{
    dispatch({
    type: 'changeMode'
    })
}

export const searchFood = (dispatch,foodList) =>{
    dispatch({
    type:'searchFood',
    payload: foodList
    })
}

export const cleanSearch = (dispatch) =>{

    dispatch({
    type: 'cleanSearch'
    })

}

export const addFood = (dispatch,food) =>{
    dispatch({
    type:'addFood',
    payload: food
    })
}

export const deleteFood = (dispatch,id) =>{
    dispatch({
    type:'deleteFood',
    payload:id
    })
}

export const setGoals = (dispatch,goals) =>{
    dispatch({
    type:'setGoals',
    payload:goals
    })
}

export const setMacros = (dispatch,macros) => {
    dispatch({
    type:'setMacros',
    payload:macros
    })
}

export const changeAmount = (dispatch,data)=>{
    //data is: {food.id:amountSelected}
    dispatch({
    type:'changeAmount',
    payload:data
    })
}

export const setMealName = (dispatch,newName) =>{

    dispatch({
        type:'setMealName',
        payload: newName
    })

}