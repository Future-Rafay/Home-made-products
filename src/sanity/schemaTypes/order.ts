// schemas/order.js
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
        {
            name: 'orderNumber',
            title: 'Order No',
            type: 'number',
        },
        {
            name: 'customerName',
            title: 'Customer Name',
            type: 'string',
        },
        {
            name: 'customerEmail',
            title: 'Customer Email',
            type: 'string',
        },
        {
            name: 'productList',
            title: 'Product List',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        },
        {
            name: 'totalPrice',
            title: 'Total Price',
            type: 'number',
        },
        {
            name: 'orderStatus',
            title: 'Order Status',
            type: 'string',
            options: {
                list: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], // Customize status options
            },
        },
        {
            name: 'shippingAddress',
            title: 'Shipping Address',
            type: 'text',
        },
    ],
}
