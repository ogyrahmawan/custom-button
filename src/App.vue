<template>
  <div id="app">
    <div class="home-container d-flex ">
      <div class="section-name col-md-6 mt-5">
        <p>name</p>
        <div>
          <radio-button  v-for="(element, index) in names" :key="index" :element="element" :name="'name'"></radio-button>
        </div>
      </div>
      <div class="section-education col-md-6 mt-5">
        <p>education</p>
        <div>
          <radio-button v-for="(element, index) in educations" :key="index" :element="element" :name="'education'"></radio-button>
        </div>
        <p>No Props</p>
        <radio-button></radio-button>
      </div>
      <div class="control-button bg-dark d-flex justify-content-around">
        <div >
          <div class="text-white">
            <label>
              <input v-model="addOrRemove" type="radio" name="addOrRemove" value="add" >
              add component
            </label>
            <label class="ml-3">
              <input v-model="addOrRemove" type="radio" name="addOrRemove" value="remove">
              remove component
            </label>
          </div>
          <div v-if="this.addOrRemove === 'add'" class="text-white m-4">
            <label>
              Question
              <select v-model="sectionSelected.name">
                <option>name</option>
                <option>education</option>
              </select>
            </label>
            <label class="ml-3">
              <input v-model="addToSubcomponent" type="checkbox">
              add to subcomponent
            </label><br>
            <label v-if="addToSubcomponent">
              Button Label
              <input type="text" v-model="sectionSelected.buttonLabel">
            </label>
            <label v-else>
              Button Label
              <input disabled="disabled" type="text" v-model="sectionSelected.button">
            </label>
          </div>
        </div>
        <div>
          <div class="mt-3" v-if="this.addOrRemove === 'add'">
            <div class="text-white p-3">
              <input v-model="newInputType" name="subcomponent" type="radio" value="text">
              <label class="mr-3">Text</label>
              <input v-model="newInputType" name="subcomponent" type="radio" value="radio">
              <label class="mr-3">Radio</label>
              <input v-model="newInputType" name="subcomponent" type="radio" value="date">
              <label>Date</label>
            </div>
            <input v-model="newInputLabel" type="text" name="label" placeholder="lable title">
            <button v-if="addToSubcomponent" @click="addSubcomponent">add</button>
            <button v-else @click="addButton">add</button>
          </div>
          <div v-if="addOrRemove === 'remove'" class="text-white mt-3" >
            <label>
              Question
              <select v-model="sectionSelected.name">
                <option>name</option>
                <option>education</option>
              </select>
            </label><br>
            <label>
              Button Label
              <input type="text" v-model="sectionSelected.buttonLabel">
            </label>
            <button @click="removeComponent" >remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from './components/RadioButton.vue'

export default {
  name: 'App',
  components: { 
    RadioButton 
  },
  data () {
    return {
      addOrRemove: 'add',
      selectedName: '',
      addToSubcomponent: false,
      sectionSelected: {
        name: '',
        buttonLabel: ''
      },
      names: [
        {
          label: 'radio 1',
          type: 'radio',
          subcomponents: [
            {
              label: 'subradio 2',
              type:  'radio',
            }
          ]
        },
        {
          label: 'radio 2',
          type:  'radio',
          subcomponents: [
            {
              label: 'subradio 1',
              type:  'radio',
            }
          ]
        }
      ],
      educations: [
        {
          label: 'radio 1',
          type: 'radio',
          subcomponents: []
        },
        {
          label: 'radio 2',
          type:  'radio',
          subcomponents: []
        }
      ],
      newInputType: '',
      newInputLabel: ''
    }
  },
  methods: {
    addButton () {
      if(this.sectionSelected.name === 'name' && !this.addToSubcomponent) {
        this.names.push({
          type: this.newInputType,
          label: this.newInputLabel,
          subcomponents: []
        })
      } else if(this.sectionSelected.name === 'education' && !this.addToSubcomponent) {
        this.educations.push({
          type: this.newInputType,
          label: this.newInputLabel,
          subcomponents: []
        })
      }
    },
    addSubcomponent () {
      if(this.sectionSelected.name === 'name' ) {
        let targetIndex = this.names.findIndex(el => el.label === this.sectionSelected.buttonLabel)
        this.names[targetIndex].subcomponents.push({
          type: this.newInputType,
          label: this.newInputLabel,
          subcomponents: []
        })
      } else if(this.sectionSelected.name === 'education' ) {
        let targetIndex = this.educations.findIndex(el => el.label === this.sectionSelected.buttonLabel)
        this.educations[targetIndex].subcomponents.push({
          type: this.newInputType,
          label: this.newInputLabel,
          subcomponents: []
        })
      }
    },
    removeComponent () {
      if(this.sectionSelected.name === 'name' ) {
        const obj = [...this.names]
        const filtered = obj.filter(el => el.label !== this.sectionSelected.buttonLabel)
        this.names = filtered
      } else if(this.sectionSelected.name === 'education' ) {
        const obj = [...this.educations]
        const filtered = obj.filter(el => el.label !== this.sectionSelected.buttonLabel)
        this.educations = filtered
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.home-container {
  height: 100vh;
}
.control-button {
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
