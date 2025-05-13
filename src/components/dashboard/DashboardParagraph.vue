<script setup>
import Axios from '@/utils/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const handeUserProfile = async() => {

  try {
    const response = await Axios.get('/auth/user-profile')

    console.log("response", response);
  } catch (error) {
    console.log("error on catch", error);
  }

}

const handleRegistration = () => {
  router.push({ name: 'SendRegistrationInvite' })
}

</script>
<template>
  <h6 class="text-lg text-gray-500 font-semibold mb-6">Course Page</h6>

  <button @click="handeUserProfile">Fetch user profile data</button>

  <div class="row">
    <div class="flex">
      <button @click="handleRegistration">Redirect to send register invite</button>
    </div>
  </div>
</template>
