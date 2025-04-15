import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {API_URL} from "../constants/constanturl";


//  Create action
export const createUser = createAsyncThunk("user/createuser" , async (data, {rejectWithValue}) => {
    const reponse = await fetch(API_URL , {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
     try {
        const userData = await reponse.json();
        return userData
     } catch (error) {
        return rejectWithValue(error)
        
     }
    
})
//  Read action
export const readUser = createAsyncThunk("user/readUser" , async (data ,{rejectWithValue}) => {
    const reponse = await fetch(API_URL );
     try {
        const userData = await reponse.json();
        return userData
     } catch (error) {
        return rejectWithValue(error)
        
     }
    
})
// Update Action
export const editUser = createAsyncThunk("user/editUser" , async (data, {rejectWithValue}) => {
    const reponse = await fetch(API_URL+`${data.id}` , {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
     try {
        const userData = await reponse.json();
        return userData
     } catch (error) {
        return rejectWithValue(error)
        
     }
    
})

//  Delete action

export const deleteUser = createAsyncThunk('user/deleteUser', async (id ,{rejectWithValue}) => {

    try {
        const response = await fetch(API_URL+id ,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Add authorization header if needed
              // 'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json();
            return rejectWithValue(errorData);
          }
        const data = await response.json();
        return data;
        // return { id }

    } catch (error) {
        return rejectWithValue(error.message)
        
    }
    
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        loading: false,
        status: "idle",
       searchData: [],
    },
    reducers: {
        searchUser : (state,action) =>{
            state.searchData = action.payload;

        }
    },
    extraReducers: (builder) =>{
        // Creaate  User
        builder.addCase(createUser.pending , (state) =>{
            state.status="Loading"
        })
        .addCase(createUser.fulfilled , (state,action) =>{
            state.status="succeeded",
            state.users = action.payload;
        })
        .addCase(createUser.rejected, (state) =>{
            state.status="Failed"
        })
        // Get User Data
        .addCase(readUser.pending , (state) =>{
            state.loading = true;
            state.status="Loading..."
        })
        .addCase(readUser.fulfilled , (state,action) =>{
            state.loading = false;
            state.status="succeeded",
            state.users = action.payload
        })
        .addCase(readUser.rejected, (state) =>{
            state.loading = false;
            state.status="Failed"
            
        })
       // Update User Data
        .addCase(editUser.pending , (state) =>{
            state.loading = true;
             state.status="Loading..."
        })
        .addCase(editUser.fulfilled , (state,action) =>{
            state.loading = false;
            state.status="succeeded",
            state.users = state.users.map((user => user.id === action.payload.id ? action.payload : user ))
        })
        .addCase(editUser.rejected, (state,action) =>{
            state.loading = false;
            state.status= action.payload || "Failed"
            
        })
        // Update User Data
        .addCase(deleteUser.pending , (state) =>{
            state.loading = true;
             state.status="Loading..."
        })
        .addCase(deleteUser.fulfilled , (state,action) =>{
            state.loading = false;
            state.users = state.users.filter(user => user.id !== action.payload.id ) 
        })
        .addCase(deleteUser.rejected, (state,action) =>{
            state.loading = false;
            state.status= action.payload || "Failed"
            
        })

    }
    

})

export default userSlice.reducer;

export const {searchUser} = userSlice.actions;