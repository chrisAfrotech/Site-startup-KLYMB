export default {

  setup () {
    const open = ref(false)
    const Links = [
      { name: 'Home', link: '#' },
      { name: 'Description', link: '#' },
      { name: 'Services', link: '#' },
      { name: 'Value', link: '#' },
      { name: 'Custommers', link: '#' },
      { name: 'Contact', link: '#' }
    ]

    function MenuOpen () {
      open.value = !open.value
    }

    return (Links, open)
  }

}
