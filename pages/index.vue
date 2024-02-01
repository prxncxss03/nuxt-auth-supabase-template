<script setup>
    const email = useState('email', '');
    const password = useState('password', '');

    const submit = () => {
        console.log(email.value, password.value)
    }
</script>

<template>
    <div class="card flex flex-col items-center gap-3">
        <InputText v-model="email" type="text" placeholder="Email" />
        <InputText v-model="password" type="password" placeholder="Password" />
        <Button label="Submit" @click="submit"/>
        <p class="font-bold">{{ email }}</p>
        <p class="font-bold">{{ password }}</p>


     
    </div>
</template>

