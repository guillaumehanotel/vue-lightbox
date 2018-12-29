<template>
    <div class="lightbox" v-if="image" @click="close">
        <transition name="lightbox-enter">
            <lightbox-image :image="image" :key="image"></lightbox-image>
        </transition>
        <div class="lightbox-close" @click="close"></div>
        <div class="lightbox-btn lightbox-next" @click.stop.prevent="next"><i class="arrow right"></i></div>
        <div class="lightbox-btn lightbox-prev" @click.stop.prevent="prev"><i class="arrow left"></i></div>
    </div>
</template>

<script>

    import './LightboxDirective'
    import store from './LightboxStore'
    import LightboxImage from './LightboxImage'

    export default {
        name: "Lightbox",
        components: {
            LightboxImage
        },
        data(){
            return {
                state: store.state
            }
        },
        computed: {
            image(){
                if(this.state.index !== false){
                    return this.state.images[this.state.group][this.state.index]
                }
            }
        },
        methods: {
            close(){
                store.close()
            },
            next(){
                store.next()
            },
            prev(){
                store.prev()
            }
        }
    }
</script>

<style src="./lightbox.scss" lang="scss">

</style>