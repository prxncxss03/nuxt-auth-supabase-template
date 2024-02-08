# Nuxt.js Login App with Supabase Integration

This is a simple login app created with Nuxt.js, Prime Vue, Tailwind, and Supabase. It serves as a template or guide for building a minimal authentication system with server-side rendering (SSR).

## Features

- User authentication with regular and admin roles.
- Server and client route protection.
- Supabase integration for user data storage.
- Token verification for email confirmation.
- Dynamic theming based on the system theme (light/dark).

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/prxncxss03/simple-login.git
   ```

2. Install dependencies:

   ```bash
     npm install
   ```
3. Set up environment variables:

   ```bash
     SUPABASE_URL=<URL>
     SUPABASE_KEY=<anon key>
     BASE_URL=http://localhost:3000
   ```
4. Run the app:
    ```bash
       npm run dev
     ```
Visit http://localhost:3000 in your browser to see the app in action.

## Usage
- Regular users: After login, a greeting and a logout button are displayed.  
- Admin users: A table shows user IDs and the number of logins.
- Email Confirmation: Clicking the confirmation email redirects to a confirmation page.
- Theme: The app dynamically changes based on the system theme.

## Notes
This app was developed as an assignment for an upcoming OJT. It's a great starting point for building more complex applications with Nuxt.js and Supabase.

Feel free to customize and extend the app according to your needs!
