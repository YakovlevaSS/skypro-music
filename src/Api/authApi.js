export async function RegApi(email, password) {
  return fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json()
        .then((errorResponse) => {
          if (errorResponse.username) {
            throw new Error(errorResponse.username)
          }
          if (errorResponse.email) {
            throw new Error(errorResponse.email)
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password)
          }
        })
      } if (response.status === 500) {
        throw new Error('Сервер сломался')
      } return response.json()
    })
}

export async function LogInApi(email, password) {
  return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json()
        .then((errorResponse) => {
          if (errorResponse.email) {
            throw new Error(errorResponse.email)
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password)
          }
          throw new Error('Произошла неизвестная ошибка.')
        })
      } if (response.status === 401) {
        return response.json().then((errorResponse) => {
          throw new Error(errorResponse.detail)
        })
      } if (response.status === 500) {
        throw new Error('Сервер сломался')
      }
      return response.json()
    })
}

export async function getToken (email, password) {
  return fetch('https://skypro-music-api.skyeng.tech/user/token/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 400) {
        return response.json()
        .then((errorResponse) => {
          if (errorResponse.email) {
            throw new Error(errorResponse.email)
          }
          if (errorResponse.password) {
            throw new Error(errorResponse.password)
          }
          throw new Error('Произошла неизвестная ошибка.')
        })
      } if (response.status === 401) {
        return response.json().then((errorResponse) => {
          throw new Error(errorResponse.detail)
        })
      } if (response.status === 500) {
        throw new Error('Сервер сломался')
      } return response.json()
    })
}

export async function refreshToken (refresh) {
  return fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
    method: "POST",
    body: JSON.stringify({
      refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error('В теле запроса не передан refresh токен')
      } if (response.status === 401) {
        throw new Error('Токен недействителен или просрочен')
      } if (response.status === 500) {
        throw new Error('Сервер сломался')
      } return response.json()
    })
}

