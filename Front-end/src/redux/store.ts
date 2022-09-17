import {assignmentListSlice} from "./assignmentList/slice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {authenticationSlice} from "./authentication/slice";
import {uploadedFileListSlice} from "./uploadedFileList/slice";
import {getResult, resultSlice} from "./result/slice";
import { subjectListSlice } from "./subjectList/slice"
import {resultTextSlice} from "./resultText/slice";
import { bufferFileListSlice } from "./bufferFileList/slice";
import { assignmentDetailSlice } from "./assignmentDetail/slice";

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["user"]
}

const rootReducer = combineReducers(
    {
        assignmentList: assignmentListSlice.reducer,
        assignmentDetail: assignmentDetailSlice.reducer,
        authentication: authenticationSlice.reducer,
        uploadedFileList: uploadedFileListSlice.reducer,
        subjectList: subjectListSlice.reducer,
        bufferFileList: bufferFileListSlice.reducer,
        result: resultSlice.reducer,
        resultText: resultTextSlice.reducer
    }
)

const persistedReducer = persistReducer(persistConfig, rootReducer);

// reducers are saved in store
const store = configureStore(
    {
        reducer: persistedReducer,
        devTools: true
    }
);

const persistor = persistStore(store);

// state of the store, including everything in redux folder
export type RootState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;

const stores = {store, persistor};
export default stores;