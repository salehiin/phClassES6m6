// data access
const data = [{ id: 1, name: 'abul', address: 'kochu khet' }]
console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id: 1, name: 'lenovo', price: 65000},
        {id: 2, name: 'macbook', price: 165000}
    ]
}
console.log(products.data[1].name)

const user = {
    id: 5001,
    name: 'Shorif',
    address: {
        street: {
            first: '54/1 north side',
            second: 'poribag',
            third: 'sobjibagan'
        },
        city: 'Dhaka',

    }
}
console.log(user.address.street.third)

const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}
console.log(user2.address.street?.third)