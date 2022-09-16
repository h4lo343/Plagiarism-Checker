import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface BufferFileListState {
    loading: boolean;
    error: string | null;
    bufferFileList: BufferFile[] | null;
}

const initialState: BufferFileListState = {
    loading: true,
    error: null,
    bufferFileList: null
};

export const getBufferFileList = createAsyncThunk(
    "bufferFileList/getBufferFileList",
    async (jwtToken: string) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/assignmentList/`,
            {
                headers: {
                    Authorization: `bearer ${jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const bufferFileListSlice = createSlice({
    name: "assignmentList",
    initialState,
    reducers: {},
    extraReducers: {
        [getBufferFileList.pending.type]: (state) => {
            state.loading = true;
        },
        [getBufferFileList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.bufferFileList = action.payload;
        },
        [getBufferFileList.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

