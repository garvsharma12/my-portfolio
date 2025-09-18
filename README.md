## Contact form email configuration

This project includes a serverless email sender using Resend.

1. Create a Resend API key: https://resend.com
2. Add the following environment variables:

For local development, create a `.env.local` in project root:

```
VITE_CONTACT_ENDPOINT=/api/contact
RESEND_API_KEY=your_resend_api_key_here
CONTACT_TO_EMAIL=garv.sharma1202@gmail.com
```

For Vercel deployment, add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as Project Environment Variables (do not expose the key in client-side envs).

The contact form posts to `/api/contact` by default. It sends an email to `CONTACT_TO_EMAIL`, or falls back to `garv.sharma1202@gmail.com` when unset.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
