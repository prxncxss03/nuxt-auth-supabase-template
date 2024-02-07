<script setup>

  const {email, password, emailError, passwordError, isValidForm, loginWithPassword } = useLogin()

</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
      <InputText v-model="email" id="email"  />
    </FormField>

      <FormField label="Password" :error="passwordError" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full">Login</Button>
    </form>
  </div> 
</template>
