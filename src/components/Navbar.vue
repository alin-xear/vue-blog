<template>
  <header>
    <h1><RouterLink :to="{ name: 'home' }">The Blog</RouterLink></h1>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Create' }">Create post</RouterLink>

    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

header h1 a,
header h1 a.router-link-active{
  color: #dfdfdf;
  font-size: 48px;
}

header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}

header a.router-link-active {
  color: #444;
  font-weight: bold;
}

</style>