export const useLogin = () => {
    const email = ref('');
    const password = ref('');

    const isValidEmail = computed(() => /\S+@\S+\.\S+/.test(email.value));
    const isValidPassword = computed(() => password.value.length >= 6);
    const isValidName = computed(() => name.value.length < 300);
    const isValidForm = computed(() => isValidEmail.value && isValidPassword.value && isValidName.value);

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
      loginWithPassword,
    };
  }