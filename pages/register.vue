<script setup>
  const name = ref('')
  const email = ref('')
  const password = ref('')

  const nameError = computed(() => !isValidName(name.value));
  const emailError = computed(() => !isValidEmail(email.value));
  const passwordError = computed(() => !isValidPassword(password.value));

  const isValidForm = computed(() => !nameError.value && !emailError.value && !passwordError.value);
  
  const register = async () => {
    if (!isValidForm.value) return
    const response = await $fetch('/api/register',{
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value
      }
    })
    console.log("register data", response)
}
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
    </form>
  </div>
</template>
