# Cristian Cedacero - Portfolio Website

A modern, responsive portfolio website showcasing backend engineering expertise and AI automation skills.

## 🚀 Deployment on Netlify (Free)

This site is optimized for free deployment on Netlify with the following features:
- Static site generation for fast loading
- Built-in contact form using Netlify Forms
- Automatic deployments from Git
- Custom domain support

### Quick Deploy Steps:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Click "Deploy site"

3. **Custom Domain (Optional):**
   - In Netlify dashboard, go to Site Settings > Domain Management
   - Add your custom domain
   - Follow DNS configuration instructions

### Build Configuration

The site uses these build settings (configured in `netlify.toml`):
- **Build Command:** `vite build --config vite.config.static.ts`
- **Publish Directory:** `dist`
- **Contact Form:** Automatically handled by Netlify Forms

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
vite build --config vite.config.static.ts
```

## 📧 Contact Form

The contact form uses Netlify's built-in form handling:
- No backend required
- Spam protection included
- Form submissions appear in Netlify dashboard
- Email notifications available

## 🎨 Features

- Responsive design for all devices
- Dark/light theme toggle
- Smooth scroll navigation
- Professional animations
- SEO optimized
- Fast loading performance

## 🔧 Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui
- **Deployment:** Netlify (Static)

---

Built with modern web technologies for optimal performance and user experience.