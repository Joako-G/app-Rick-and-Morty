const SERVER_DOMAIN = 'https://rickandmortyapi.com/api'

export const getCharacters = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/character`)
    if (!response.ok) {
      throw new Error('Error')
    }
    return response.json()
  } catch (error) {
    throw new Error('Error get charactes')
  }
}
