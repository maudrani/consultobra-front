import { styled } from "@material-ui/core";
import { TablePagination } from '@material-ui/core';

export const Pagination = styled(TablePagination)(({ theme }) => ({
    color: theme.palette.primary.main,
}))
