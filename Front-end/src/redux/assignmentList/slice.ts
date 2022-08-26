import {createSlice, createAsyncThunk, PayloadAction,} from "@reduxjs/toolkit";
import axios from "axios";

interface AssignmentListState {
    loading: boolean;
    error: string | null;
    assignmentList: any;
}

const initialState: AssignmentListState = {
    loading: true,
    error: null,
    assignmentList: null,
}

export const getAssignmentList = createAsyncThunk(
    "assignmentList/getAssignmentList",
    async (jwtToken: string) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/assignmentList/`,
            {
                headers: {
                    Authorization: `bearer ${jwtToken}`,
                },
            }
        );
        return axiosResponse.data;
    }
);

export const assignmentListSlice = createSlice({
    name: "assignmentList",
    initialState,
    reducers: {},
    extraReducers: {
        [getAssignmentList.pending.type]: (state) => {
            state.loading = true;
        },
        [getAssignmentList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.assignmentList = action.payload;
        },
        [getAssignmentList.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
