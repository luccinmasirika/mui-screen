import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CustomTable = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary[50],
  borderRadius: 0,
  minHeight: 450,
  boxShadow: 'none',
}));

const CustomTableHead = styled(TableHead)(({ theme }) => ({
  '& .MuiTableCell-root': {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const CustomTableBody = styled(TableBody)(({ theme }) => ({
  '& th.MuiTableCell-root, td.MuiTableCell-root': {
    borderBottom: 0,
    color: theme.palette.primary.main,
  },
}));

const Actions = styled(TableCell)({
  width: 120,
});

const ActionsButtons = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const CustomersList = () => {
  const rows = [
    { id: 1, name: 'Random User', url: 'http://localhost:3000/xamakeapq' },
    { id: 2, name: 'Random User', url: 'http://localhost:3000/garaktarw' },
    { id: 3, name: 'Random User', url: 'http://localhost:3000/wamksaape' },
  ];

  return (
    <TableContainer component={CustomTable}>
      <Table sx={{ minWidth: 650 }} aria-label='Customers'>
        <CustomTableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>URL</TableCell>
            <TableCell align='center'>Actions</TableCell>
          </TableRow>
        </CustomTableHead>
        <CustomTableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align='center'>
                <FiberManualRecordIcon />
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.url}</TableCell>
              <Actions align='right'>
                <ActionsButtons>
                  <IconButton
                    size='medium'
                    aria-label='Copy url'
                    color='inherit'
                  >
                    <FileCopyIcon />
                  </IconButton>
                  <IconButton
                    size='medium'
                    aria-label='Delete url'
                    color='inherit'
                  >
                    <DeleteIcon />
                  </IconButton>
                </ActionsButtons>
              </Actions>
            </TableRow>
          ))}
        </CustomTableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersList;
