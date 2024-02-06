export const useRegistration = () => {
  const name = ref('');
  const email = ref('');
  const password = ref('');

  const isValidEmail = computed(() => /\S+@\S+\.\S+/.test(email.value));
  const isValidPassword = computed(() => password.value.length >= 6);
  const isValidName = computed(() => name.value.length < 300);
  const isValidForm = computed(() => isValidEmail.value && isValidPassword.value && isValidName.value);

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
