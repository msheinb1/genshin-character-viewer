<template>
    <div class="character_list">
      <div v-for="character in characters" :key="character.id">
            <SingleCharacter :character="character"/>
      </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import SingleCharacter from './SingleCharacter.vue'

export default {
    props: ['characters'],
    components: { SingleCharacter },
    /*
    setup() {
        
        //Put this in vfor to print images <img :src="character.icon">
        const characters = ref([
            { id: 1, name: 'ayato', icon: require('../assets/ayato.png')},
            { id: 2, name: 'zhongli', icon: require('../assets/zhongli.png')},
            { id: 3, name: 'kazuha', icon: require('../assets/kazuha.png')},
            { id: 4, name: 'itto', icon: require('../assets/itto.png')},
            { id: 5, name: 'raiden', icon: require('../assets/shougun.png')},
            { id: 6, name: 'xiao', icon: require('../assets/xiao.png')}
        ])
    return { characters }
    }*/
}
</script>

<style>

:root {
    --content_width: 95%;
    --content_height: 100vh;
    --sidebar_width: 30%;
    --weapon_size: 10em;

    --artifact_size: 100%;
    --stat_size: 1.7em;
    --main_stat_size: 2.3em;
}

.character_list {
    background-color: #444;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: var(--content_width);
    margin: auto;
    
}

/*icon class is in SingleCharacter. It is here in the files because it's how the icon class is displayed in the flexbox*/
.char .icon {
    display: inline-block;
    width: 104px;
    height: auto;
}
</style>