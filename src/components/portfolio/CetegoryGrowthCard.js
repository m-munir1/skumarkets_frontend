import RepeatIcon from '@mui/icons-material/Repeat';
import { Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import MPLogo from 'components/common/MPLogo';
import {
  targetCategoryForDetailView,
  toggleIsCategoryDetailMode,
} from 'features/portfolio/portfolioSlice';
import { BiNetworkChart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const CategoryGrowthsCard = () => {
  const dispatch = useDispatch();
  const handleOpenDetailView = () => {
    dispatch(targetCategoryForDetailView('Grocery'));
    dispatch(toggleIsCategoryDetailMode());
  };
  return (
    <Card sx={{ p: 3, boxShadow: 5 }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <MPLogo marketplace="noon/ksa" />
        <IconButton onClick={handleOpenDetailView} size="small" aria-label="details">
          <RepeatIcon sx={{ color: '#0D6EFD' }} fontSize="inherit" />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 3 }}>
        <BiNetworkChart size="3rem" color="#0052FF" />
        <Stack>
          <Typography
            component={Link}
            fontSize="16px"
            to="#"
            sx={{ textDecoration: 'none', color: 'primary.main' }}
          >
            Category Name
          </Typography>
          <Typography fontSize="16px">50</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Typography fontSize="16px">Live SKUs</Typography>
        <Typography fontSize="16px">1500</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Typography fontSize="16px">Not Live SKUs</Typography>
        <Typography fontSize="16px">70</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Typography fontSize="16px">Brands</Typography>
        <Typography fontSize="16px">60</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Typography fontSize="16px">Types</Typography>
        <Typography fontSize="16px">50</Typography>
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
        <Typography fontSize="16px">Sub Types</Typography>
        <Typography fontSize="16px">200</Typography>
      </Stack>
      <Divider />
    </Card>
  );
};

export default CategoryGrowthsCard;
