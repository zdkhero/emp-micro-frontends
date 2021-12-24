import faker from 'faker'

let data = ''
for (let i = 0; i <= 10; i++) {
  data += `<div>${ faker.animal.dog() }</div>`
}

document.querySelector('#container').innerHTML = data