<template>
  <div id='stream-home'>
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a class='navbar-brand' href='#'>streamApp</a>
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
  </button>
  <div class='collapse navbar-collapse' id='navbarNavDropdown'>
    <ul class='navbar-nav'>
      <li class='nav-item active'>
        <a class='nav-link' href='#'>Home <span class='sr-only'></span></a>
      </li>
      <li class='nav-item'>
        <a class='nav-link'>Stats</a>
      </li>
    </ul>
  </div>
  <button class='btn btn-danger my-2 my-sm-0' type='submit' @click='handleLogout()'>Logout</button>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for='x in dummyData.items' :key='x.id.videoId'>
        <div class="card" style="height: 35rem; margin: 1em">
          <img class="card-img-top" :src="x.snippet.thumbnails.medium.url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{x.snippet.title}}</h5>
            <p class="card-text">{{x.snippet.description}}</p>
            <a class="btn btn-primary manage-live-button" @click='handleManageLiveClick(x)'>Manage Live</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StreamHome',
  data () {
    return {
      dummyData: undefined
    }
  },
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
    },
    getStreams () {
      const path = `http://localhost:5003/getStreams`
      axios.get(path)
      .then(({data}) => {
        this.dummyData = Object.assign({}, data)
      })
      .catch(error => {
        console.log(error)
      })
    },
    handleManageLiveClick (liveSteamData) {
      this.$router.push({
        name: 'ShowStream',
        params: {
          id: liveSteamData.id,
          liveSteamData: liveSteamData
        }
      })
    }
  },
  mounted () {
    this.getStreams()
  }
}
</script>
<style>
  .manage-live-button {
    position: absolute;
    bottom: 1em;
    right:1em;
  }
  .navbar {
    margin-bottom: 2em;
  }
</style>
