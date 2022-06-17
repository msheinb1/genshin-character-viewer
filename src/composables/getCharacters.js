import { ref } from '@vue/reactivity'

const getCharacters = () => {
    const characters = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        //performs the fetch, then waits until fetch is complete
        let data = await fetch('http://localhost:3000/characters')
        if (!data.ok) {
          throw Error('no data available')
        }
        characters.value = await data.json()
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { characters, error, load }
}

export default getCharacters