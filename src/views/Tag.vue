<template>
  <div class="tagView">
    
    <div v-if="error">
      {{ error }}
    </div>

    <div v-if="computedPosts.length" class="layout">
        <PostList :posts="computedPosts"  />
        <TagCloud :posts="posts" />
    </div>
    <div v-else-if="!error">
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUpdate } from "vue";
import { useRoute } from "vue-router";
import getPosts from "../composables/getPosts.js";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { posts, error, load } = getPosts();

    const currentTag = useRoute();

    load()

    const computedPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(currentTag.params.tag));
    });

    return { posts, error, computedPosts };
  },
};
</script>

<style scoped>
.tagView {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>