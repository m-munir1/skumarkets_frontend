import { Box } from '@mui/material';
import LineScrollCount from 'components/common/LineScrollCount';
import { Outlet } from 'react-router';
import SkuFooter from './Footer/SkuFooter';
import SKUHeader from './Header/SKUHeader';

const SkuMarketsLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <SKUHeader />

      <Box component="main">
        <LineScrollCount/>
        <Outlet />
      </Box>
      <SkuFooter />
    </Box>
  );
};

export default SkuMarketsLayout;
