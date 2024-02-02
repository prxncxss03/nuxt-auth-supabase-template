<script setup>
const supabase = useSupabaseClient()

const email = ref('')
const password = ref('')

const router = useRouter()

const submit = async () => {
  console.log(email.value, password.value)

  let { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    
  })

  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Data:', data)
    const token = useCookie('access_token')
    token.value = data.session.access_token
    console.log('Token:', token)
    
  }

  let { data: user, error: userError} = await supabase
  .from('users')
  .select('user_type')
  .eq('user_id', data.user.id)
  .single()

  if (userError) {
    console.error('User Error:', userError)
  } else {
    console.log('User:', user)
    switch (user.user_type){
      case 'admin':
        console.log('Admin')
        router.push('/admin/admin')
        break
      case 'regular':
        console.log('Regular')
        router.push('/regular/regular')
        break
      default:
        console.log('Unknown')
    }
  }

  


}
</script>

<template>
    <div class="card flex flex-col items-center gap-3">
        <InputText v-model="email" type="text" placeholder="Email"/>
        <InputText v-model="password" type="password" placeholder="Password" />
        <Button label="Submit" @click="submit"/>
        <p class="font-bold text-pink-950">{{ email}}</p>
        <p class="font-bold">{{ password}}</p>

        </div>
       
</template>
