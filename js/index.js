const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const links = document.querySelectorAll('nav a')
const linksArray = Array.from(links)
  linksArray[0].textContent = siteContent['nav']['nav-item-1']
  linksArray[1].textContent = siteContent['nav']['nav-item-2']
  linksArray[2].textContent = siteContent['nav']['nav-item-3']
  linksArray[3].textContent = siteContent['nav']['nav-item-4']
  linksArray[4].textContent = siteContent['nav']['nav-item-5']
  linksArray[5].textContent = siteContent['nav']['nav-item-6']
const header = document.querySelector('h1')
  header.innerHTML = siteContent['cta']['h1']
const headButt = document.querySelector('.cta-text button')
  headButt.textContent = siteContent['cta']['button']
const headerImage = document.getElementById('cta-img')
  headerImage.setAttribute('src', siteContent ['cta']['img-src'])
const mainHeading = document.querySelectorAll('.text-content h4')
const mainHeadingArray = Array.from(mainHeading)
  mainHeadingArray[0].textContent = siteContent['main-content']['features-h4']
  mainHeadingArray[1].textContent = siteContent['main-content']['about-h4'] 
  mainHeadingArray[2].textContent = siteContent['main-content']['services-h4']
  mainHeadingArray[3].textContent = siteContent['main-content']['product-h4']
  mainHeadingArray[4].textContent = siteContent['main-content']['vision-h4']
const mainContent = document.querySelectorAll('.text-content p')
const mainContentArray = Array.from(mainContent)
  mainContentArray[0].textContent = siteContent['main-content']['features-content']
  mainContentArray[1].textContent = siteContent['main-content']['about-content']
  mainContentArray[2].textContent = siteContent['main-content']['services-content']
  mainContentArray[3].textContent = siteContent['main-content']['product-content']
  mainContentArray[4].textContent = siteContent['main-content']['vision-content']
const mainImage = document.getElementById('middle-img')
  mainImage.setAttribute('src', siteContent['main-content']['middle-img-src'])
const contactHeading = document.querySelector('.contact h4')
  contactHeading.textContent = siteContent['contact']['contact-h4']
const contact = document.querySelectorAll('.contact p')
const contactArray = Array.from(contact)
  contactArray[0].textContent = siteContent['contact']['address']
  contactArray[1].textContent = siteContent['contact']['phone']
  contactArray[2].textContent = siteContent['contact']['email']
const copyright = document.querySelector('footer p')
    copyright.textContent = siteContent['footer']['copyright']




