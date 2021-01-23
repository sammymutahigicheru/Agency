import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper'; //white box

class TableView extends Component{
    render(){
        const {rows,columns} = this.props;
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns ?
                                columns.map((col,i) =>{
                                    return(
                                        <TableCell></TableCell>
                                    )
                                })
                            : null}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows ?
                            rows.map((row,i) =>{
                                return (
                                    <TableCell>
                                        {}
                                    </TableCell>
                                )
                            })
                        : null}
                    </TableBody>

                </Table>
            </Paper>
        )
    }
}
