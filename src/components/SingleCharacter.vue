<template>
    <div class="char">
        <router-link :to="{ name: 'details', params: { id: character.id }}">
        <img class="icon" :alt=character.id :title=character.id :src="require('../assets/characters/' + character.id + '/' + character.id + '.png')">
        <p>{{character.id}}</p>
        </router-link>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['character'],

    /*      { id: 1, name: 'ayato', icon: require('../assets/ayato.png')},
            { id: 2, name: 'zhongli', icon: require('../assets/zhongli.png')},
            { id: 3, name: 'kazuha', icon: require('../assets/kazuha.png')},
            { id: 4, name: 'itto', icon: require('../assets/itto.png')},
            { id: 5, name: 'raiden', icon: require('../assets/shougun.png')},
            { id: 6, name: 'xiao', icon: require('../assets/xiao.png')}*/

//v-bind:style="{ 'background-image': 'url(' + require('../assets/img/covers/' + story.cover) + ')' }"
//https://stackoverflow.com/questions/54728285/how-to-make-vue-display-an-image-from-a-local-path-from-json-file
//Try using this to get the images to work later.

}
</script>

<style>
.char a {
    color: #fff;
}
</style>