// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   products: [],
//   userInfo: null,
// searchQuery: '',
// selectedCategory: '',
  
// };

// export const amazonSlice = createSlice({
//   name: 'amazon',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.products.find((item) => item.id === id);
//       if (item) {
//         item.quantity += quantity;
//       } else {
//         state.products.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     increamentQuantity: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decreamentQuantity: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity = Math.max(1, item.quantity - 1);
//       }
//     },
//     deleteItem: (state, action) => {
//       state.products = state.products.filter((item) => item.id !== action.payload);
//     },
//     resetCart: (state) => {
//       state.products = [];
//     },
//     setUserInfo: (state, action) => {
//       state.userInfo = action.payload;
//       console.log('Setting userInfo:', action.payload);
//     },
//     userSignOut: (state) => {
//       state.userInfo = null;
//     },
// setSearchQuery: (state, action) => {
//   state.searchQuery = action.payload;
// },
// setSelectedCategory: (state, action) => {
//   state.selectedCategory = action.payload;
// },
// setProducts: (state, action) => {
//   state.products = action.payload;
// },
//   },
// });

// export const {
//   addToCart,
//   deleteItem,
//   resetCart,
//   decreamentQuantity,
//   increamentQuantity,
//   setUserInfo,
//   userSignOut,
// setProducts,
// setSearchQuery, setSelectedCategory
// } = amazonSlice.actions;
//  export default amazonSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  userInfo: null,
  searchQuery: '',
  selectedCategory: '',
};

export const amazonSlice = createSlice({
  name: 'amazon',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increamentQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreamentQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item) {
        item.quantity = Math.max(1, item.quantity - 1);
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.products = [];
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      console.log('Setting userInfo:', action.payload);
    },
    userSignOut: (state) => {
      state.userInfo = null;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  decreamentQuantity,
  increamentQuantity,
  setUserInfo,
  userSignOut,
  setProducts,
  setSearchQuery,
  setSelectedCategory,
} = amazonSlice.actions;

export default amazonSlice.reducer;

