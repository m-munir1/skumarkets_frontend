import { Typography } from '@mui/material';
import MPLogo from 'components/common/MPLogo';
import SkuColumn from 'components/common/TableColumns/SkuColumn';

const columns = [
  {
    field: 'id',
    hide: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'sku',
    headerName: 'SKU',
    align: 'center',
    headerAlign: 'center',
    width: 180,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: ({ row }) => <SkuColumn row={row} />,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'marketplace',
    headerName: 'Marketplace',
    align: 'center',
    headerAlign: 'center',
    renderCell: ({ row }) => <MPLogo marketplace={row?.sku_marketplace} />,
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'category',
    type: 'number',
    headerName: 'Category',
    align: 'center',
    headerAlign: 'center',
    width: 120,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'brands',
    type: 'number',
    headerName: 'Brand',
    align: 'center',
    headerAlign: 'center',
    width: 90,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'current_price',
    type: 'number',
    headerName: 'BuyBox Sale Price',
    align: 'center',
    headerAlign: 'center',
    width: 135,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'price_change',
    type: 'number',
    headerName: 'Chg 24H',
    align: 'center',
    headerAlign: 'center',
    width: 80,
    headerClassName: 'super-app-theme--header',
    renderCell: ({ row }) => (
      <Typography
        sx={{
          color: row?.price_change > 0 ? 'success.main' : 'error.main',
        }}
      >
        {row?.price_change} %
      </Typography>
    ),
  },
  {
    field: 'max',
    type: 'number',
    headerName: 'Max Offer Price',
    align: 'center',
    headerAlign: 'center',
    width: 140,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'min',
    type: 'number',
    headerName: 'Min Offer Price',
    align: 'center',
    headerAlign: 'center',
    width: 140,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'status',
    type: 'number',
    headerName: 'SKU Status',
    align: 'center',
    headerAlign: 'center',
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'buybox',
    type: 'number',
    headerName: 'Buy Box Sale Price',
    align: 'center',
    headerAlign: 'center',
    width: 150,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'chg',
    type: 'number',
    headerName: 'Chg 24H',
    align: 'center',
    headerAlign: 'center',
    width: 100,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'max_investment',
    type: 'number',
    headerName: 'Max Investment',
    align: 'center',
    headerAlign: 'center',
    width: 130,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'min_investment',
    type: 'number',
    headerName: 'Min Investment',
    align: 'center',
    headerAlign: 'center',
    width: 130,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'est',
    type: 'number',
    headerName: 'Estimated SOH',
    align: 'center',
    headerAlign: 'center',
    width: 150,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'est24',
    type: 'number',
    headerName: 'Sales volume L 24 H',
    align: 'center',
    headerAlign: 'center',
    width: 200,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'demand',
    type: 'number',
    headerName: 'Demand %',
    align: 'center',
    headerAlign: 'center',
    width: 90,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'supply',
    type: 'number',
    headerName: 'Supply %',
    align: 'center',
    headerAlign: 'center',
    width: 80,
    headerClassName: 'super-app-theme--header',
  },
];

export default columns;
