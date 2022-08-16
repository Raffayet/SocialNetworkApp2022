<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('/rest/demo/test', {
        headers: {
          'Content-Type': 'text/plain'
        }
      })
      .then(response => (this.info = response))
  } 
}
</script>

<template>
  <h1>{{ `Our first message: ${this.info}` }}</h1>
</template>