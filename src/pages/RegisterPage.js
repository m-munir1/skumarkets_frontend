import EmailConfirmation from 'pages/EmailConfirmation';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RegistrationAddress from 'sections/auth/registration/RegistrationAddress';
import RegistrationPolicy from 'sections/auth/registration/RegistrationPolicy';
import BusinessInfo from 'sections/auth/registration/BusinessInfo';
import Welcome from 'sections/auth/registration/Welcome';
import SignUp from 'sections/auth/registration/SignUp';
import SignupPayment from 'sections/auth/registration/SignupPayment';

import logo from 'assets/images/logo2.png';
import { CustomAvatar } from 'components/custom-avatar';
import { Helmet } from 'react-helmet-async';

import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Container, Grid, IconButton, Stack, Typography } from '@mui/material';

import ApiBase from 'app/ApiBase';
import { logout } from 'features/auth/authSlice';
import { removeInfo } from 'features/billingInfo/billingInfoSlice';
import { useGetUserQuery } from 'features/auth/authAPI';

import { addMessage } from 'features/message/messageSlice';
import useAuth from 'hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import RegistrationDocs from '../sections/auth/registration/RegistrationDocs';

// ----------------------------------------------------------------------

const steps = [
  { no: 1, title: 'SignUp', description: 'Create a new account' },
  { no: 2, title: 'Verification', description: 'Email Verification' },
  { no: 3, title: 'Address', description: 'Enter address details' },
  { no: 4, title: 'Agreement', description: 'Accepting policies' },
  { no: 5, title: 'Business Info', description: 'Enter some business Information' },
  { no: 6, title: 'Payment', description: 'Provide your payment information' },
  { no: 7, title: 'Documents', description: 'Upload Necessary Documents' },
];

let defaultStep = 0;

export default function RegisterPage() {
  const user = useAuth();
  const { defaultAddress } = useSelector(state => state.billingInfo);
  useGetUserQuery('', {skip: user?.email ? false : true});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Conditions to redirect to different steps/pages
  const { commercial, vat, national, bank, brand } = user?.docs || {};

  useEffect(() => {
    if (user?.status === 'active') {
    navigate('/');
    } else if (user?.isProfileComplete) {
      navigate('/activation-process');
    }
  }, [navigate, user.docs, user.status]);

  if (commercial?.value && vat?.value && national?.value && bank?.value && user?.delivery_method) {
    defaultStep = 7;
  } else if (user?.defaultCurrency?.value) {
    defaultStep = 6;
  } else if (user?.agreement?.policies && user?.agreement?.manager && user?.agreement?.seller_type) {
    defaultStep = 5;
  } else if (defaultAddress) {
    defaultStep = 4;
  } else if (user?.isEmailVerified) {
    defaultStep = 3;
  } else if (user?.email) {
    defaultStep = 2;
  }

  const [currentStep, setCurrentStep] = useState(defaultStep);

  // Handle Log Out
  const handleLogout = async () => {
    try {
      dispatch(logout());
      dispatch(removeInfo());
      dispatch(ApiBase.util.resetApiState());

      dispatch(
        addMessage({
          message: 'Logout successful',
          type: 'error',
        })
      );

      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Helmet>
        <title> Register | SKU Market</title>
      </Helmet>

      { currentStep === 0 ? (
        <Welcome setCurrentStep={setCurrentStep} />
      ) : (<Grid container sx={{ height: '100vh', position: 'relative' }}>
        {/* ---------------- Left Side ---------------- */}
        <Grid item xs={0} md={4} lg={3.5} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            sx={{
              position: 'sticky',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              background: `linear-gradient(45deg, #003768, #091A7A, #0d3b99)`,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{ color: 'white', textDecoration: 'none', m: 5, mb: 8 }}
                component={Link}
                to="/"
              >
                <Box component="img" src={logo} alt="logo" sx={{ width: '40px', height: '40px' }} />
                <Typography variant="h5" sx={{ lineHeight: 0.95 }}>
                  SKU <br /> Markets
                </Typography>
              </Stack>

              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                sx={{ color: 'white', px: 2 }}
              >
                {steps?.map((step) => {
                  const activeStep = step?.no === currentStep;
                  return (
                    <Button
                      key={step?.no}
                      disableRipple
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: '100%',
                        gap: 1,
                        px: 2,
                        py: 1.5,
                        bgcolor: activeStep ? '#1562ff33' : 'transparent',
                        '&:hover': { bgcolor: activeStep ? '#1562ff33' : 'transparent' },
                      }}
                    >
                      <Box
                        sx={{
                          width: '30px',
                          height: '30px',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: 15,
                          color: 'primary.main',
                          bgcolor: 'white',
                          borderRadius: '50%',
                        }}
                      >
                        {step?.no}
                      </Box>
                      <Box sx={{ textAlign: 'left' }}>
                        <Typography variant="subtitle1" sx={{ color: 'white' }}>
                          {step?.title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '13px', color: '#aaa' }}>
                          {step?.description}
                        </Typography>
                      </Box>
                    </Button>
                  );
                })}
              </Stack>
            </Box>

            {user?.email && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{ bgcolor: '#1562ff33', py: 1, px: 2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CustomAvatar src={user?.avatar} alt={user?.name} name={user?.name} />
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="subtitle1" sx={{ color: 'white' }}>
                      {user?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '13px', color: '#aaa' }}>
                      {user?.email}
                    </Typography>
                  </Box>
                </Box>
                <IconButton aria-label="Log Out" sx={{ color: 'white' }} onClick={handleLogout}>
                  <LogoutIcon />
                </IconButton>
              </Stack>
            )}
          </Box>
        </Grid>

        {/* ----------- Right Side ----------- */}
        <Grid item xs={12} md={8} lg={8.5}>
          <Container maxWidth="lg">
            <Stack direction="row" justifyContent="flex-end" sx={{ py: 4 }}>
              <Box
                component={Link}
                to="/help_center"
                sx={{
                  color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 600,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Need Help?
              </Box>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='center' sx={{width: '100%'}}>
              {currentStep === 1 ? (
                <Box sx={{ width: { xs: '98%', md: '60%' }, mx: 'auto' }}>
                  <SignUp setCurrentStep={setCurrentStep} />
                </Box>
              ) : currentStep === 2 ? (
                <EmailConfirmation />
              ) : currentStep === 3 ? (
                <RegistrationAddress setCurrentStep={setCurrentStep} />
              ) : currentStep === 4 ? (
                <RegistrationPolicy setCurrentStep={setCurrentStep} />
              ) : currentStep === 5 ? (
                <BusinessInfo setCurrentStep={setCurrentStep} />
              ) : currentStep === 6 ? (
                <SignupPayment setCurrentStep={setCurrentStep} />
              ) : currentStep === 7 ? (
                <RegistrationDocs setCurrentStep={setCurrentStep} />
              ) : null}
            </Stack>
          </Container>
        </Grid>
      </Grid>)}
    </>
  );
}
