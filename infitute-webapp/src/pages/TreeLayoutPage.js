import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TreeView from '../components/TreeView';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridView() {
  const [selectedItem, setSelectedItem] = useState("Nothing is selected");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>xs=4</Item>
          <TreeView onSelectCallback={(item, tree) => {
            console.log("Call back in TreeLayoutPage", item, tree);
            item && setSelectedItem(item.index);
          }}/>
        </Grid>
        <Grid item xs={8}>
          <Item>{selectedItem}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
