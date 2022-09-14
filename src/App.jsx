import { useEffect, lazy, Suspense } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from "react-router-dom";
import PrivateRoute from 'hocs/PrivateRoute';
import PublicRoute from 'hocs/PublicRoute';
import { authOperations } from 'redux/auth';
import  {useAuth } from 'hooks';
import { SharedLayout } from 'layout/SharedLayout'; 

const  Home  = lazy(() => import("pages/Home/Home"));
const  Register  = lazy(() => import("pages/Register/Register"));
const  Login  = lazy(() => import("pages/Login/Login"));
const  Contacts  = lazy(() => import("pages/Contacts/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PublicRoute component={<Home />} />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Login />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  
  );
};

