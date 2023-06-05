import { Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useProductSummaryQuery } from 'features/product/productAPI';
import useResponsive from 'hooks/useResponsive';
import { bgBlur } from 'utils/cssStyles';
import MPLogo from './MPLogo';

const TopNav = ({ isOffset }) => {
  const theme = useTheme();
  const isDesktop = useResponsive('up', 'lg');
  const { data } = useProductSummaryQuery();

  if (!isDesktop) return null;
  if (!data) return null;

  return (
    <Stack
      sx={{
        ...(isOffset && {
          ...bgBlur({ color: theme.palette.background.default }),
        }),

        color: (theme) => (theme.palette.mode === 'light' ? 'black' : 'gray.800'),
      }}
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="caption">
        Marketplaces Live SKUs: <span style={{ fontWeight: 'bolder' }}> {data?.live}</span>
      </Typography>
      <Typography variant="caption">
        Fulfilled by Stores: <span style={{ fontWeight: 'bolder' }}>{data?.ff_store}</span>
      </Typography>
      <Typography variant="caption">
        Fulfilled by MP: <span style={{ fontWeight: 'bolder' }}>{data?.ff_mp}</span>
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="caption">Top Dominance Market:</Typography>
        <MPLogo marketplace={data?.marketplace} hight={10} width={30} />
      </Stack>
    </Stack>
  );
};

export default TopNav;
