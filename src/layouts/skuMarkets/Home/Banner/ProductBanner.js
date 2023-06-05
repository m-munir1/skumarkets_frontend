import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import AnimatedGradiantText from 'components/common/AnimatedGradiantText';
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/images/home-banner/mega-Deal-1.jpg';
import ramadanOffer from '../../../../assets/images/home-banner/ramadan offer.jpg';
const SHOP = [
  {
    label: 'Top-rated Products',
    sublabel: 'Get the best at the best prices',
    image:
      'https://img.freepik.com/free-photo/sales-concept-with-cart-front-orange-shopping-bags_23-2147730837.jpg?w=740&t=st=1676398880~exp=1676399480~hmac=f0b76affa43f7310d8702343f9bf471ab1dc4b85066c59d0b1f05b1e0b7354d7',
  },
  {
    label: 'Bestsellers',
    sublabel: 'Most popular picks',
    image:
      'https://img.freepik.com/free-photo/grocery-cart-with-colourful-gift-boxes_23-2147931188.jpg?w=740&t=st=1676399500~exp=1676400100~hmac=959f5e2bc1d8354f1eb768b99fd8fc4bf7c373e3954c4d64a833ca5ae06f9dbe',
  },
  {
    label: 'New arrivals',
    sublabel: 'Stay up to date',
    image:
      'https://img.freepik.com/free-photo/sales-concept-with-cart-front-orange-shopping-bags_23-2147730837.jpg?w=740&t=st=1676398880~exp=1676399480~hmac=f0b76affa43f7310d8702343f9bf471ab1dc4b85066c59d0b1f05b1e0b7354d7',
  },
  {
    label: 'SKU Brands',
    sublabel: 'Essentials at low prices',
    image:
      'https://img.freepik.com/free-photo/grocery-cart-with-colourful-gift-boxes_23-2147931188.jpg?w=740&t=st=1676399500~exp=1676400100~hmac=959f5e2bc1d8354f1eb768b99fd8fc4bf7c373e3954c4d64a833ca5ae06f9dbe',
  },
];
export const MegaDeal = [
  {
    label: 'Top-rated Products',
    sublabel: 'Get the best at the best prices',
    image: img1,
    destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
  },
  {
    label: 'Bestsellers',
    sublabel: 'Most popular picks',
    image:
      'https://img.freepik.com/free-photo/grocery-cart-with-colourful-gift-boxes_23-2147931188.jpg?w=740&t=st=1676399500~exp=1676400100~hmac=959f5e2bc1d8354f1eb768b99fd8fc4bf7c373e3954c4d64a833ca5ae06f9dbe',
    destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
  },
  {
    label: 'New arrivals',
    sublabel: 'Stay up to date',
    image:
      'https://img.freepik.com/free-photo/sales-concept-with-cart-front-orange-shopping-bags_23-2147730837.jpg?w=740&t=st=1676398880~exp=1676399480~hmac=f0b76affa43f7310d8702343f9bf471ab1dc4b85066c59d0b1f05b1e0b7354d7',
    destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
  },
  {
    label: 'SKU Brands',
    sublabel: 'Essentials at low prices',
    image:
      'https://img.freepik.com/free-photo/grocery-cart-with-colourful-gift-boxes_23-2147931188.jpg?w=740&t=st=1676399500~exp=1676400100~hmac=959f5e2bc1d8354f1eb768b99fd8fc4bf7c373e3954c4d64a833ca5ae06f9dbe',
    destination: '/skuMarket?brand=Apple&marketplace=noon%2Fegypt',
  },
];

const ProductBanner = () => {
  return (
    <>
      <Box sx={{ my: 5, px: 1 }}>
        <Grid container spacing={3}>
          <Grid
            xs={12}
            md={3.8}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              mr: 2,
              boxShadow: 1,
              mb: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 0.5, fontSize: '18px' }}>
              Explore new stock
            </Typography>
            <Grid container spacing={1}>
              {SHOP.map((shop, i) => (
                <Grid item key={i} xs={12} md={6}>
                  <Box sx={{ px: 0.5 }}>
                    <Box
                      component="img"
                      src={shop.image}
                      alt=""
                      height="150px"
                      width="100%"
                      sx={{ borderRadius: 1 }}
                    />
                    <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
                      {shop.label}
                    </Typography>
                    <Typography variant="caption">{shop.sublabel}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', pr: 1 }}>
              <AnimatedGradiantText>Sponsored Ads</AnimatedGradiantText>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={3.8}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              mr: 2,
              boxShadow: 1,
              mb: { xs: 2, sm: 2, md: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 0.5, fontSize: '18px' }}>
              Brands highly demand
            </Typography>
            <Grid container spacing={1}>
              {MegaDeal.map((deal, i) => (
                <Grid key={i} xs={12} md={6}>
                  <Link to={deal.destination} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ px: 0.5 }}>
                      <Box
                        component="img"
                        src={deal.image}
                        alt=""
                        height="150px"
                        width="100%"
                        sx={{ borderRadius: 1 }}
                      />
                      <Typography variant="subtitle1" sx={{ fontSize: '14px' }}>
                        {deal.label}
                      </Typography>
                      <Typography variant="caption">{deal.sublabel}</Typography>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pr: 1 }}>
              <AnimatedGradiantText>Sponsored Ads</AnimatedGradiantText>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4.1}
            sx={{
              height: { md: '510px', xs: 'auto' },
              py: 2,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ pl: 2, pb: 1, fontSize: '18px' }}>
              SKU Markets In focus
            </Typography>
            <Stack direction="column" spacing={2}>
              <Link to="/skuMarket?category=Electronics%20%26%20Mobiles&marketplace=noon%2Fksa">
                <Box
                  component="img"
                  src={ramadanOffer}
                  alt=""
                  height="175px"
                  sx={{ borderRadius: 2, p: 1 }}
                />
              </Link>
              <Typography variant="subtitle1" sx={{ pl: 2, fontSize: '18px' }}>
                SKU Markets In focus
              </Typography>
              <Box
                component="img"
                src="https://f.nooncdn.com/mpcms/EN0002/assets/b8192e91-f1da-4392-bce6-e1e1bdc99116.png"
                alt=""
                height="175px"
                sx={{ borderRadius: 2, p: 1 }}
              />
            </Stack>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                pr: 1,
                pt: 1,
              }}
            >
              <AnimatedGradiantText>Sponsored Ads</AnimatedGradiantText>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductBanner;
