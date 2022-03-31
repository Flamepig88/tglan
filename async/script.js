// const name = 'Martin'

// const data = fetchSomeData()

// console.log('Martin')

// console.log(data) /// ---> undefined

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve ('Success')
//     } else {
//         reject ('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })

function printData (dataItem) {
    const pEl = document.createElement('p')
    pEl.textContent = dataItem.title

    document.body.appendChild(pEl)
}

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => {
    return res.json()
})
.then(data => {
    data.forEach(item => {
    printData(item.title)
    })
})
.catch(err => console.log(err))