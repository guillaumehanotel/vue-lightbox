import Vue from 'vue'
import store from './LightboxStore'

Vue.directive('lightbox', {
    bind(el, binding){
        let group = binding.value === undefined ? 'default' : 'rio'
        store.addImage(el.getAttribute('href'), group)
        el.addEventListener('click', function (e) {
            e.preventDefault()
            store.open(el.getAttribute('href'), group)
        })
    },
    update(el){
        console.log('update')
    },
    unbind(el, binding){
        console.log('unbind')
        let group = binding.value === undefined ? 'default' : 'rio'
        store.remove(el.getAttribute('href'), group)
    }
})