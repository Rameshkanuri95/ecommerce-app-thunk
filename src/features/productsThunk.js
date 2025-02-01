 // features/productsThunk.js
import { fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure,
  fetchProductStart,
  fetchProductSuccess,
  fetchProductFailure, } from './productsSlice';
import { fetchProducts,fetchProduct } from '../api/api';

export const fetchProductThunk = (id) => async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const product = await fetchProduct(id);
    dispatch(fetchProductSuccess(product));
  } catch (error) {
    dispatch(fetchProductFailure(error.message));
  }
};

export const fetchProductsThunk = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const products = await fetchProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
