<script setup>

const email = ref('')
const password = ref('')

const loginWithPassword = async () => {
  const response = await $fetch('/api/login',{
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })
  
  const userTypeCookie = useCookie('userTypeCookie')
  if (userTypeCookie.value === 'admin'){
    return navigateTo('/auth/admin/dashboard')
  } 
  if (userTypeCookie.value === 'regular'){
    return navigateTo('/auth/regular/dashboard')
  } 
}
</script>

<template>
    <div class="card flex flex-col items-center gap-3 bg-brown-500">
        <InputText v-model="email" type="text" placeholder="Email"/>
        <Password v-model="password" type="password" placeholder="Password"/> 
        <Button label="Login with Password" @click="loginWithPassword"/>
      </div>  
</template>
