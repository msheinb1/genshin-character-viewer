<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="characters.length">
      <CharacterList  :characters="characters"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import CharacterList from '../components/CharacterList.vue'
import { ref } from '@vue/reactivity'
import getCharacters from '../composables/getCharacters.js'

export default {
  name: 'HomeView',
  components: { CharacterList },

  setup() {
    //Get values from the composable file
    const { characters, error, load } = getCharacters()
    
    load()

    return { characters, error }
  }
}
</script>
