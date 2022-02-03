import { styled } from "@material-ui/core";
import { TablePagination } from '@material-ui/core';

export const Pagination = styled(TablePagination)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const ItemDetailParagraph = styled('p')(({ theme }) => ({
    fontWeight: '300',
    padding: '40px',
    '& strong': {
        textTransform: 'uppercase',
        fontWeight: '400',
    }
}))

