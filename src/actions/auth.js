import verifyToken from "../lib/verifyToken";


export function userLogOut () {
  return {
    type: 'USER_LOG_OUT'
  }
}

export function userLogIn(username, password) {
  return async dispatch => {
    const raw = await fetch('http://localhost:3333/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
    const response = await raw.json()
    const user = verifyToken(response.token)
    console.log('response token',response.token)

    dispatch(userLogInAction(user, response.token))
  }
}

export function jwtLogin(token) {
  return async (dispatch) => {
    const user = verifyToken(token)
    if (user) dispatch(userLogInAction(user, token))
  }
}

function userLogInAction (user, token) {
  return {
    type: 'USER_LOG_IN',
    user,
    token,
  }
}