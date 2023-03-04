import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useParams } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import SingleUser from '../features/userPage/SingleUser';
import { fetchSingleUser } from '../features/userPage/userPageSlice';
import EditUser from '../features/editUser/EditUser';
import Home from '../features/home/Home';
import AllProducts from '../features/products/AllProducts';
import SingleProduct from '../features/products/SingleProduct';
import { me } from './store';
import Cart from '../features/cart/Cart';

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(me());
    if (id) {
      dispatch(fetchSingleUser(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vans" element={<AllProducts />} />
          <Route path="/vans/:id" element={<SingleProduct />}/>
          <Route path={`/users/:id`} element={<SingleUser id={id} />} />
          <Route path={`/editUser/:id`} element={<EditUser id={id} />} />
          <Route path={`/cart`} element={<Cart />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path={`/cart`} element={<Cart />} />
          <Route path="/vans" element={<AllProducts />} />
          <Route path="/vans/:id" element={<SingleProduct />}/>
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
