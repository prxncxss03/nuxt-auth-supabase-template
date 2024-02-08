<script setup>
  useHead({
    title: 'Register',
    meta: [
      {
        name: 'description',
        content: 'Register to your account'
      }
    ]
  })
 const { name, email, password, nameError, emailError, passwordError, isValidForm, register } = useRegister()
</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <form @submit.prevent="register">
      <FormField label="Name" :error="nameError" errorMessage="Name is too long">
        <InputText v-model="name" id="name" />
      </FormField>

      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
        <InputText v-model="email" id="email" />
      </FormField>

      <FormField label="Password" :error="passwordError" errorMessage="Password must be at least 6 characters">
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full">Register</Button>
      <Message severity="error">Error Message</Message>

      <FormFooter path="/login" label="Login" title="Already have an account?" />
      </form>
  </div>
</template>
