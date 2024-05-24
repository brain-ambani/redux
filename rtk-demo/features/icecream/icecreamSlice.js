const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIceCreams: 20,
};

const icecreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCreams--;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase("cake/ordered", (state) => {
      state.numOfIceCreams--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;
