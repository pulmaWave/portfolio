import './style.css'
window.addEventListener('load', () => {
  const loader = document.getElementById('fancy-loader')
  const root = document.getElementById('root')

  // Hiện loader sau khi CSS tải xong
  loader.style.display = 'flex' // hoặc block nếu bạn dùng layout khác
  root.style.display = 'none'

  setTimeout(() => {
    loader.style.display = 'none'
    root.style.display = 'block'
  }, 3000)
})

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear()

// Theme toggle functionality
const themeToggle = document.querySelector('.theme-toggle')
const themeIcon = themeToggle.querySelector('i')

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches

if (savedTheme === 'light' || (!savedTheme && prefersDark)) {
  document.documentElement.setAttribute('data-theme', 'light')
  themeIcon.classList.replace('fa-sun', 'fa-moon')
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)

  // Toggle icon
  if (newTheme === 'dark') {
    themeIcon.classList.replace('fa-moon', 'fa-sun')
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon')
  }
})

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const navLinks = document.querySelector('.nav-links')

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in')

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('appear')
    }
  })
}

// Initial check on load
fadeInOnScroll()

// Check on scroll
window.addEventListener('scroll', fadeInOnScroll)

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible')
  } else {
    scrollTopBtn.classList.remove('visible')
  }
})

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const targetId = this.getAttribute('href')
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      })
    }
  })
})

// preload
