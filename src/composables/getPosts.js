import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  const load = async () => {
    try {
      const res = await projectFirestore.collection('posts')
      .orderBy('created_at', 'desc')
      .get()
      
      if(!res.size > 0 ){
        throw Error('There are no posts here')
      }
      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    }
    catch (err) {
      error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPosts



