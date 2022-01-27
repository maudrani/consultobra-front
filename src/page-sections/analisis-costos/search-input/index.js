import React, { useState, useEffect } from 'react';

import { costosStates } from '../states';
import { useSnapshot, subscribe } from 'valtio';

import CustomInput from "components/input";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = () => {
    const { filters } = useSnapshot(costosStates, { sync: true })
    const [inputValue, setInputValue] = useState('')

    useEffect(() => subscribe(costosStates.filters, () => setInputValue(costosStates.filters.search)), [filters.search])

    const handleSubmit = (e) => {
        e.preventDefault()
        costosStates.filters.search = inputValue
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
                onChange: (e) => setInputValue(e.target.value),
                value: inputValue
            }}
        />
    </form>
}

export default SearchInput;