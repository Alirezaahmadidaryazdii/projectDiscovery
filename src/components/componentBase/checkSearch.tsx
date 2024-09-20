import React, { useState } from 'react';
import { Box, Button, Grid, Stack, SelectChangeEvent } from '@mui/material';
import SearchPart1 from '../BodyComponent/componentPart1.tsx/searchPart1';
import SelectReusable from './selecetCustom';
import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import theme from '../theme';

interface SelectOption {
  value: string;
  label: string;
}

interface CheckSearchProps {
  option1: SelectOption[];
  option2: SelectOption[];
}

const CheckSearch: React.FC<CheckSearchProps> = ({ option1, option2 }) => {
  const [selectedValue, setSelectedValue] = useState<string>('all');
  const [selectedValue2, setSelectedValue2] = useState<string>('all');

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedValue(event.target.value);
  };

  const handleChange2 = (event: SelectChangeEvent<string>) => {
    setSelectedValue2(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={7}>
        <Box sx={{ px: 2 }}>
          <SearchPart1 width={'100%'} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
          <SelectReusable
            label="source"
            value={selectedValue}
            options={option1}
            onChange={handleChange}
          />
          <SelectReusable
            label='Status'
            value={selectedValue2}
            options={option2}
            onChange={handleChange2}
          />
          <Button
            disabled
            size="large"
            variant="contained"
            sx={{ bgcolor: theme.palette.background.paper, color: 'white' }}
          >
            <DeleteIcon sx={{ fontSize: 30 }} />
          </Button>
          <Button
            size='large'
            variant="contained"
            sx={{ bgcolor: theme.palette.background.paper, color: 'white' }}
          >
            <SyncIcon sx={{ fontSize: 30 }} />
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CheckSearch;
