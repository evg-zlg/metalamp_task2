import './styles/style.scss';

const userStack = {
  language: 'JavaScript',
  framework: 'Angular'
}

const user = {
  name: 'Evgen',
  age: '35',
  ...userStack
}

console.log(user)