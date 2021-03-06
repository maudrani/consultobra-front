import React, { useState, useEffect } from 'react';

import { costosStates } from '../states';
import { useSnapshot } from 'valtio';

import CustomInput from "components/input";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchInput = () => {
    const { filters } = useSnapshot(costosStates, { sync: true })
    const [inputValue, setInputValue] = useState('')

    useEffect(() => setInputValue(costosStates.filters.search), [filters.search])

    const handleSubmit = (e) => {
        e.preventDefault()
        costosStates.filters.search = inputValue
        costosStates.resetPage()
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
                        <SearchIcon style={{cursor: 'pointer'}} onClick={handleSubmit} />
                    </InputAdornment>
                ),
                onChange: handleChange,
                value: inputValue || ''
            }}
        />
    </form>
}

export default SearchInput;