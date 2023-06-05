import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { toggleCampaignMode } from 'features/adboard/adboardSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ObjectiveSelection from './ObjectiveSelection';

const AddCampaignMode = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [selectedObjective , setSelectedObjective] = useState({})
  return (
    <Box sx={{ mt: '-10px' }}>
      {/* top */}
      <Box width="100px">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.8}
          onClick={() => dispatch(toggleCampaignMode())}
          variant="contained"
          sx={{
            py: '5px',
            fontSize: '15px',
            backgroundColor: theme.palette.mode === 'dark' ? '#212B36' : '#EFF2F5',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ fontSize: '16px' }}>Cencel</Typography>
        </Stack>
      </Box>
      {/* body */}
      <>
      <ObjectiveSelection setSelectedObjective={setSelectedObjective} selectedObjective={selectedObjective}/>
      </>
      {/* bottom */}
      <Stack direction="row" justifyContent="end" alignItems="center">
        <Button
          sx={{
            bgcolor: 'primary.main',
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'white',
              color: (theme) => (theme.palette.mode === 'light' ? 'primary.main' : 'primary.main'),
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
            },
            width: 120,
          }}
        >
          Next
        </Button>
      </Stack>
    </Box>
  );
};

export default AddCampaignMode;
