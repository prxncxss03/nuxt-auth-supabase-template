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

  const {email, password, emailError, isValidForm, isErrorLogin, loginError, emailTouched, loginWithPassword } = useLogin()

</script>

<template>
  <div class="flex font-inter dark:bg-gray-900 justify-center items-center h-screen">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
      <InputText v-model="email" id="email" @blur="emailTouched = true" />
    </FormField>

      <FormField label="Password" >
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full mt-2 dark:text-gray-900">Login</Button>
      <Message severity="error" v-if="isErrorLogin" > {{ loginError }} </Message>         

      <FormFooter path="/register" label="Register" title="Don't have an account?" />
    </form>
  </div> 
</template>
