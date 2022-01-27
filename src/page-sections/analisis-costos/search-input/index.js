import React, { useState, useEffect } from 'react';

import { costosStates } from '../states';
import { useSnapshot } from 'valtio';

import CustomInput from "components/input";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = () => {
    const { filters } = useSnapshot(costosStates, { sync: true })
    const [inputValue, setInputValue] = useState()

    useEffect(() => setInputValue(costosStates.filters.search), [filters.search])

    const handleSubmit = (e) => {
        e.preventDefault()
        costosStates.filters.search = inputValue
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return <form onSubmit={handleSubmit}>
        <CustomInput
            labelText={"Buscar Item"}
            id="material"
            formControlProps={{
                fullWidth: true,
            }}

            inputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
                onChange: handleChange,
                value: inputValue || costosStates.filters.search
            }}
        />
    </form>
}

export default SearchInput;