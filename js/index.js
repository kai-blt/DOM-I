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
logo.setAttribute('src', siteContent["nav"]["img-src"]);




// Update .container a tags
let anchorArray = document.querySelectorAll('.container a');
anchorArray.forEach((tag, index) => tag.textContent = siteContent["nav"]["nav-item-"+index]); 




// Update cta area
let ctaH1 = document.querySelector(".cta h1");
let h1Text = siteContent["cta"]["h1"];
ctaH1.textContent = h1Text;

let ctaButton = document.querySelector(".cta button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);



// Update main-content
let mainContentH4 = document.querySelectorAll('.main-content h4'); //Get all H4s in main-content section
let mainContentKeys = Object.keys(siteContent["main-content"]); //Get all keys from main-content object
let mainContentH4Values = mainContentKeys.filter(item => item.includes('h4')); //Get specifically the H4 keys
mainContentH4.forEach((item, index) => item.textContent = siteContent["main-content"][mainContentH4Values[index]]); //For each H4 in the mainContentH4 arr change text to the values found in siteContent

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let mainContentP = document.querySelectorAll('.main-content p');
let mainContentPValues = mainContentKeys.filter(item => item.includes('content')); //Get specifically the H4 keys
mainContentP.forEach((item, index) => item.textContent = siteContent["main-content"][mainContentPValues[index]]);


// Update contact
let contact = document.querySelector('.contact').children; //Get children of contact section (h4, p)
let contactValues = Object.values(siteContent["contact"]);
Array.from(contact).forEach((item, index) => item.textContent = contactValues[index]); //Set contact section items




// Update Copyright
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent["footer"]["copyright"];