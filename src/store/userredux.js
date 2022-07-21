import {createSlice} from '@reduxjs/toolkit';

const userslice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    playlist:[],
    spotifyList:[]
  },
  reducers: {
    signInSuccess: (state, action) => {
      return {
        ...state,
        userInfo: action.payload,
      };
    },
   palylistSucces:(state, action)=>{
    return{
        ...state,
        playlist:action.payload
    }
   },
   spotifySucces:(state, action)=>{
    return{
        ...state,
        spotifyList:action.payload
    }
   }
  },
});
export default userslice.reducer;

export const {
  signInSuccess,
  palylistSucces,
  spotifySucces
} = userslice.actions;
