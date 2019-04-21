const fetchUsers = () => [...Array(20).keys()].map(getUser);

const getUser = id => ({
    id: id,
    email: `email_${id}@test.com`,
    fullName: 'Full name test',
    address: 'Test address 123, Bla bla',
    country: 'Test'
});


export {fetchUsers, getUser};