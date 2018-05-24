<template>
  <div id="stream-home">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">streamApp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">User Messages</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Stats</a>
      </li>
    </ul>
  </div>
  <button class="btn btn-danger my-2 my-sm-0" type="submit" @click='handleLogout()'>Logout</button>
</nav>
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'StreamHome',
  methods: {
    handleLogout () {
      const path = `http://localhost:5003/revoke`
      axios.get(path)
      .then((status) => {
        if (status === 200) {
          console.log('hi')
          this.$router.push({
            path: '/'
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
