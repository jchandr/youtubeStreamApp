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
            <div class="comment-box">
              <div v-for='x in liveComments.items'>
                <Comment :authorName='x.authorDetails.displayName'
                :authorImage='x.authorDetails.profileImageUrl'
                :commentText='x.snippet.textMessageDetails.messageText'/>
              </div>
            </div>
            <div class="input-group mb-3 chat-input">
              <input type="text" class="form-control" placeholder="Chat here" aria-label="Username" aria-describedby="basic-addon1">
              <div class="input-group-prepend">
                <button class="btn btn-primary" id="basic-addon1">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Comment from '../Comment'
export default {
  name: 'ShowLive',
  props: {
    id: String,
    liveSteamData: Object
  },
  data () {
    return {
      commentsData: undefined
    }
  },
  methods: {
    pollComments () {
      const path = 'http://localhost:5003/getChatMessages/' + this.liveSteamData.snippet.liveChatId
      axios.get(path)
      .then(({data}) => {
        this.liveComments = data
      })
    }
  },
  computed: {
    liveLink () {
      return 'https://www.youtube.com/embed/' + this.id + '?autoplay=1'
    },
    liveComments: {
      get () {
        return this.commentsData
      },
      set (newVal) {
        this.commentsData = Object.assign({}, newVal)
      }
    }
  },
  mounted () {
    this.pollComments()
    setInterval(function () {
      this.pollComments()
    }.bind(this), 1500)
  },
  components: {
    Comment
  }
}
</script>

<style>
  .chat-box-wrapper {
    padding-top: 1rem;
  }
  .chat-box {
    height: 30rem;
    background: #1F1F1F;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    position: relative;
    padding-top: 1rem;
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
  .comment-box {
    overflow: scroll;
    height: 25rem;
  }
</style>
