<script setup>
  import Button from 'primevue/button';
  useHead({
    title: 'Login',
    meta: [
      {
        name: 'description',
        content: 'Login to your account'
      }
    ] 
  })

  const {email, password, emailError, passwordError, isValidForm, isErrorLogin, loginError, emailTouched, passwordTouched, loginWithPassword } = useLogin()

</script>

<template>
  <div class="flex font-inter bg-slate-900 justify-center items-center h-screen">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
      <InputText v-model="email" id="email" @blur="emailTouched = true" />
    </FormField>

      <FormField label="Password" :error="passwordError" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" @blur="passwordTouched = true"  />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full mt-2">Login</Button>
      <Message severity="error" v-if="isErrorLogin" > {{ loginError }} </Message>         

      <p class="text-center mt-2">Don't have an account? <NuxtLink to="/register" class="text-blue-500">Register</NuxtLink></p>
    </form>
  </div> 
</template>
