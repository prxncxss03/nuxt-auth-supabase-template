<script setup>
  useHead({
    title: 'Login',
    meta: [
      {
        name: 'description',
        content: 'Login to your account'
      }
    ] 
  })

  const {email, password, emailError, passwordError, isValidForm, isErrorLogin, loginError, loginWithPassword } = useLogin()

</script>

<template>
  <div class="flex bg-green-400 justify-center items-center h-screen">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
      <InputText v-model="email" id="email"  />
    </FormField>

      <FormField label="Password" :error="passwordError" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full">Login</Button>
      <Message severity="error">Error Message</Message>         
    </form>
  </div> 
</template>
