import {createSlice, createAsyncThunk, PayloadAction,} from "@reduxjs/toolkit";
import axios from "axios";

interface SubjectListState {
    loading: boolean;
    error: string | null;
    assignmentList: Subject[] | null;
}

const initialState: SubjectListState = {
    loading: true,
    error: null,
    assignmentList: null,
}

export const getSubjectList = createAsyncThunk(
    "subjectList/getSubjectList",
    async (jwtToken: string) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/subjectList/`,
            {
                headers: {
                    Authorization: `bearer ${jwtToken}`,
                },
            }
        );
        return axiosResponse.data;
    }
);

export const subjectListSlice = createSlice({
    name: "subjectList",
    initialState,
    reducers: {},
    extraReducers: {
        [getSubjectList.pending.type]: (state) => {
            state.loading = true;
        },
        [getSubjectList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.assignmentList = action.payload;
        },
        [getSubjectList.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

