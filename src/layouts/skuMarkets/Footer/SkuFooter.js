import { Box, Divider, Stack, Typography, useTheme } from '@mui/material';
import {
  AiFillApple,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineWhatsApp, 
  AiFillYoutube
} from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SkuMarketLogo from '../../../assets/images/svg/SKU-Market-Logo.svg';
import FooterBottom from './FooterBottom';

const SkuFooter = () => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={{xs:"column", md:"row", lg:"row"}}
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        sx={{ mt: 3, py: 1 }}
      >
        <Box sx={{ minHeight: {md:'220px', lg:"220px", xs:"auto"} }}>
          <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>ABOUT</Typography>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Who is SKU Markets
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Why we need to use SKU Markets
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              What is the main core and idea of SKU Markets
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              SKU Markets Policies
            </Box>
          </Stack>
        </Box>
        <Box sx={{ minHeight: {md:'220px', lg:"220px", xs:"auto"} }}>
          <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>HELP</Typography>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Managing Your Account
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Request New stock
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Payments
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Shipments
            </Box>
          </Stack>
        </Box>
        <Box sx={{ minHeight: {md:'220px', lg:"220px", xs:"auto"} }}>
          <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>POLICY</Typography>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Terms and Conditions
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Problem with the Product
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Guarantees and Assurances
            </Box>
            <Box
              component={Link}
              to="help_center"
              sx={{
                textDecoration: 'none',
                color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'white'),
                fontSize: '13px',
                '&:hover': {
                  color: '#0d6efd'
                },
              }}
            >
              Return & Refund
            </Box>
          </Stack>
        </Box>
        <Box sx={{ minHeight: {md:'220px', lg:"220px", xs:"auto"} }}>
          <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>SOCIAL</Typography>
            <Box>
              <a href="https://twitter.com/SKUmarkets" target="_blank" rel="noreferrer">
                <AiOutlineTwitter color="#0d6efd" style={{ fontSize: '2.5em' }} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/company/sku-markets"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin color="#0d6efd" style={{ fontSize: '2.5em' }} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.youtube.com/channel/UC7yfhmbEEzaJgQMKSXZcFNA"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube color="#0d6efd" style={{ fontSize: '2.5em' }} />
              </a>
            </Box>
          </Stack>
        </Box>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          color={theme.palette.mode === 'light' ? 'black' : 'white'}
        />
        <Stack direction="column" justifyContent="space-around" alignItems="center" spacing={1}>
          <Typography sx={{ fontWeight: 'bold', mb: 1 }}>MANAGE ON THE GO</Typography>
          <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={2}>
            <Stack
              component="a"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noreferrer"
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{
                background: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#212B36'),
                color: (theme) => (theme.palette.mode === 'dark' ? '#212B36' : '#fff'),
                pt: 0.3,
                borderRadius: 1,
                textDecoration: 'none',
              }}
            >
              <Box>
                <AiFillApple style={{ fontSize: '2.2em' }} />
              </Box>
              <Box sx={{ pr: 3 }}>
                <Typography variant="caption" sx={{ fontSize: '10px' }} component="div">
                  Download on the
                  <Typography sx={{ fontSize: '15px', pt: 0 }}>App Store</Typography>
                </Typography>
              </Box>
            </Stack>
            <Stack
              component="a"
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noreferrer"
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{
                background: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#212B36'),
                color: (theme) => (theme.palette.mode === 'dark' ? '#212B36' : '#fff'),
                pt: 0.5,
                pb: 0,
                borderRadius: 1,
                textDecoration: 'none',
              }}
            >
              <Box sx={{ pl: 0.5 }}>
                <FaGooglePlay style={{ fontSize: '2.2em' }} />
              </Box>
              <Box sx={{ pr: 3 }}>
                <Typography variant="caption" sx={{ fontSize: '10px' }} component="div">
                  GET IN ON
                </Typography>
                <Typography sx={{ fontSize: '15px', pt: 0 }}>Google Play</Typography>
              </Box>
            </Stack>
          </Stack>
          <Typography sx={{ textAlign: 'center', mb: 1, fontWeight:'bold' }}>CONTACT US</Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
            <Box>
              <a href="mailto:support@skumarkets.com" target="_blank" rel="noreferrer">
                <AiOutlineMail color="#0d6efd" style={{ fontSize: '2.5em' }} />
              </a>
            </Box>
            <Box>
              <a
                href="https://api.whatsapp.com/send?phone=966570044545"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp color="#0d6efd" style={{ fontSize: '2.5em' }} />
              </a>
            </Box>
          </Stack>
          <img height={50} style={{ width: '150px' }} src={SkuMarketLogo} alt="" />
        </Stack>
      </Stack>
      <Box sx={{ py: 2 }}>
        <Divider />
      </Box>
      <FooterBottom />
    </>
  );
};

export default SkuFooter;
