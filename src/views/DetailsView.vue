<template>
{{character.name}}
    <div v-if="error">{{ error }}</div>
    <div v-if="character" class="details_box">
        <div class="character">
            <img class="icon" :alt=character.id :title=character.id :src="require('../assets/characters/' + character.id + '/' + character.id + '.png')">
            <img class="element" :src="require('../assets/elements/' + character.element + '.png')">
            <p>{{character.id}}<br>
                level info<br>
                stats<br>
                talents<br>
                constellations? idk
            </p>
        </div>
        <div class="stats">
            <div v-if="character.weapon" class="weapon">
                <div class="image_box">
                <img class="background" :src="require('../assets/misc/background_item_' + character.weapon.rarity + '_star.png')">
                <img class="weapon_image" :src="require('../assets/weapons/' + character.weapon.image)">
                </div>
                <div class="top_pill">{{character.weapon.name}}, R{{character.weapon.refine}}</div>
                <div class="pill">{{character.weapon.level}}</div>
                <div class="pill">Attack: {{character.weapon.attack}}</div>
                <div class="pill"><img class="secondary_icon" :src="require('../assets/stats/' + character.weapon.second_stat_icon)"> <span class="icon_value">{{character.weapon.second_stat}} = {{character.weapon.second_stat_value}}</span></div>
            </div>
        </div>
        <div v-if="character.artifacts" class="artifacts">
            <!--Do I need a separate artifact component? Let's revisit that later.
            Use artifact stat icon instead? everything is hard.
            Can probablly figure out a way to handle Elemental damage bonus icons more neatly but too exhausted-->
                <div v-for="artifact in character.artifacts" :key="artifact.id" class="artifact_box">
                    <img class="artifact_image" :src="require('../assets/artifacts/' + artifact.image)">
                    <table class="artifact_stats">
                        <tr><th colspan="2"><img class="main_stat_icon" :src="require('../assets/stats/' + artifact.stats[0].icon)"> <span class="stat_text">{{artifact.stats[0].value}}</span></th></tr>
                        <tr><td><img class="stat_icon" :src="require('../assets/stats/' + artifact.stats[1].icon)"> <span class="stat_text">{{artifact.stats[1].value}}</span></td><td><img class="stat_icon" :src="require('../assets/stats/' + artifact.stats[2].icon)"> <span class="stat_text">{{artifact.stats[2].value}}</span></td></tr>
                        <tr><td><img class="stat_icon" :src="require('../assets/stats/' + artifact.stats[3].icon)"> <span class="stat_text">{{artifact.stats[3].value}}</span></td><td><img class="stat_icon" :src="require('../assets/stats/' + artifact.stats[4].icon)"> <span class="stat_text">{{artifact.stats[4].value}}</span></td></tr>
                    </table>
                </div>
        </div>
   </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import getCharacter from '../composables/getCharacter.js'

export default {
    props: ['id'],
    
    setup(props) {
        const { character, error, load } = getCharacter(props.id)

        load()

        return { character, error }
    }
}
</script>

<style>
.details_box {
    position: relative;
    max-width: var(--content_width);
    height: var(--content_height);
    background:red;
    margin: auto;
}

/*character bar*/
.details_box .character {
    position: absolute;
    background:cyan;
    width: var(--sidebar_width);
    height: var(--content_height);
}

.details_box .stats {
    position: absolute;
    background: orange;
    left: var(--sidebar_width);
    width: calc(100% - (2*var(--sidebar_width)));
    height: var(--content_height);
    overflow: hide;
}

.weapon .image_box {
    position: relative;
    left: 1.5em;
    top: 1.5em;
}

.weapon .background {
    position: relative;
    z-index: 1;
    max-width: var(--weapon_size);
    height: auto;
    float: left;
    border-radius: 8px;
}

.weapon .weapon_image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    max-width: var(--weapon_size);
    height: auto;
    float: left;
}

.weapon .secondary_icon {
    float: left;
    height: 1.5em;
    border: 1px solid red;
}

.weapon .icon_value {
    border: 1px solid blue;
}

.weapon .top_pill {
    display: inline-block;
    width: calc(100% - var(--weapon_size) - 5em);
    background: pink;
    height: 1.75em;
    line-height: 1.75em;
    border-radius: 8px;
    margin-top: 1.5em;
}

.weapon .pill {
    display: inline-block;
    width: calc(100% - var(--weapon_size) - 5em);
    background: pink;
    height: 1.75em;
    line-height: 1.75em;
    border-radius: 8px;
    margin-top: 1em;
}

.details_box .element {
    width: 200px;
    height: auto;
}

/*Make it responsive ig: https://www.w3schools.com/css/css3_flexbox_responsive.asp */
/*artifacts bar*/
.details_box .artifacts {
    position: absolute;
    background: #ccc;
    display: flex;
    flex-direction: column;
    right: 0%;
    width: var(--sidebar_width);
    height: var(--content_height);
    justify-content: center;
    overflow: hidden;
}

.artifact_box {
    position: relative;
    background: green;
    margin: 1% 0%;
}

.artifact_box .artifact_image {
    position: absolute;
    left: 0%;
    max-height: var(--artifact_size);
    width: auto;
    background: black;
}

.artifact_box .artifact_stats {
    margin-right: 0px;
    margin-left: auto;
    width: 70%;
    max-height: var(--artifact_size);
    background: yellow;
    overflow: hide;
}

/*QUESTION: How do I get the data in table cells to NOT be centered?*/
/*Just noticed that not all images have the same amount of blank space around each image.
This makes some appear smaller despite having the same scale applied. Pain.
Not a CSS problem though.*/
.artifact_box .artifact_stats .stat_icon {
    max-width: var(--stat_size);
    height: auto;
    text-align: left;
}

.artifact_box .artifact_stats .main_stat_icon {
    max-width: var(--main_stat_size);
    height: auto;
    text-align: left;
}

.artifact_box .artifact_stats .stat_text {
    text-align: right;
}
</style>