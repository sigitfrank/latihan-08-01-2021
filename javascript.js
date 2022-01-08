//  ASYNCHRONOUS

// CALLBACK

// function name(hello) {
//     return `Halo, selamat pagi ${hello()}`
// }

// console.log(name( ()=>{
//     let name = "Sigit"
//     return name
// }))

// PROMISE
// const name = new Promise((resolve, reject)=>{
//     const x = 10
//     if(x === 10){
//          return resolve('true');
//     }else{
//         reject('false')
//     }
// })

// name.then((res)=>{
//     console.log(res)
// }).catch(err=>{
//     console.log(err)
// })

// const run = async ()=>{
//     try {
//         const res = await name
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// run()


// FETCH
// const getPosts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts').then(res => {
//         res.json().then(data => {
//             const ul = document.querySelector('#post')
//             data.forEach(element => {
//                 const li = document.createElement('li')
//                 const d = `<p style="color: red;">${element.title}</p>
//                 <p style="color: rgb(130, 130, 130);">${element.body}</p>`
//                 li.insertAdjacentHTML('afterbegin', d)
//                 ul.appendChild(li)
//             });
//         }).catch(err => {
//             console.log(err)
//         })
//     }).catch(err => {
//         alert("HTTP-Error: " + response.status);
//     })
// }
// getPosts()

const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnSubmit = document.querySelector('#submit')
const btnToggle = document.querySelector('#toggle')


function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

email.addEventListener('keypress', function (e) {
    const isEmailValid = validateEmail(this.value)
    if (!isEmailValid) return this.style.borderColor = 'red'
    return this.style.borderColor = 'green'
})


btnSubmit.addEventListener('click', async function () {
    const isEmailValid = validateEmail(email.value)
    if (!isEmailValid) return alert('Email format is not correct')
    if (password.value.length < 5) return alert('Password min 5 characters')
    try {
        const response = await axios.post('https://backend-server.com/api/v1/users', {
            email: email.value,
            password: password.value,
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
})

function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}


const scrollDiv = document.querySelector('#scroll-div')
scrollDiv.addEventListener('scroll', function () {
    this.style.background = generateRandomColor()
})
