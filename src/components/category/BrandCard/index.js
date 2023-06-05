import { Box, Card, Divider, Grid, Pagination, TablePagination } from '@mui/material';
import { useState } from 'react';
import Header from './Header';
import { useParams } from 'react-router';
import LoadingScreen from 'components/loading-screen/LoadingScreen';
import { pageSize } from 'components/dashboard/varables';
import { useTopBrandsQuery } from 'features/brand/brandAPI';
import BrandCard from 'components/common/BrandCard';

const BranCards = () => {
 
  const { category } = useParams();

  const [page, setPage] = useState(1);
  const query = `page=${page}&limit=${pageSize}&category=${category}`;
  const { data, isFetching, isLoading } = useTopBrandsQuery(query);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  if (isFetching || isLoading) {
    return <LoadingScreen />;
  }
  return (
    <Card>
      <Header />
      <Grid container spacing={2} sx={{ p: 3 }}>
      {data?.data?.map((p, i) => (
          <Grid key={i} item xs={12} md={6} lg={3}>
            <BrandCard data={p} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}>
          <Pagination
            count={Math.ceil(data?.total / pageSize) || 0}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </Box>
      </Grid>
    </Card>
  );
};

export default BranCards;
