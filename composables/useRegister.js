export const useRegister = () => {
    const name = ref('');
    const email = ref('');
    const password = ref('');
  
    const nameError = computed(() => !isValidName(name.value));
    const emailError = computed(() => emailTouched.value && !isValidEmail(email.value));
    const passwordError = computed(() => passwordTouched.value && !isValidPassword(password.value));

    const emailTouched = ref(false);
    const passwordTouched = ref(false);
  
    const isValidForm = computed(() => !nameError.value && !emailError.value && !passwordError.value);
  
    const register = async () => {
      if (!isValidForm.value) return;
      try {
        const response = await $fetch('/api/register', {
          method: 'POST',
          body: {
            name: name.value,
            email: email.value,
            password: password.value,
          },
        });
        console.log('register data', response);
        if (response.user){
          await navigateTo('/login')
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    };
  
    return {
      name,
      email,
      password,
      nameError,
      emailError,
      passwordError,
      isValidForm,
      register,
    };
}
