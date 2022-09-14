import { Outlet } from 'react-router-dom';
import AppBar from 'layout/common/AppBar';
import { Box } from './common/Box'; 
import { Suspense } from 'react';


  export const SharedLayout = () => {
    return (
      <Box>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    );
};