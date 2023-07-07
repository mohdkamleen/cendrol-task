import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from '../../axios/index';

export const handleProduct = createAsyncThunk(
    'product/handleProduct',
    async (payload, { rejectWithValue }) => {
        const { method, endpoint, data } = payload;
        try {
            const res = await axios[method](`/${endpoint}`, data && { ...data });
            res.data?.message && alert(res.data?.message);
            return res.data;
        } catch (error) {
            if (!error.response) throw error;
             alert(error.response.data.message);
            return rejectWithValue(error.response.data);
        }
    }
); 

const initialState = {
    loading: false,
    product: JSON.parse(localStorage.getItem("product")) || null
};

export const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
            .addCase(handleProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(handleProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload || null;
                localStorage.setItem("product",JSON.stringify(action.payload))
            })
            .addCase(handleProduct.rejected, (state, action) => {
                state.loading = false;
                // state.product = null;
            });
    },
});

export const FetchProduct = () => handleProduct({ method: 'get', endpoint: 'products' }); 

export default productSlice.reducer;  
export const {  } = productSlice.actions