import { createSlice } from '@reduxjs/toolkit';
// import imagefirst from './images/21.05.27-Mint-Subscription-smaller.webp';
// import imagesecond from './images/22.03.10---Body-Balm---MC_Bite_BodyBalm40229.webp';
// import imagethird from './images/22.02.25---Deodorant---MC_Bite_BodyBalm40229.webp';
// import imagefourth from './images/5_21.05.26---whitening-1--Simple-product-images0858-__May_2021_Untitled-Recipe.webp';

// const products = data


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        cart: [],
        // cart: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        price: 0,
        quantity: 0,
        total: 0,
        netamount: 0,
        tax: 14,
        isLoading: true,
        // coupon: null,
        selectedOption: null, // ID or value of the selected radio button
        // couponPrice: 0, // Calculated coupon price
        couponCode: '',
        discount: 0,
    },
    reducers: {
        clearCart:(state) => {
            state.cart = [];
            // console.log('clear cart')
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        removeItem:(state, action) => {
            // console.log(action);
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => 
            item.id !== itemId);
        },
        updateCart: (state , action) => {
            const copyState = JSON.parse(JSON.stringify(state.cart))
            console.log(copyState, 'copyState')
            const exist = copyState.find((i) => i?.id === action?.payload.id);
            console.log('exist', exist);
            if (exist) {
                state[exist] = { ...action.payload };
              } else {
                state.cart.push({ ...action.payload });
              }
            //     state.cart = [updateCart];
            // state.cart = [...state.cart, { ...action.payload }];
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        increment: (state, {payload}) => {
            const existIncreament = state.cart.find((item) => item?.id === payload?.id);
            // console.log(existIncreament, 'existIncreament');
            existIncreament.quantity = existIncreament.quantity + 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        decrement: (state, {payload}) => {
            const existIncreament = state.cart.find((item) => item?.id === payload?.id);
            // console.log(existIncreament, 'existIncreament');
            existIncreament.quantity = existIncreament.quantity - 1;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
        },
        calculateTotals: (state) => {
            console.log('test', state)
            let quantity = 0;
            let total = 0;
            let netamount = 0;
            state.cart.forEach((item) => {
                quantity += item.quantity;
                console.log('quantity', quantity)
                total += item.quantity * item.price;
                netamount = total;
                // console.log('tax', "total", total * "tax", tax )
                 console.log('netamount', netamount)
            });
            state.quantity = quantity;
            state.total = total;
            state.netamount = netamount;
            localStorage.setItem("cartItems", JSON.stringify(state.cart));    
        },
        setSelectedOption: (state, action) => {
            console.log(action.payload, 'setSelectedOption')
            state.selectedOption = action.payload;
            // const couponName = state.cart.find((item) => item?.id === payload?.id);
            // console.log(couponName, 'coupon')
        },
        applyCoupon: (state, action) => {
            // Perform your coupon price calculation logic here
            const { couponCode } = action.payload;
            state.couponCode = couponCode;
            state.discount = couponCode.discount;
            // let {discount}= couponCode;
            console.log(couponCode, 'coupon applied')
          },
    },
})

// console.log(counterSlice);

// Action creators are generated for each case reducer function
export const { updateCart, increment, decrement, clearCart, removeItem, calculateTotals, setSelectedOption, applyCoupon } = counterSlice.actions

export default counterSlice.reducer
