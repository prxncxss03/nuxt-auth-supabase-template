<script setup>

const { email, password, loginWithPassword } = useLogin();

</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="!email" errorMessage="Invalid Email">
        <InputText v-model="email" id="email" />
      </FormField>

      <FormField label="Password" :error="!password" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" class="w-full">Login</Button>
    </form>
  </div> 
</template>
