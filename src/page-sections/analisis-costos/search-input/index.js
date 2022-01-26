import React, { useState } from 'react';

import { costosStates } from '../states';
import { useSnapshot } from 'valtio';

import CustomInput from "components/input";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useKeyPress from 'helpers/hooks/useKeyPress';

const SearchInput = () => {
    const [enableEnterSearch, setEnableEnterSearch] = useState(false)
    const [inputValue, setInputValue] = useState()


    return (<CustomInput
        labelText="Buscar Item"
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
            onBlur: () => setEnableEnterSearch(false),
            onFocus: () => setEnableEnterSearch(true),
        }}
    />);
}

export default SearchInput;