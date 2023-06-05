import { Autocomplete, CardHeader, InputAdornment, Link, Stack, Typography } from '@mui/material';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { CustomTextField } from 'components/custom-input';
import Iconify from 'components/iconify/Iconify';
import Image from 'components/image/Image';
import SearchNotFound from 'components/search-not-found/SearchNotFound';
import { useState } from 'react';

const Header = () => {
  const [searchCategory, setSearchCategory] = useState('');

  const [searchResults, setSearchResults] = useState([]);
  return (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ sm: 'center' }}
      justifyContent="space-between"
      sx={{ px: 5}}
    >
      <CardHeader title="Top Ranked Categories" sx={{ mb: 2 }} />
      <Autocomplete
        size="small"
        autoHighlight
        popupIcon={null}
        options={searchResults}
        getOptionLabel={(product) => product.name}
        noOptionsText={<SearchNotFound query={searchCategory} />}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        componentsProps={{
          popper: {
            sx: {
              width: `280px !important`,
            },
          },
          paper: {
            sx: {
              '& .MuiAutocomplete-option': {
                px: `8px !important`,
              },
            },
          },
        }}
        renderInput={(params) => (
          <CustomTextField
            {...params}
            width={220}
            placeholder="Search Category"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ ml: 1, color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          />
        )}
        renderOption={(props, product, { inputValue }) => {
          const { name, cover } = product;
          const matches = match(name, inputValue);
          const parts = parse(name, matches);

          return (
            <li {...props}>
              <Image
                alt={cover}
                src={cover}
                sx={{ width: 48, height: 48, borderRadius: 1, flexShrink: 0, mr: 1.5 }}
              />

              <Link underline="none">
                {parts.map((part, index) => (
                  <Typography
                    key={index}
                    component="span"
                    variant="subtitle2"
                    color={part.highlight ? 'primary' : 'textPrimary'}
                  >
                    {part.text}
                  </Typography>
                ))}
              </Link>
            </li>
          );
        }}
      />
    </Stack>
  );
};

export default Header;
