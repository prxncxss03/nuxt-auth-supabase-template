export const useLogin = () => {
    const email = ref('');
    const password = ref('');

    const isErrorLogin = ref(true);
    const loginError = ref(null);

    const emailError = computed(() => !isValidEmail(email.value));
    const passwordError = computed(() => !isValidPassword(password.value));
  
    const isValidForm = computed(() => !emailError.value && !passwordError.value)

    const loginWithPassword = async () => {
        if (!isValidForm.value) return;
        
        try {
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
            } catch (error) {
                isErrorLogin.value = true;
                loginError.value = error.message;
                console.error('Error logging in:', error);
            }
        }
  
    return {
      email,
      password,
      emailError,
      passwordError,
      isValidForm,
      loginWithPassword,
    };
  }