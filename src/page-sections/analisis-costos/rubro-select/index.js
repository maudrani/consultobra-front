import React from 'react';
// State
import { costosStates, resetPage } from '../states';
import { useSnapshot } from 'valtio';

import { makeStyles } from "@material-ui/core/styles";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import blogPostsPageStyle from "styles/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle.js";

import { capitalize, toLower } from 'lodash';

const useStyles = makeStyles(blogPostsPageStyle);

const RubroSelect = () => {
    const { rubros, filters } = useSnapshot(costosStates)
    const classes = useStyles();

    const handleChange = (event) => {
        costosStates.filters.category = event.target.value
        resetPage()
    };

    const Options = rubros.map(rubro => <MenuItem
        classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected,
        }}
        value={rubro.id}
        key={`rubro-${rubro.id}`}
    >
        {capitalize(toLower(rubro.name))}
    </MenuItem>)

    return <FormControl fullWidth className={classes.selectFormControl}>

        <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
        >
            Seleccione un rubro
        </InputLabel>

        <Select
            MenuProps={{
                className: classes.selectMenu,
            }}
            classes={{
                select: classes.select,
            }}
            value={filters.category || 99}
            onChange={handleChange}
            inputProps={{
                name: "simpleSelect",
                id: "simple-select",
            }}
        >
            <MenuItem
                classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                }}
                value={99}
                key={`rubro-todos`}
            >
                Todos
            </MenuItem>)
            {Options}
        </Select>

    </FormControl>

}

export default RubroSelect;