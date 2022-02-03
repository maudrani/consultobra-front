import React, { Fragment } from 'react'
// States
import { useSnapshot } from 'valtio';
import { costosStates } from "page-sections/analisis-costos/states";
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
// core components
import Table from 'src/components/Table/Table'
import { TablePagination } from '@material-ui/core';

import style from 'styles/jss/nextjs-material-kit-pro/pages/componentsSections/contentAreas.js'
import { theme } from 'styled/custom-theme';
import { paginate } from 'helpers/table';

import { ItemDetailParagraph } from './styled';


const useStyles = makeStyles(style)

const TablaAnalisisCostos = () => {
  const classes = useStyles()
  const { tableValues, items } = useSnapshot(costosStates)

  const handleChangePage = (event, newPage) => {
    costosStates.tableValues.tablePage = newPage
  };

  const handleChangeRowsPerPage = (event) => {
    costosStates.tableValues.rowsPerPage = parseInt(event.target.value, 10)
    costosStates.resetPage()
  };

  const ItemDetail = ({ item }) => {
    const { comment, category, id, name, unit } = item

    // Unnecesary elements
    const stringsToDelete = [
      'Análisis de Costos de la Construcción - www.consultobra.com',
      'Gracias por ser parte del equipo Consultobra',
      `Rubro: [${category.id}]`,
      `- ${category.name}`,
      `Ítem: [${id}] - `,
      `${name}`,
      `(${unit})`,
      `(${unit}`,
    ]

    // sweeper
    let clearedDetail = comment
    stringsToDelete.forEach(el => { clearedDetail = clearedDetail.replaceAll(el, '') })

    // parser
    clearedDetail = clearedDetail.trim()
    clearedDetail = clearedDetail.replaceAll('\n', '<br>')

    // styling
    clearedDetail = clearedDetail.replaceAll('Descripción Personalizada:', '<strong>Descripción:</strong>')
    clearedDetail = clearedDetail.replaceAll('Nota:', '<strong>Nota:</strong>')
    clearedDetail = clearedDetail.replaceAll('Incidencia de Materiales:', '<strong>Incidencia de Materiales:</strong>')
    clearedDetail = clearedDetail.replaceAll('Incidencia de Horas Hombre:', '<strong>Incidencia de Horas Hombre:</strong>')
    clearedDetail = clearedDetail.replaceAll('Checklist de Herramental:', '<strong>Checklist de Herramental:</strong>')

    return <ItemDetailParagraph dangerouslySetInnerHTML={{ __html: clearedDetail }} />
    
  }

  const tableData = (items)
    .map((item, i) => [item.name, item.unit, `$ ${item.values.materials}`, `$ ${item.values.manufacture}`, '$ 0', <ItemDetail key={i} item={item} />])

  return (
    <Fragment>
      <Table
        tableHead={['Item', 'Unidad', 'Materiales', 'Mano de obra', 'Costo Unitario']}
        tableData={paginate(tableData, tableValues.rowsPerPage, (tableValues.tablePage + 1))}
        collapsibleRows={true}
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
