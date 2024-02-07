export const useLogin = () => {
    const email = ref('');
    const password = ref('');

    const emailError = computed(() => !isValidEmail(email.value));
    const passwordError = computed(() => !isValidPassword(password.value));
  
    const isValidForm = computed(() => !emailError.value && !passwordError.value)

    const loginWithPassword = async () => {
        if (!isValidForm.value) return;
        
        const response = await $fetch('/api/login', {
            method: 'POST',
            body: {
            email: email.value,
            password: password.value,
            },
        });
  
        const userTypeCookie = useCookie('userTypeCookie');
        const userType = userTypeCookie.value;
        console.log('iam triggered login', response)
    
        switch (userType) {
            case 'admin':
            return navigateTo('/auth/admin/dashboard');
            case 'regular':
            return navigateTo('/auth/regular/dashboard');
    
            default:
            return navigateTo('/login');
        }
        };
  
    return {
      email,
      password,
      emailError,
      passwordError,
      isValidForm,
      loginWithPassword,
    };
  }