import { configureStore, Store } from "@reduxjs/toolkit";
import { counterReducer, actions } from "./reducer";


const middleware = (store: RootState, ) => (next: any) => (action: any) => {
    console.log("Middleware triggered:", action);

    if (store.getState().counter.value === 4) {
        next(actions.reset());
    } else {
        next(action);
    }

}



export const store: Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    });

export type RootState = ReturnType<typeof store.getState>;