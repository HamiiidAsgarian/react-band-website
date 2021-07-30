const initstate = {
    pagescrollY: undefined,

}
const rootReducer = (state = initstate, action) => {

    if (action.type === "CITY_CHANGE") {
        let NewCity = action.citys;
        return {
            ...state,
            city: NewCity
        }
    }


    return state;
}
export default rootReducer;