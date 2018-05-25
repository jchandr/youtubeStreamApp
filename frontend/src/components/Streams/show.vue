<template>
  <div>
    <router-view></router-view>
    <div class="container">
      <div class="row">
        <div class="col-md-6 live-stream-frame-wrapper">
          <iframe :src="liveLink" class="live-stream-frame" frameborder="0"></iframe>
        </div>
        <div class="col-md-6 chat-box-wrapper">
          <div class="chat-box">
            <div class="input-group mb-3 chat-input">
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Send</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowLive',
  props: {
    id: String,
    liveSteamData: Object
  },
  computed: {
    liveLink () {
      return 'https://www.youtube.com/embed/' + this.id + '?autoplay=1'
      // return 'https://www.youtube.com/embed/RtU_mdL2vBM'
    }
  }
}
</script>

<style>
  .chat-box-wrapper {
    padding: 1rem;
  }
  .chat-box {
    height: 40rem;
    background: #1F1F1F;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    position: relative;
  }
  .live-stream-frame-wrapper {
    padding: 1rem;
  }
  .live-stream-frame {
    width: 100%;
    height: 30rem;
  }
  .chat-input {
    position: absolute;
    bottom: 0;
  }
</style>
