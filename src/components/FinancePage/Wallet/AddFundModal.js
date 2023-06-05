import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { lightGray } from 'components/sellerboard/rfq/new/SellTable';
import { modalStyle } from 'components/sellerboard/sellerboardAlerts/ConfirmationAlert';
import { useState } from 'react';
import TrasactionConfirmModal from './TransactionConfirmDialog';

const AddFundModal = ({ open, handleClose }) => {
  const [amount, setAmount] = useState(null);

  const handleSetAmount = (e) => {
    setAmount(e.target.value);
  };

  const [openConfirm, setOpenConfirm] = useState(false);

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New Fund
            </Typography>
            <IconButton sx={{ color: 'text.main' }} onClick={handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Box>
          <Divider />
          <Box sx={{ my: 2 }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
              sx={{ mt: 2 }}
            >
              <Typography variant="subtitle1">Specify your amount</Typography>
              <TextField
                size="small"
                name="amount"
                label="Amount"
                value={amount}
                onChange={handleSetAmount}
                required
              />
            </Stack>

            {/* show information's by default currency */}

            <Stack spacing={1} sx={{ my: 3 }}>
              <Typography variant="h6">Bank Transfer to SKU Markets Wallet</Typography>
              <Divider />
              <Stack>
                <Typography variant="subtitle1">Beneficiency Name</Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: '18px', textTransform: 'uppercase' }}
                >
                  Abdul Malek Khan Soud
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="subtitle1">IBAN</Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ fontSize: '18px' }}>
                    SA1554456565565465464565
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: '18px', cursor: 'pointer', color: lightGray }}
                  >
                    Copy
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography variant="subtitle2">Account Number</Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1" sx={{ fontSize: '18px' }}>
                    98464895556655
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontSize: '18px', cursor: 'pointer', color: lightGray }}
                  >
                    Copy
                  </Typography>
                </Stack>
              </Stack>
              <Divider />
            </Stack>
          </Box>
          <Box sx={{ textAlign: 'end', my: 2 }}>
            <Button
              variant="outlined"
              sx={{
                color: 'text.main',
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              sx={{
                bgcolor: 'primary.main',
                border: (theme) => `1px solid ${theme.palette.primary.main}`,
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '&:hover': {
                  bgcolor: 'white',
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.main',
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                },
                mx: 2,
              }}
              // disabled={isLoading}
              onClick={handleOpenConfirm}
            >
              Add Fund
            </Button>
            <TrasactionConfirmModal
              open={openConfirm}
              amount={amount}
              onClose={handleCloseConfirm}
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddFundModal;
