
const Redux = require('redux')

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'

// Cria Actions

const proximaCor = () => {
  return {
    type: NEXT_COLOR,
    index: 1
  }
}

const corAnterior = () => {
  return {
    type: PREVIOUS_COLOR,
    index: -1
  }
}

// Cria Reducer
const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1
      }

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index - 1
      }

    default:
      return state;


  }

}

// Cria Store
const store = Redux.createStore(reducer)

const proximo = document.querySelector('#next')
const anterior = document.getElementById('previous')

proximo.addEventListener('click', () => {
  console.log('Oi')
  store.dispatch(proximaCor())
} )

anterior.addEventListener('click', () => {
  console.log('Antes');
  store.dispatch(corAnterior())
} )


console.log(store.getState());