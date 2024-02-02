<script setup>
const email = useState('email', '')
const password = useState('password', '')

import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabaseUrl = config.public.supabaseUrl
const supabaseKey = config.public.supabaseKey

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key:', supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)
const countries = ref([])

const fetchCountries = async () => {
  const { data, error } = await supabase.from('countries').select('*')
  if (error) {
    console.error('Error fetching countries:', error)
  } else {
    countries.value = data
  }
}

fetchCountries()

const submit = () => {
  console.log(email.value, password.value)
}
</script>

<template>
    <div class="card flex flex-col items-center gap-3">
        <InputText v-model="email" type="text" placeholder="Email"/>
        <InputText v-model="password" type="password" placeholder="Password" />
        <Button label="Submit" @click="submit"/>
        <p class="font-bold text-pink-950">{{ email}}</p>
        <p class="font-bold">{{ password}}</p>

        <div class="flex flex-col gap-3">
            <h2 class="text-2xl font-bold">Countries</h2>
            <ul class="flex flex-col gap-3">
                <li v-for="country in countries" :key="country.id" class="font-bold">{{ country.name }}</li>
            </ul>
        </div>
    </div>
</template>
