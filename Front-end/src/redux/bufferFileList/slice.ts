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
    async (parameters: {
        jwtToken: string | null, subjectCode: string | undefined, assignmentName: string | undefined
    }) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/buffer/getBufferFileList?subjectCode=${parameters.subjectCode}&assignmentName=${parameters.assignmentName}`,
            {
                headers: {
                    token: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const deleteBufferFile = createAsyncThunk(
    "bufferFileList/deleteBufferFile",
    async (parameters: {
        jwtToken: string | null, fileId: string | null
    }) => {
        const axiosResponse = await axios.post(
            `http://localhost:8888/buffer/deleteFile`,
            {
                _id: parameters.fileId
            },
            {
                headers: {
                    token: `${parameters.jwtToken}`
                }
            }
        );
        return axiosResponse.data;
    }
);

export const bufferFileListSlice = createSlice({
    name: "bufferFileList",
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

