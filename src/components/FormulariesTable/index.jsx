import * as React from 'react';
import { styled } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useHistory } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  cursor: 'pointer',
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function FormulariesTable({list}) {

  const history = useHistory();

  const handleClick = (solicitacaoId) => {
    history.push(`/relatorio-de-atividades/${solicitacaoId}`)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" >Tipo</StyledTableCell>
            <StyledTableCell align="left" >Status</StyledTableCell>
            <StyledTableCell align="left" >Data&nbsp;de&nbsp;Criação</StyledTableCell>
            <StyledTableCell align="left" >Início Interstício</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            
              <StyledTableRow key={row.id} onClick={() => handleClick(row.id)}>
                <StyledTableCell align="left">{row.type}</StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">{new Date(row.createdAt).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell align="left">{new Date(row.from).toLocaleDateString()}</StyledTableCell>
              </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}