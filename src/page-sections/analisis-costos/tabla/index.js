import React, { Fragment } from 'react'
import { useRouter } from 'next/router';
// States
import { useSnapshot } from 'valtio';
import { costosStates, initialTableValues } from "page-sections/analisis-costos/states";
import { pushShallowQuery } from 'helpers/routing';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Table from 'components/Table/Table.js'
import { TablePagination } from '@material-ui/core';

import style from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js'
import { theme } from 'styled/custom-theme';


const useStyles = makeStyles(style)

const TablaAnalisisCostos = () => {
  const classes = useStyles()
  const { tableValues, filtered_items } = useSnapshot(costosStates)
  const Router = useRouter()

  const handleChangePage = (event, newPage) => {
    costosStates.tableValues.tablePage = newPage
    pushShallowQuery(Router, { tablePage: newPage }, initialTableValues)
  };

  const handleChangeRowsPerPage = (event) => {
    costosStates.tableValues.rowsPerPage = parseInt(event.target.value, 10)
    costosStates.resetPage()
    pushShallowQuery(Router, { rowsPerPage: event.target.value }, initialTableValues)
  };

  function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }

  const tableData = filtered_items
    .map(item => [item.name, item.unit, `$ ${item.values.materials}`, `$ ${item.values.manufacture}`, '$ 0', 'detalle'])

  return (
    <Fragment>
      <Table
        tableHead={['Item', 'Unidad', 'Materiales', 'Mano de obra', 'Costo Unitario', 'Detalle']}
        tableData={paginate(tableData, tableValues.rowsPerPage, (tableValues.tablePage + 1))}
        customHeadCellClasses={[
          classes.textLeft,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter
        ]}
        customCellClasses={[
          classes.textLeft,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter,
          classes.textCenter
        ]}
        customClassesForCells={[0, 1, 2, 3, 4, 5, 6]}
        customHeadClassesForCells={[0, 1, 2, 3, 4, 5, 6]}
      />

      <TablePagination
        count={tableData.length}
        page={tableValues.tablePage}
        rowsPerPage={tableValues.rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        style={{ color: theme.palette.primary.main }}
        labelRowsPerPage='Mostrar'
      />

    </Fragment>
  )
}

export default TablaAnalisisCostos
