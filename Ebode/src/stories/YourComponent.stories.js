import YourComponent from './YourComponent.vue'

export default {
  title: 'MonComposant',
  component: YourComponent
}

const Template = (args, { argTypes }) => ({
  components: { YourComponent },
  props: Object.keys(argTypes),
  template: '<YourComponent v-bind="$props"/>'
})

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
}
