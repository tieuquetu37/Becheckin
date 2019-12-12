<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>
<script>
  import QrcodeVue from 'qrcode.vue'
 
  export default {
    data() {
      return {
        value: '9HEQjOOeqAXSv33JOhBQ',
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
    methods:{
     
    }
  }
</script> 
<style scoped>

</style>