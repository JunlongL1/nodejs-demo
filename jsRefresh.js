// console.log('node jsRefresh.js')

const person = {
    name: 'LonGe',
    age: 22,

    // Wrong
    // greet: () => {
    //     console.log('Hi, I am ' + this.name)
    // }

    // correct
    greet: function() {
        console.log('Hi, I am ' + this.name)
    },

    // another way
    greet1() {
        console.log('Hi, I am ' + this.name)
    }
}

const array = ['1',2]
for (let a of array) {

}
// create new array
const newArray = array.map(a => a + '3')
array.push('const variable is changeable because of reference type')

const copiedArray = array.slice()
copiedArray.push('copiedArray')
// '...' can be used for array and object
const copiedArray1 = [...array]
const copiedObj = {...person}

const toArray = (...args) => {
    return args
}
// console.log(toArray(1,2,3,4,5))

// Destructing
const printName = ({ name }) => {
    // console.log(name)
}
printName(person)
const { name, age } = person

const [arrayItem1, arrayItem2] = array

// Async
setTimeout(() => {
    console.log('Timer is done!')
}, 3000)
// would not block
console.log('should show before timer')

// solution
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')            
        }, 1000)
    })
}
fetchData()
    .then(text => {
        // console.log(text)
        return fetchData()
    })
    .then(text2 => {
        // console.log(text2)
    })


const test = async () => {
    const first = await fetchData()
    console.log(first)
    console.log('second')
}