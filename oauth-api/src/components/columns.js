import { format } from 'date-fns';

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
        disableFilters: true,
        sticky: 'left'
    },
    {
        Header: 'Name',
        Footer: 'Name',
        accessor: 'name',
        sticky: 'left'
    },
    {
        Header: 'size',
        Footer: 'size',
        accessor: 'properties[0].value',
        sticky: 'left'
    },

    {
        Header: 'price: $',
        Footer: 'price',
        accessor: 'stocks[0].sellPrice.USD'
    },


]

