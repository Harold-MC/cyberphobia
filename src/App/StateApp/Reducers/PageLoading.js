export const loading = (store = true, action) => {
    switch(action.type){
        case "LOADING" : return(action.payload);
           break;
        default : return store
    }
}