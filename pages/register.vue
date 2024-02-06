<script setup>

const name = ref('')
const email = ref('')
const password = ref('')

</script>


<template>
    <div class="card flex flex-col items-center gap-3 bg-brown-500">
        <InputText v-model="name" type="text" placeholder="Name"/>
        <InputText v-model="email" type="text" placeholder="Email"/>
        <Password v-model="password" type="password" placeholder="Password"/> 
        <Button label="Login with Password" @click="loginWithPassword"/>
      </div>  
</template>