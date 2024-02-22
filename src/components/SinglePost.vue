<template>
  <div class="post">
    <RouterLink :to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </RouterLink>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag">
      <RouterLink :to="{ name: 'Tag', params: { tag: tag } }" >
        #{{ tag }}
      </RouterLink>
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });


    return { snippet };
  },
};
</script>

<style>
.tag {
  display: inline-block;
  background-color: #f2f2f2;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}
.tag a {
  text-decoration: none;
  color: inherit;
  padding: 2px 10px;
  display: block;
  border-radius: 4px;
}
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #c7c6c6;
}
.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h3:before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.tag a.router-link-active {
    color: #fff;
    font-weight: bold;
    background-color: #444;
  }
</style>