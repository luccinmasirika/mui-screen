import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CustomTable = styled(Paper)(({ theme }) => ({
  background: theme.palette.grey.dark,
  borderRadius: 6,
  minHeight: 410,
  boxShadow: 'none',
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
  '& .MuiTableCell-root': {
    borderBottom: '1px solid #000',
    color: theme.palette.grey.secondary,
    padding: theme.spacing(2),
    fontSize: 12,
  },
}));

const CustomTableBody = styled(TableBody)({
  '& th.MuiTableCell-root, td.MuiTableCell-root': {
    borderBottom: 0,
    color: '#fff',
  },
});

const StatusIcon = styled(FiberManualRecordIcon)(({ theme }) => ({
  color: theme.palette.lightGreen.main,
}));

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.grey.darkLight,
  borderRadius: theme.spacing(2),
}));

const CustomersList = () => {
  const rows = Array(5)
    .fill(null)
    .map((el, i) => {
      return {
        id: 1,
        name: `Random User ${i + 1}`,
        url: `http://localhost:3000/xamakea${
          Math.floor(Math.random() * (9999 - 1000)) + 1000
        }`,
      };
    });

  return (
    <TableContainer component={CustomTable}>
      <Table sx={{ minWidth: 650 }} aria-label='Customers' size='small'>
        <CustomTableHead>
          <TableRow>
            <TableCell align='center'>Status</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>URL</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </CustomTableHead>
        <CustomTableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center'>
                <StatusIcon fontSize='small' />
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell align='center'>
                <Stack
                  direction='row'
                  justifyContent='center'
                  alignItems='center'
                  spacing={2}
                >
                  <CustomIconButton aria-label='Copy url' color='inherit'>
                    <ContentCopyIcon fontSize='small' />
                  </CustomIconButton>
                  <CustomIconButton aria-label='Delete url' color='error'>
                    <DeleteOutlineIcon fontSize='small' />
                  </CustomIconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersList;
