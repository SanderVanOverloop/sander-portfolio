# Next.js Portfolio

A modern, responsive portfolio website built with Next.js, featuring smooth animations and a clean design.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📱 Fully responsive design
- ✨ Smooth intro animation with typewriter effect
- 🎨 Modern CSS with CSS Modules
- 🧭 Client-side routing with Next.js App Router
- 📄 Multiple pages: Home, About, Projects, Contact
- 💫 Animated components and hover effects

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── components/
    ├── About/
    │   ├── About.jsx
    │   └── About.module.css
    ├── Contact/
    │   ├── Contact.jsx
    │   └── Contact.module.css
    ├── Homepage/
    │   ├── Homepage.jsx
    │   └── Homepage.module.css
    ├── IntroAnimation/
    │   ├── IntroAnimation.jsx
    │   └── IntroAnimation.module.css
    ├── Navbar/
    │   ├── Navbar.jsx
    │   └── Navbar.module.css
    └── Projects/
        ├── Projects.jsx
        └── Projects.module.css
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the following components with your personal information:

1. **Homepage Component** (`src/components/Homepage/Homepage.jsx`):
   - Update the name in the title
   - Modify the subtitle and description
   
2. **About Component** (`src/components/About/About.jsx`):
   - Add your personal story
   - Update the skills array with your technologies
   - Replace the placeholder image

3. **Projects Component** (`src/components/Projects/Projects.jsx`):
   - Replace the sample projects with your actual projects
   - Update project descriptions, technologies, and links

4. **Contact Component** (`src/components/Contact/Contact.jsx`):
   - Update contact information (email, phone, location)
   - Add your social media links

### Styling
Each component uses CSS Modules for styling. Modify the `.module.css` files to customize:
- Colors and gradients
- Typography and fonts
- Spacing and layout
- Animations and transitions

### Adding Images
1. Place images in the `public/` directory
2. Update image references in components
3. Use Next.js `Image` component for optimization

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
```bash
npm run build
npm start
```

## Migration from React Portfolio

This portfolio was migrated from a React/Vite application to Next.js with the following improvements:

- ✅ Server-side rendering for better SEO
- ✅ Optimized routing with Next.js App Router
- ✅ Better performance with Next.js optimizations
- ✅ Maintained all original components and styling
- ✅ Added proper TypeScript support ready structure

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## Tech Stack

- **Framework:** Next.js 15
- **Language:** JavaScript/JSX
- **Styling:** CSS Modules
- **Fonts:** Geist Sans & Geist Mono
- **Development:** Turbopack (for faster builds)

## Browser Support

This portfolio works on all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
