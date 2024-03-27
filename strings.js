
// Javascript strings

let password = 'mypPass#wor$d'

// regular expression
let pattern = /[#@$%&*]/

if (password.length > 5 && pattern.test(password) && password.startsWith('m')){
   console.log('Valid password.')
}else{
     console.log('Invalid password.');
}

console.log(password.indexOf('#'))
console.log(password.indexOf('s'))
console.log(password.slice(3)) // lol
console.log(password.toUpperCase())
