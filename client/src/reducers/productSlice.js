import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// let fetchData=async()=>{
//     let res= await axios.get("http://localhost:5000/products")
//     // console.log(res.data)
//     return res.data

//   }
const API_URL = 'http://localhost:5000/products';
// create
export const AddProducts=createAsyncThunk(
    "addProduct",
    async (data) => {
        try {
            const response = await axios.post(API_URL,data);
            return response.data;
        } catch (error) {
            return error
            
        }
       
    }
)

// read
export const showProducts=createAsyncThunk("showProduct", 
    async () => {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            return error
            
        }
       
    
})

// delete
export const deleteProduct=createAsyncThunk("deleteProduct", 
    async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/${id}`);
            return response.data;
        } catch (error) {
            return error
            
        }
       
    
})

// update
export const updateProduct=createAsyncThunk("updateProduct", 
async (data) => {
  console.log("dtaaa ",data)
  try {
      const response = await axios.put(`${API_URL}/${data.id}`,data);
      return response.data;
  } catch (error) {
      return error
      
  }
 
}
 
    
)
const productSlice =createSlice({
    name:"productsDetails",
    initialState:{
        products:[],
        loading:false,
        error:null

    },
    // reducers:{

    // }
    // extraReducers:{
    //     [AddProducts.pending]:(state)=>{
    //         state.loading=true
    //     },
    //     [AddProducts.fulfilled]:(state,action)=>{
    //         state.loading=false;
    //         state.products.push(action.payload)
    //     },
    //     [AddProducts.rejected]:(state,action)=>{
    //         state.loading=false;
    //         state.products=action.payload;
    //     },

    // }
    extraReducers: (builder) => {
        builder
          .addCase(AddProducts.pending, (state) => {
            state.loading=true
          })
          .addCase(AddProducts.fulfilled, (state, action) => {
            state.loading=false;
                    state.products.push(action.payload)
          })
          .addCase(AddProducts.rejected, (state, action) => {
            state.loading=false;
                    state.products=action.payload;
          });

        //   ll
        builder
        .addCase(showProducts.pending, (state) => {
          state.loading=true
        })
        .addCase(showProducts.fulfilled, (state, action) => {
          state.loading=false;
                  state.products=action.payload
        })
        .addCase(showProducts.rejected, (state, action) => {
          state.loading=false;
                  state.products=action.payload;
        });

        // single
        builder
        .addCase(deleteProduct.pending, (state) => {
          state.loading=true
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
          state.loading=false;
          let {id}=action.payload;
          if(id){
            state.products=state.products.filter((ele)=>ele.id !==id)
          }
        })
        .addCase(deleteProduct.rejected, (state, action) => {
          state.loading=false;
                  state.products=action.payload;
        });

           // update
           builder
           .addCase(updateProduct.pending, (state) => {
             state.loading=true
           })
           .addCase(updateProduct.fulfilled, (state, action) => {
             state.loading=false;
         state.products=state.products.map((ele)=>
         ele.id==action.payload.id ? action.payload :ele)
           })
           .addCase(updateProduct.rejected, (state, action) => {
             state.loading=false;
                     state.products=action.payload;
           });
      },
})

export default productSlice.reducer