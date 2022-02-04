import React, { useState, useEffect, createContext, useContext } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Collapse from '@material-ui/core/Collapse'
import Box from '@material-ui/core/Box';
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

import styles from "styles/jss/nextjs-material-kit-pro/components/tableStyle.js";

const useStyles = makeStyles(styles);
const TableContext = createContext({})

export const CollapsibleRow = (props) => {
  const { children, collapsedChildren } = props;
  const [open, setOpen] = useState(false);
  const { collapseAllRows, setCollapseAllRows } = useContext(TableContext)


  useEffect(() => {
    collapseAllRows && setOpen(false)
  }, [collapseAllRows])

  const handleOpenRow = () => {
    setOpen(!open)
    setCollapseAllRows(false)
  }


  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell style={{ borderBottom: 'none' }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleOpenRow}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {children}
      </TableRow>

      <TableRow >
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto">
            {collapsedChildren}
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}


export default function CustomTable(props) {
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    colorsColls,
    coloredColls,
    customCellClasses,
    customClassesForCells,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells,
    collapsibleRows,

  } = props;
  const classes = useStyles();

  const [collapseAllRows, setCollapseAllRows] = useState(false)

  useEffect(() => {
    setCollapseAllRows(true)
  }, [tableData])

  return (
    <TableContext.Provider value={{ collapseAllRows, setCollapseAllRows }}>
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor]}>
              <TableRow className={classes.tableRow}>
                {collapsibleRows && <TableCell />}
                {tableHead.map((prop, key) => {
                  const tableCellClasses =
                    classes.tableHeadCell +
                    " " +
                    classes.tableCell +
                    " " +
                    cx({
                      [customHeadCellClasses[
                        customHeadClassesForCells.indexOf(key)
                      ]]: customHeadClassesForCells.indexOf(key) !== -1,
                      [classes.tableShoppingHead]: tableShopping,
                    });
                  return (
                    <TableCell className={tableCellClasses} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              var rowColor = "";
              var rowColored = false;
              if (prop.color !== undefined) {
                rowColor = prop.color;
                rowColored = true;
                prop = prop.data;
              }
              const tableRowClasses = cx({
                [classes.tableRowHover]: hover,
                [classes[rowColor + "Row"]]: rowColored,
                [classes.tableStripedRow]: striped && key % 2 === 0,
              });

              const SelectedRow = collapsibleRows ? CollapsibleRow : TableRow

              if (prop.total) {
                return (
                  <SelectedRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.tableCellTotal}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableCellAmount
                      }
                    >
                      {prop.amount}
                    </TableCell>
                    {tableHead.length - (prop.colspan - 0 + 2) > 0 ? (
                      <TableCell
                        className={classes.tableCell}
                        colSpan={tableHead.length - (prop.colspan - 0 + 2)}
                      />
                    ) : null}
                  </SelectedRow>
                );
              }
              if (prop.purchase) {
                return (
                  <SelectedRow key={key} hover={hover} className={tableRowClasses}>
                    <TableCell
                      className={classes.tableCell}
                      colSpan={prop.colspan}
                    />
                    <TableCell
                      className={classes.tableCell + " " + classes.tableCellTotal}
                    >
                      Total
                    </TableCell>
                    <TableCell
                      className={
                        classes.tableCell + " " + classes.tableCellAmount
                      }
                    >
                      {prop.amount}
                    </TableCell>
                    <TableCell
                      className={classes.tableCell + " " + classes.right}
                      colSpan={prop.col.colspan}
                    >
                      {prop.col.text}
                    </TableCell>
                  </SelectedRow>
                );
              }

              return (
                <SelectedRow
                  key={key}
                  hover={hover}
                  className={classes.tableRow + " " + tableRowClasses}
                  collapsedChildren={prop[prop.length - 1]}

                >
                  {(collapsibleRows ? prop.slice(0, -1) : prop).map((prop, key) => {
                    const tableCellClasses =
                      classes.tableCell +
                      " " +
                      cx({
                        [classes[colorsColls[coloredColls.indexOf(key)]]]:
                          coloredColls.indexOf(key) !== -1,
                        [customCellClasses[customClassesForCells.indexOf(key)]]:
                          customClassesForCells.indexOf(key) !== -1,
                      });
                    return (
                      <TableCell className={tableCellClasses} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                </SelectedRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </TableContext.Provider>
  );
}


CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: [],
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool,
};
