const a = {
    name: 'jobs',
    age: 36,
};
function getPerson(person) {
    person.name = 'bill';
    const age = 40;
    return {
        name: person.name, age
    };
}
console.log(a);
const b = getPerson(a);
console.log(a);
console.log(b);
