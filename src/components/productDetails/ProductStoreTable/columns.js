const columns = [
  {
    field: 'id',
    hide: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'store_name',
    headerName: 'Store Name',
    align: 'center',
    headerAlign: 'center',
    width: 155,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'store_offer_price',
    headerName: 'Offer Price',
    align: 'center',
    headerAlign: 'center',
    width: 125,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_soh',
    type: 'number',
    headerName: 'SOH',
    align: 'center',
    headerAlign: 'center',
    width: 155,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_cap',
    type: 'number',
    headerName: 'Store GMV',
    align: 'center',
    headerAlign: 'center',
    width: 155,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_fulfilment_type',
    type: 'number',
    headerName: 'Fulfillment Type',
    align: 'center',
    headerAlign: 'center',
    width: 175,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_offer_rank',
    type: 'number',
    headerName: 'Offer Rank',
    align: 'center',
    headerAlign: 'center',
    width: 115,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_rating',
    type: 'number',
    headerName: 'Store Rate',
    align: 'center',
    headerAlign: 'center',
    width: 125,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: 'store_share_percent',
    type: 'number',
    headerName: 'Store Share',
    align: 'center',
    headerAlign: 'center',
    width: 125,
    renderCell: (params) => {
      return <span style={{ color: '#0d6efd' }}>{`${params.value} %`}</span>;
    },
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
  {
    field: '',
    type: 'number',
    headerName: 'No. of SKUs for Same Brand',
    align: 'center',
    headerAlign: 'center',
    width: 220,
    headerClassName: 'super-app-theme--header',
    sortable: false,
    filterable: true,
    disableColumnMenu: true,
  },
];

export default columns;
