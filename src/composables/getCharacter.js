import { ref } from '@vue/reactivity'

const getCharacter = (id) => {
    const character = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        //performs the fetch, then waits until fetch is complete
        let data = await fetch('http://localhost:3000/characters/' + id)
        if (!data.ok) {
          throw Error('That character does not exist')
        }
        character.value = await data.json()
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { character, error, load }
}

export default getCharacter