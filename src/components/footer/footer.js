export default {
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  setup () {
    const Links = [
      { name: 'Home', link: '#' },
      { name: 'Description', link: '#' },
      { name: 'Services', link: '#' },
      { name: 'Value', link: '#' },
      { name: 'Custommers', link: '#' },
      { name: 'Contact', link: '#' }
    ]
    return (Links)
  }
}
