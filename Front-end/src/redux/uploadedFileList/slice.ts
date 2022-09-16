import {createSlice, createAsyncThunk, PayloadAction,} from "@reduxjs/toolkit";
import axios from "axios";

interface UploadedFileListState {
    loading: boolean;
    error: string | null;
    fileList: any;
}

const initialState: UploadedFileListState = {
    loading: true,
    error: null,
    fileList: null,
}

export const getUploadedFileList = createAsyncThunk(
    "uploadedFileList/getUploadedFileList",
    async (jwtToken: string | null) => {
        const axiosResponse = await axios.get(
            `http://localhost:8888/fileList/`,
            {
                headers: {
                    Authorization: `bearer ${jwtToken}`,
                },
            }
        );
        return axiosResponse.data;
    }
);

export const uploadedFileListSlice = createSlice({
    name: "uploadedFileList",
    initialState,
    reducers: {},
    extraReducers: {
        [getUploadedFileList.pending.type]: (state) => {
            state.loading = true;
        },
        [getUploadedFileList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.fileList = action.payload;
        },
        [getUploadedFileList.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

