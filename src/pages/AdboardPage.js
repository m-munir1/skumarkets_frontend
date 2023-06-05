import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import AdbaordTab from 'components/adboard/AdbaordTab';
import AdboardControl from 'components/adboard/adboardControl';
import AddCampaignMode from 'components/addCampaignMode';
import BlankWindow from 'components/common/BlankWindow';
import SKUMarquee from 'components/common/marquee';
import { useSettingsContext } from 'components/settings';
import SvgColor from 'components/svg-color/SvgColor';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
const TABS = [
  { id: 1, tab: 'Overview', label: 'Overview' },
  { id: 2, tab: 'Insights', label: 'Insights' },
  { id: 3, tab: 'Audiences', label: 'Audiences' },
  { id: 4, tab: 'Partner Store', label: 'Partner Store' },
];

const AdboardPage = () => {
  const [test, setTest] = useState(false);
  const { themeStretch } = useSettingsContext();
  const [tab, setTab] = useState('Overview');
  const [collapsible, setCollapsible] = useState(true);
  const { addCampaignMode } = useSelector((state) => state.adboard);
  return (
    <>
      <Helmet>
        <title> Adboard | SKU Markets</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <SKUMarquee />
        <Stack direction="row" justifyContent="space-between" sx={{ my: 3 }}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <SvgColor
              src="/assets/icons/navbar/ic_ads.svg"
              sx={{ width: '25px', height: '25px' }}
            />
            <Typography>AdBoard</Typography>
          </Stack>
        </Stack>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={collapsible ? 3.3 : 0.5}
            sx={{ position: 'relative', transition: '.4s linear' }}
          >
            <AdboardControl
              collapsible={collapsible}
              setCollapsible={setCollapsible}
              setTest={setTest}
            />
          </Grid>
          {!addCampaignMode ? (
            <Grid item xs={12} md={collapsible ? 8.7 : 11.5} sx={{ transition: '.4s linear' }}>
              {test ? (
                <>
                  <AdbaordTab tab={tab} setTabs={setTab} TABS={TABS} />
                  <Box>
                    <Grid container spacing={2} sx={{ position: 'relative' }}>
                      {tab === 'Overview' && (
                        <>
                          <Grid item lg={12} md={12} xs={12}>
                            Overview
                          </Grid>
                        </>
                      )}
                      {tab === 'Insights' && (
                        <>
                          <Grid item lg={12} md={12} xs={12}>
                            Insights
                          </Grid>
                        </>
                      )}
                      {tab === 'Audiences' && (
                        <>
                          <Grid item lg={12} md={12} xs={12}>
                            Audiences
                          </Grid>
                        </>
                      )}
                      {tab === 'Partner Store' && (
                        <>
                          <Grid item lg={12} md={12} xs={12}>
                            Partner Store
                          </Grid>
                        </>
                      )}
                    </Grid>
                  </Box>
                </>
              ) : (
                <BlankWindow
                  title="You don't have any partner stores or campaigns yet"
                  description="You can add upto 3 partner stores and unlimited campaigns"
                />
              )}
            </Grid>
          ) : (
            <>
              {addCampaignMode && (
                <Grid item xs={12} md={collapsible ? 8.7 : 11.5} sx={{ transition: '.4s linear' }}>
                  <AddCampaignMode />
                </Grid>
              )}
            </>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default AdboardPage;
