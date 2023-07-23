import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../hook/useAxiosPrivate"


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";


function CapitalAccount(params) {
    const [rows, setRows] = useState([])
    const axiosPrivate = useAxiosPrivate()


    const getCapitalTransactions = async (page, count) => {
        const data = await getCapitalTransactions(page, count)
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axiosPrivate.get("/api/accounts/capital")
                console.log("response", response);


            } catch (error) {
                console.log("test", error);
            }
        }

        fetch()

    }, [])






    return <Container>
        <Grid2 container>
            <Grid2 xl={12} lg={12} md={12} sm={12} xs={12} >

                <br />

                {/* Account Details */}


                <TableContainer component={Paper} sx={{ width: "500px" }} >
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5">Account Name</Typography>
                                </TableCell>
                                <TableCell >Capital</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                                key="one"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Debit
                                </TableCell>
                                <TableCell align="right">50000 EGP</TableCell>
                            </TableRow>

                            <TableRow
                                key="two"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Debit
                                </TableCell>
                                <TableCell align="right">50000 EGP</TableCell>
                            </TableRow>

                            <TableRow
                                key="three"
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Total
                                </TableCell>
                                <TableCell align="right">100000 EGP</TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>


                {/* Account Transactions */}
                <br /><br /><br />

                <Typography variant="h5" style={{ marginBottom: 10 }}>Transactions</Typography>

                <TableContainer component={Paper} style={{ textAlign: "center" }}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{}}>Details</TableCell>
                                <TableCell align="right" style={{ textAlign: "center" }} >Debit</TableCell>
                                <TableCell align="right" style={{ textAlign: "center" }}>Credit</TableCell>
                                <TableCell align="right" style={{ textAlign: "center" }}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        Details of Transactions
                                    </TableCell>
                                    <TableCell align="right" style={{ textAlign: "center" }}>1000150.05 EGP</TableCell>
                                    <TableCell align="right" style={{ textAlign: "center" }}>1000150.05 EGP</TableCell>
                                    <TableCell align="right" style={{ textAlign: "center" }}>1000150.05 EGP</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Grid2>
        </Grid2>


    </Container>
}

export default CapitalAccount