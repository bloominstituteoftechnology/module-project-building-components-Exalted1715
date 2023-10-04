function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const container = document.createElement('nav')
    links.forEach(link => {
      const a = document.createElement('a')
      a.href = link.href
      a.title = link.title
      a.textContent = link.textContent
      container.appendChild(a)
    })

    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    let container = document.createElement('div')
    container.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent = learner.fullName

    const idElement = document.createElement('p')
    idElement.textContent = `Learner ID: ${learner.id}`

    const dobP = document.createElement('p')
    dobP.textContent =  `Date of Birth: ${learner.dateOfBirth}`

    const favLanguageP = document.createElement('p')
    const favLanguage = languages.find(lang => lang.id === learner.favLanguage)
    favLanguageP.textContent = `Favorite Language: ${favLanguage.name}`;

    [nameP, idElement, dobP, favLanguageP].forEach((p)=>{
      container.appendChild(p)
    })
    container.addEventListener('click', event => {
      document.querySelectorAll('.learner-card').forEach(container => {
        container.classList.remove('active')
      })
      container.classList.add('active')
    } )
    return container
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
   learners.forEach((learner)=>{
    const learnerCard = buildLearnerCard(learner, languages)
    document.querySelector('section').appendChild(learnerCard)
   })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footer =  document.createElement('footer')
    let companyInfoDiv = document.createElement('div')
    companyInfoDiv.classList.add('company-info')
    let companyNameP = document.createElement('p')
    companyNameP.classList.add('company-name')
    companyNameP.textContent = footerData.companyName
    let addressP = document.createElement('p')
    addressP.classList.add('address')
    addressP.textContent = footerData.address
    let contactEmailP = document.createElement('p')
    contactEmailP.classList.add('contact-email')
    contactEmailP.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`

     companyInfoDiv.appendChild(companyNameP)
     companyInfoDiv.appendChild(addressP)
     companyInfoDiv.appendChild(contactEmailP)

     let socialMediaDiv = document.createElement('div')
     socialMediaDiv.classList.add('social-media')

     for(let platform in footerData.socialMedia){
      let socialMediaLinks = document.createElement('a')
      socialMediaLinks.href = footerData.socialMedia[platform]
      socialMediaLinks.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMediaDiv.appendChild(socialMediaLinks)
     }
     let currentYear = new Date().getFullYear()
     let copyright = document.createElement('div')
     copyright.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`


     
     footer.appendChild(companyInfoDiv)
     footer.appendChild(socialMediaDiv)
     footer.appendChild(copyright)
    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  document.addEventListener('click', evt => {
    if(evt.target === document.querySelector('section')){
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(container => container.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
