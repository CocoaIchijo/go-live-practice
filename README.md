# Go Live: Next.js practice app

A tiny Next.js app for practising the 10 launch steps before you publish your own.

## Run it on your computer

1. Open this folder in VS Code.
2. Open a terminal (Terminal › New Terminal) and run:

   ```
   npm install
   npm run dev
   ```

3. Open http://localhost:3000 in your browser. Stop the server with Ctrl+C.

## Before you publish (Step 1)

```
npm run build
```

It should end with a list of routes (`/` and `/about`) and no red errors.

## What's inside

```
app/layout.js        the frame around every page: site title and footer
app/page.js          the home page, at /
app/about/page.js    the About page, at /about
app/globals.css      the colours and layout
public/images/       images, used as /images/...
.gitignore           what never gets uploaded (node_modules, .next, .env files)
```

## Practise Step 10

Change "Your Name" in `app/page.js`, save, then in GitHub Desktop click
**Commit to main** and **Push origin**. Vercel updates the live site by itself.
