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
 const {name, email, password, nameError, emailError, passwordError, isValidForm, registerClick,nameTouched, passwordTouched, emailTouched,isErrorRegister, registerError, register} = useRegister()
</script>

<template>
  <div class="flex flex-col font-inter dark:bg-gray-900 justify-center items-center h-screen">
    <form @submit.prevent="register">
      <FormField label="Name" :error="nameError" errorMessage="Name is too long">
        <InputText v-model="name" id="name" @blur="nameTouched = true"/>
      </FormField>

      <FormField label="Email" :error="emailError" errorMessage="Invalid Email">
        <InputText v-model="email" id="email" @blur="emailTouched = true"/>
      </FormField>

      <FormField label="Password" :error="passwordError" errorMessage="Password must be at least 6 characters">
        <Password v-model="password" id="password" @blur="passwordTouched = true"/>
      </FormField>

      <Button type="submit" :disabled="!isValidForm" class="w-full mt-2 dark:text-gray-900">Register</Button>

      </form>
      <Message severity="success" v-if="registerClick"> Please check your email for verification </Message>
      <Message severity="error" v-if="isErrorRegister"> {{ registerError }} </Message>

      <FormFooter path="/login" label="Login" title="Already have an account?" />
  </div>
</template>
