import axios from 'axios'

const API_PATH = 'https://youtube-stream-app.herokuapp.com/'

export default {
  authenticateUser () {
    const endpoint = API_PATH + 'authorize'
    return axios.get(endpoint)
  },
  pollComments (chatId) {
    const endpoint = API_PATH + 'getChatMessages/' + chatId
    return axios.get(endpoint)
  },
  sendMessage (messageBody) {
    const endpoint = API_PATH + 'postMessage/' + messageBody.snippet.liveChatId
    return axios.post(endpoint, messageBody)
  },
  getBroadcasts () {
    const endpoint = API_PATH + 'getStreams'
    return axios.get(endpoint)
  }
}
