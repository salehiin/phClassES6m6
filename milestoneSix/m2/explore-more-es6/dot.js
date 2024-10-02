

const person = {
    name: 'kodom ali',
    job: 'badam khai',
    3: 'third',
    'add-dress': 'kochu khet' // if dash property name should in quote
}
const prop = 'job'
console.log(person.job)
console.log(person['job'])
console.log(person[prop])
console.log(person['3']) // when number must use bracket notation
console.log(person["add-dress"]) // in this case(-) must use bracket notation