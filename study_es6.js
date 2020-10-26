// 1. 비구조화 할당
// destructuring
const user = {
  info: {
    name: "jiyeon",
    age: 24,
    gender: "female",
  },
}

// es5
const name = user.info.name
const age = user.info.age
const gender = user.info.gender

// es6
const { name, age, gender } = user.info


// 2. 객체 초기자 (object initialize)
const age = 20
const name = "지연"
const gender = "female"

// es5
var datas = {
  name: name,
  aeg: age,
  gender: gender,
}

// es6
var datas = {
  name,
  age,
  gender,
}


// 3. Template Literals
// es5
introduce = "my name is" + name + ". Iam" + age + "years old"
// es6
introduce = `my name is ${name}. I am ${age} years old`
console.log(introduce)


// 4. Callback -> Promise -> async/await
// Promise
new Promise((resolve, reject) => {
  console.log(1)
  resolve()
}).then(() => {
  console.log(2)
})

// async/await
async function log() {
  await console.log(1)
  await console.log(2)
}

function log() {
  await setTimeout(() => {
    console.log(1)
  }, 1000)
  await console.log(2)
}
log()
