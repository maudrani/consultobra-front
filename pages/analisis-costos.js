import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { globalStates } from "states";
import { costosStates, initialFilters, initialTableValues, filterItemsByQuery, queryToState } from "page-sections/analisis-costos/states";
import { pushShallowQuery } from "helpers/routing";
import { useSnapshot } from "valtio";

import { makeStyles } from "@material-ui/core/styles";
import costosPageStyle from "styled/pages/costos";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PageHeader from "components/Header";
import RubroSelect from "page-sections/analisis-costos/rubro-select";
import SearchInput from "page-sections/analisis-costos/search-input";
import TablaAnalisisCostos from "page-sections/analisis-costos/tabla";
import PageFooter from "components/footer";


const useStyles = makeStyles(costosPageStyle);

export async function getServerSideProps({ query }) {
  const DB = {
    items: await globalStates.COSTOS.getItemsCostos(),
    rubros: await globalStates.RUBROS.getRubros(),
  }

  return {
    props: {
      DB,
      initialQuery: query
    }
  }
}

const AnalisisCostos = ({ DB, initialQuery }) => {
  const { filters, tableValues } = useSnapshot(costosStates)
  const classes = useStyles();
  const Router = useRouter()

  React.useEffect(() => {
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
  })

  useEffect(() => {
    costosStates.rubros = DB.rubros
    costosStates.items = filterItemsByQuery(DB.items, initialQuery)

    queryToState(initialQuery)

  }, [DB, initialQuery])

  useEffect(() => {
    costosStates.items = filterItemsByQuery(DB.items, Router.query)
  }, [Router.query, DB])

  useEffect(() => {
    const newValues = { ...costosStates.filters, ...costosStates.tableValues }
    const initialValues = { ...initialFilters, ...initialTableValues }

    pushShallowQuery(Router, newValues, initialValues)
  }, [tableValues, filters])

  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundImage: "url('/img/consultobra/hero4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >

      <PageHeader />

      <div className={classes.main}>

        <div className={classes.container}>

          <GridContainer container>

            <GridItem xs={12} sm={12} md={12}>
              <h3>Filtro por rubros</h3>
              <RubroSelect />
            </GridItem>

            <GridItem xs={12} sm={12} md={12}>
              <h3>Busqueda por nombre</h3>
              <SearchInput />
            </GridItem>

          </GridContainer>

          <TablaAnalisisCostos />

        </div>
      </div>

      <PageFooter hideSocialMedia />

    </div>

  );
}

export default AnalisisCostos
