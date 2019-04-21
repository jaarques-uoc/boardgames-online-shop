const fetchUsers = () => {};

const getUser = id => ({
    id: id,
    email: 'email@test.com',
    fullName: 'Full name test',
    address: 'Test address 123, Bla bla',
    country: 'Test'
});


export {fetchUsers, getUser};