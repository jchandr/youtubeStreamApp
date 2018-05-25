<template>
  <div class="comment-wrapper">
    <img :src="authorImage" class="rounded-circle" width="30">
    <b>{{authorName}}:</b>
    {{commentText}}
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    authorName: String,
    authorImage: String,
    commentText: String
  }
}
</script>

<style>
  .comment-wrapper {
    color: white;
    margin: 0.5rem;
    position: relative;
  }
</style>
