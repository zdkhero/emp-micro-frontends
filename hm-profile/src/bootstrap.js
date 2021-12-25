import faker from 'faker'

let data = ''
for (let i = 0; i <= 10; i++) {
  data += `<div>${ faker.internet.userName() }</div>`
}

document.querySelector('#profile-container').innerHTML = data
