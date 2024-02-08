export const useRegister = () => {
    const name = ref('');
    const email = ref('');
    const password = ref('');

    const registerClick = ref(false);
  
    const nameError = computed(() => nameTouched.value && !isValidName(name.value));
    const emailError = computed(() => emailTouched.value && !isValidEmail(email.value));
    const passwordError = computed(() => passwordTouched.value && !isValidPassword(password.value));

    const isErrorRegister = ref(false);
    const registerError = ref('');

    const nameTouched = ref(false);
    const emailTouched = ref(false);
    const passwordTouched = ref(false);
  
    const isValidForm = computed(() => !nameError.value && !emailError.value && !passwordError.value);

    watch(isErrorRegister, (value) => {
      if (value) {
          setTimeout(() => {
              isErrorRegister.value = false;
          }, 8000);
      }
  });


    watch(registerClick, (value) => {
      if (value) {
          setTimeout(() => {
              registerClick.value = false;
          }, 8000);
      }
  })
  
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

        if (response.data === 'User has already been registered. Please login.') {
          isErrorRegister.value = true;
          registerError.value = 'User has already been registered. Please login.';
          return;

        }

        isErrorRegister.value = false;
        name.value = '';
        email.value = '';
        password.value = '';
        nameTouched.value = false;
        emailTouched.value = false;
        passwordTouched.value = false;
        registerClick.value = true;

      } catch (error) {
        console.error('Error registering user:', error);
        isErrorRegister.value = true;
        registerError.value = 'Error registering user';
      }
    };
  
    return {
      name,
      email,
      password,
      nameTouched,
      emailTouched,
      passwordTouched,
      nameError,
      emailError,
      passwordError,
      isErrorRegister,
      registerError,
      isValidForm,
      registerClick,
      register,
    };
}
