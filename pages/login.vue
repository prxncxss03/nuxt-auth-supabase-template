<script setup>
    
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const email = ref('')
const password = ref('')
const user_id = ref('')
const users = ref([])

const insertUser = async ({user_id_data}) => {
  const { data:log, error:logError } = await supabase
  .from('sessions')
  .insert({ user_id: user_id_data})

  if (logError) {
    console.error('Log Error:', logError)
  } 

}


const determineRedirectURL = async () => {

const { data: userData, error: userError } = await supabase.rpc('get_user_id_by_email', { email: email.value });
if (userError) {
  console.error('Error:', userError);
} else {


  if (userData.length === 0){
    console.log('User not found')
    const { data: newUser, error: newUserError } = await supabase
    .from('users')
    .insert([
      { user_id: user_id.value, user_type: 'regular'}
    ])

    if (newUserError) {
      console.error('Error from new user:', newUserError)
    } else {
      console.log('Data from new user:', newUser)
      insertUser({user_id_data: user_id.value})
      return 'http://localhost:3000/regular/regular'
    }
  }

  console.log('User UID:', userData[0].id);
  user_id.value = userData[0].id

  const { data: userTypeData, error: userTypeError } = await supabase
      .from('users')
      .select('user_type')
      .eq('user_id', user_id.value)
      .single()

  if (userTypeError) {
    console.error('Error from users:', userTypeError)
    
  } else {

    console.log('Data from users:', userTypeData)
    switch (userTypeData.user_type){
      case 'admin':
        insertUser({user_id_data: user_id.value})
        return 'http://localhost:3000/admin/admin'
      case 'regular':
        insertUser({user_id_data: user_id.value})
        return 'http://localhost:3000/regular/regular'
      default:
        console.log('Unknown')
    }
  }
} return 'http://localhost:3000/public/public';
}

    
const loginWithMagicLink = async () => {

  const redirectUrl = await determineRedirectURL();

  const { data, error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: redirectUrl, 
    },
  })
  if (data){
    console.log('Data from magic link:', data)
  } 
  if (error){
    console.error('Error from magic link:', error)
  } 

}

const loginWithPassword = async () => {
  const response = await $fetch('/api/login',{
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })

  console.log('Data received from server:', response)
  console.log('supabase user from login:', user.value)
  
  const userTypeCookie = useCookie('userTypeCookie')
  console.log('Cookiezzzzzzzzz:', userTypeCookie.value)
  if (userTypeCookie.value === 'admin'){
    return navigateTo('/auth/admin/dashboard')
  } 
  if (userTypeCookie.value === 'regular'){
    console.log('Redirecting to regular')
    return navigateTo('/auth/regular/dashboard')
  } 
}

</script>

<template>
    <div class="card flex flex-col items-center gap-3 bg-brown-500">
        <InputText v-model="email" type="text" placeholder="Email"/>
        <Password v-model="password" type="password" placeholder="Password"/> 
        <Button label="Login with Password" @click="loginWithPassword"/>
        <Button label="Login with Email" @click="loginWithMagicLink"/>
        <Button label = "Navigate to Public" @click="() => {navigateTo('/public/public')}"/>
        <p class="font-bold text-pink-950">{{ email}}</p>
      </div>  
</template>
