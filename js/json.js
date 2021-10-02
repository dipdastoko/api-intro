//JavaScript Object Notation--JSON
const user = { id: 11, name: 'Gorib Ammir', job: 'actor' };
console.log(user);

const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    isExclusive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);