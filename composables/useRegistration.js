export const useRegistration = () => {
  const name = ref('');
  const email = ref('');
  const password = ref('');

  const { isValidEmail, isValidPassword, isValidName } = useValidation();
  const isValidForm = computed(() => isValidEmail(email.value) && isValidPassword(password.value) && isValidName(name.value));

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
      
      console.log("register data", response);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return {
    name,
    email,
    password,
    isValidEmail,
    isValidPassword,
    isValidName,
    isValidForm,
    register,
  };
}
