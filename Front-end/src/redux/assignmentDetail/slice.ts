import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AssignmentDetailState {
    loading: boolean;
    error: string | null;
    assignment: Assignment[] | null;
}

const initialState: AssignmentDetailState = {
    loading: true,
    error: null,
    assignment: null
};

export const getAssignmentDetail = createAsyncThunk(
    "assignmentList/getAssignmentList",
    async (parameters: { jwtToken: string | null, subjectCode: string | undefined, assignmentName: string | undefined }) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/assignment/getAssignmentList?subjectCode=${parameters.subjectCode}&assignmentName=${parameters.assignmentName}`,
            {
                headers: {
                    token: `${parameters.jwtToken}`
                }
            }
        );
        console.log(axiosResponse);
        return axiosResponse.data;
    }
);

export const assignmentDetailSlice = createSlice({
    name: "assignmentDetail",
    initialState,
    reducers: {},
    extraReducers: {
        [getAssignmentDetail.pending.type]: (state) => {
            state.loading = true;
        },
        [getAssignmentDetail.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.assignment = action.payload;
        },
        [getAssignmentDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

