export default (state:BaseState = {
  user: {
    username: ''
  }
}, action: {
  type: string;
  [key:string]: any
}) => {
  switch(action.type) {
    case 'login': {
      return {
        ...state,
        ...action.state
      }
    }
    default:
      return state
  }
}