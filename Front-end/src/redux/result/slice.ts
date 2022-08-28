import {createSlice, createAsyncThunk, PayloadAction,} from "@reduxjs/toolkit";
import axios from "axios";

interface ResultState {
    loading: boolean;
    error: string | null;
    resultDetail: any;
}

const initialState: ResultState = {
    loading: true,
    error: null,
    resultDetail: null,
}

/*
export const getResult = createAsyncThunk(
    "result/getResult",
    async (jwtToken: string) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888//`,
            {
                headers: {
                    Authorization: `bearer ${jwtToken}`,
                },
            }
        );
        return axiosResponse.data;
    }
);
 */

export const getResult = createAsyncThunk(
    "result/getResult",
    async (JWT: string) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/file/get-mock-result`
        );
        return axiosResponse.data;
    }
);

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {},
    extraReducers: {
        [getResult.pending.type]: (state) => {
            state.loading = true;
        },
        [getResult.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.resultDetail = action.payload;
        },
        [getResult.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

