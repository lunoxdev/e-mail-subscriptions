# E-mail Subscriptions

This is a web project developed with [Astro](https://astro.build/) that allows users to subscribe with their email address. The emails are stored in a [Supabase](https://supabase.com/) database.

## Features

- **Subscription Form:** Users can submit their email via a form.
- **Supabase Storage:** Emails are saved in the `Subscribers` table in the Supabase database.
- **Environment Variables:** Sensitive keys like the Supabase URL and Anon Key are managed using environment variables.

## Technologies Used

- **Astro Framework**: For generating the static website.
- **React.js**: Used for interactive components such as the subscription form.
- **Supabase**: Used for backend and database management.
- **Tailwind CSS**: For responsive design and layout.
- **JavaScript**: For frontend logic, without TypeScript.
- **Vercel**: For deployment and managing environment variables.
