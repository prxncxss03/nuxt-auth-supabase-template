export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }
  
export const isValidPassword = (password) => {
    return password.length >= 6;
}
  
export const isValidName = (name) => {
    return name.length < 300;
}
  