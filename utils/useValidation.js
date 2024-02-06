export const useValidation = () => {
    //simple validation
    const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value);
    const isValidPassword = (value) => value.length >= 6;
    const isValidName = (value) => value.length < 300;

    return {
        isValidEmail,
        isValidPassword,
        isValidName,
    };
}
