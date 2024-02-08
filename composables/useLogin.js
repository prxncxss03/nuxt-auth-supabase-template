export const useLogin = () => {
    const email = ref('');
    const password = ref('');

    const isErrorLogin = ref(false);
    const loginError = ref('');

    const emailError = computed(() => emailTouched.value && !isValidEmail(email.value));
    const passwordError = computed(() => passwordTouched.value && !isValidPassword(password.value));

    const emailTouched = ref(false);
    const passwordTouched = ref(false);

    watch(isErrorLogin, (value) => {
        if (value) {
            setTimeout(() => {
                isErrorLogin.value = false;
            }, 8000);
        }
    });
  
    const isValidForm = computed(() => !emailError.value && !passwordError.value );

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
                isErrorLogin.value = false;
                const userTypeCookie = useCookie('userTypeCookie');
                const userType = userTypeCookie.value;
                console.log("responses from login", response)
            switch (userType) {
                case 'admin':
                return navigateTo('/auth/admin/dashboard');
                case 'regular':
                return navigateTo('/auth/regular/dashboard');
        
                default:
                return navigateTo('/login');
            }
            } catch (error) {
                console.log('error from login client', error)
                isErrorLogin.value = true;
                loginError.value = "Invalid email or password";
                console.error('Error logging in:', error);
            }
        }
  
    return {
        email,
        password,
        emailError,
        passwordError,
        isValidForm,
        isErrorLogin,
        loginError,
        emailTouched,
        passwordTouched,
        loginWithPassword,
    };
  }