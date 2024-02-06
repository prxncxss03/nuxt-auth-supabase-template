<script setup>

const { email, password, name, isValidEmail, isValidPassword, isValidName, isValidForm, register } = useRegistration();

</script>


<template>
  <div class="p-4 max-w-md mx-auto">
    <form @submit.prevent="register">
      <FormField label="Name" :error="!isValidName" errorMessage="Name is too long">
        <InputText v-model="name" id="name" />
      </FormField>

      <FormField label="Email" :error="!isValidEmail" errorMessage="Invalid Email">
        <InputText v-model="email" id="email" />
      </FormField>

      <FormField label="Password" :error="!isValidPassword" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" />
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full">Register</Button>
    </form>
  </div>
</template>
