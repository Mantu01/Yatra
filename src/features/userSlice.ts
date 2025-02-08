import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import authService from "../firebase/authService.ts";
import userService from "../firebase/userService.ts";

interface UserData {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  imgUrl?: string;
  isVerified?: boolean;
}

interface AuthState {
  userData: UserData | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  userData: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

export const getSignUp = createAsyncThunk("auth/getSignUp",async (data: UserData, { rejectWithValue }) => {
  try {
    const { name, email, password, imgUrl, phone } = data;
    const response = await authService.createAccount({ email, password, name, imgUrl, phone });
    return response;
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    return rejectWithValue(error.message);
  }
});

export const getLogin= createAsyncThunk("auth/getLogin",async (data:UserData, { rejectWithValue}) => {
  try {
    const { email, password } = data;
    const response = await authService.login({ email, password });
    return response;
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    return rejectWithValue(error.message);
  }
});

export const getCurrentUser= createAsyncThunk("auth/getCurrentUser",async()=>{
  try {
    const response = await userService.getUser();
    return response;
  } catch (error: any) {
    console.error("Error getting current user:", error.message);
    return error.message;
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    logout: (state) => {
      state.userData = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSignUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSignUp.fulfilled, (state, action:any) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getSignUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLogin.fulfilled, (state, action:any) => {
        state.loading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action:any) => {
        state.loading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;