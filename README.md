# Modern Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Functional contact form with form validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper focus management
- **Performance**: Optimized images and lazy loading

## 🛠️ Tech Stack

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Heroicons** - Beautiful hand-crafted SVG icons
- **EmailJS** - Send emails directly from client-side
- **Vite** - Next generation frontend tooling

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills and technologies
│   ├── Contact.jsx     # Contact form and info
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx           # React entry point
└── index.css          # Global styles
```

## 🎨 Design Features

- **Color System**: Professional color palette with primary, secondary, and accent colors
- **Typography**: Inter font family for excellent readability
- **Spacing**: Consistent 8px spacing system
- **Animations**: Smooth entrance animations and micro-interactions
- **Responsive**: Mobile-first design with proper breakpoints

## 📱 Sections

1. **Hero** - Eye-catching introduction with call-to-action
2. **About** - Personal introduction and background
3. **Projects** - Showcase of featured work with live demos
4. **Skills** - Technical skills with progress bars and technology badges
5. **Contact** - Contact form and social media links
6. **Footer** - Additional links and information

## 🔧 Customization

### Personal Information
Update the following files with your personal information:
- `src/components/Hero.jsx` - Name, title, and tagline
- `src/components/About.jsx` - Personal story and profile image
- `src/components/Contact.jsx` - Contact information and social links
- `index.html` - Meta tags and page title

### Projects
Edit `src/components/Projects.jsx` to add your own projects:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    image: "project-image-url",
    technologies: ["React", "Tailwind", "etc"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/your-repo"
  },
  // Add more projects...
];
```

### Skills
Update `src/components/Skills.jsx` with your skills and proficiency levels.

### Styling
Customize the design by modifying:
- `tailwind.config.js` - Colors, fonts, and animations
- `src/index.css` - Global styles and custom CSS

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📧 Contact Form Setup

To enable the contact form:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the contact form in `src/components/Contact.jsx` with your EmailJS configuration

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use the `gh-pages` branch for deployment

## 📈 Performance

- Optimized images with proper loading strategies
- Minimal bundle size with tree shaking
- Efficient animations that don't block the main thread
- Semantic HTML for better SEO and accessibility

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-website/issues).

## 📞 Support

If you have any questions or need help customizing the template, feel free to reach out:

- Email: john.doe@example.com
- LinkedIn: [linkedin.com/in/johndoe](https://linkedin.com/in/johndoe)
- GitHub: [github.com/johndoe](https://github.com/johndoe)

---

**Built with ❤️ by John Doe**