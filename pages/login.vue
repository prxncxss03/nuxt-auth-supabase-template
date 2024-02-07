<script setup>

  const email = ref('');
  const password = ref('');

  const isValidEmail = ref(false); // Initialize with a default value
  const isValidPassword = ref(false)

  const validateEmail = () => {
    // Update isValidEmail based on the email value
    isValidEmail.value = /\S+@\S+\.\S+/.test(email.value);
  };

  const validatePassword = () => {
    // Update isValidPassword based on the password length
    isValidPassword.value = password.value.length >= 6;
  };
  
  const loginWithPassword = async () => {
  
      
      const response = await $fetch('/api/login', {
          method: 'POST',
          body: {
          email: email.value,
          password: password.value,
          },
      });

      const userTypeCookie = useCookie('userTypeCookie');
      const userType = userTypeCookie.value;
  
      switch (userType) {
          case 'admin':
          return navigateTo('/auth/admin/dashboard');
          case 'regular':
          return navigateTo('/auth/regular/dashboard');
  
          default:
          return navigateTo('/login');
      }
      };
  

</script>

<template>
  <div class="p-4 max-w-md mx-auto">
    <form @submit.prevent="loginWithPassword">
      <FormField label="Email" :error="!isValidEmail" errorMessage="Invalid Email">
      <InputText v-model="email" id="email" @input="validateEmail" />
    </FormField>

      <FormField label="Password" :error="!isValidPassword" errorMessage="Password must be atleast 6 characters">
        <Password v-model="password" id="password" @input="validatePassword"/>
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full">Register</Button>
    </form>
  </div> 
</template>
