<script setup>

const { email, password, name, isValidEmail, isValidPassword, isValidName, isValidForm, register } = useRegistration();

</script>


<template>
     <div class="p-4 max-w-md mx-auto">
       <form @submit.prevent="register">
         <div class="mb-4">
           <label for="email" class="block mb-1">Email</label>
           <InputText v-model="email" id="email" :class="{ 'p-invalid': !isValidEmail }" />
           <div v-if="!isValidEmail" class="text-red-500">Invalid email</div>
         </div>
         <div class="mb-4">
           <label for="password" class="block mb-1">Password</label>
           <Password v-model="password" id="password" :class="{ 'p-invalid': !isValidPassword }" />
           <div v-if="!isValidPassword" class="text-red-500">Password must be at least 6 characters long</div>
         </div>
         <div class="mb-4">
           <label for="name" class="block mb-1">Name</label>
           <InputText v-model="name" id="name" :class="{ 'p-invalid': !isValidName }" />
           <div v-if="!isValidName" class="text-red-500">Name must be less than 300 characters</div>
         </div>
         <Button type="submit" :disabled="!isValidForm" class="w-full">Register</Button>
       </form>
     </div>
   </template>