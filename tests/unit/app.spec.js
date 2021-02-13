import { mount, shallowMount } from '@vue/test-utils'
import RadioButton from '@/components/RadioButton.vue'
import App from '@/App.vue'

describe('App test', () => {
  it("App is a vue instance", () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  }),
  it("should render Question: name", () => {
    const wrapper = mount(App)
    expect (wrapper.text()).toMatch('name')
  }),
  it("should render Question: education", () => {
    const wrapper = mount(App)
    expect (wrapper.text()).toMatch('education')
  }),
  it("app has component radio button", () => {
    const wrapper = mount(App)
    const radioButton = wrapper.findComponent(RadioButton)
    expect(radioButton.exists()).toBe(true)
  })
  it("add to component Checkbox", () => {
    const wrapper = mount(App)
    const addToComponentCheckBox = wrapper.find('input[type=checkbox]')
    addToComponentCheckBox.setChecked()
    expect(addToComponentCheckBox.element.checked).toBeTruthy()
  }),
  it("add new component radio button to question education", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'name'
    wrapper.vm.addToSubcomponent = false
    wrapper.vm.newInputType = 'radio'
    wrapper.vm.newInputLabel = 'radio 3'
    wrapper.vm.addButton()
    expect(wrapper.vm.names.length).toBe(3)
  })
  it("add new component radio button to question education", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'education'
    wrapper.vm.addToSubcomponent = false
    wrapper.vm.newInputType = 'radio'
    wrapper.vm.newInputLabel = 'radio 3'
    wrapper.vm.addButton()
    expect(wrapper.vm.educations.length).toBe(3)
  }),
  it("add new subComponent component to component", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'name'
    wrapper.vm.sectionSelected.buttonLabel = 'radio 1'
    wrapper.vm.addToSubcomponent = true
    wrapper.vm.newInputType = 'radio'
    wrapper.vm.newInputLabel = 'subcomponent radio 1'
    wrapper.vm.addSubcomponent()
    expect(wrapper.vm.names[0].subcomponents.length).toBe(2)
  }),
  it("add new subComponent component to component", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'education'
    wrapper.vm.sectionSelected.buttonLabel = 'radio 1'
    wrapper.vm.addToSubcomponent = true
    wrapper.vm.newInputType = 'radio'
    wrapper.vm.newInputLabel = 'subcomponent radio 1'
    wrapper.vm.addSubcomponent()
    expect(wrapper.vm.educations[0].subcomponents.length).toBe(1)
  }),
  it("remove component from question name", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'name'
    wrapper.vm.sectionSelected.buttonLabel = 'radio 2'
    wrapper.vm.removeComponent()
    expect(wrapper.vm.names.length).toBe(1)
  }),
  it("remove component from question education", () => {
    const wrapper = mount(App)
    wrapper.vm.sectionSelected.name = 'education'
    wrapper.vm.sectionSelected.buttonLabel = 'radio 1'
    wrapper.vm.removeComponent()
    expect(wrapper.vm.educations.length).toBe(1)
  })
  
})

describe('Radio Button Component test', () => {
  it("it's a vue instance", () => {
    const wrapper = mount(RadioButton, {
      propsData: {
        element: {
          type: 'radio',
          label: 'radio 1'
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  }),

  it("render radio button label ", () => {
    const label = "radio 1"
    const wrapper = mount(RadioButton, {
      propsData: {
        element: {
          type: 'radio',
          label: 'radio 1'
        }
      }
    })
    expect(wrapper.html()).toContain(label)
  })
})
