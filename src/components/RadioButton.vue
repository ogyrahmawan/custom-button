<template>
<div>
  <label v-if="this.element">
    <input v-model="label" :type="this.element.type" name="name" :value="this.element.label" >
    {{this.element.label}}
    <div class="d-flex">
      <radio-button v-for="(item, index) in this.element.subcomponents" :key="index" :element="item"   />
    </div>
  </label>
  <label v-else>
    <input type="radio" >
  </label>
</div>  
</template>

<script>
export default {
  name: 'RadioButton',
  props: ['element'],
  data () {
    return {
      label: ''
    }
  },
  methods: {
  }
}
</script>

<style>

</style>