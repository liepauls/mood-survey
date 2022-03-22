document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    const surveys = [
      'https://docs.google.com/forms/d/e/1FAIpQLSc-jC5WBQXeHqLIrhxv3ROWG1VF-eGqmQVxL8uf20yXSJkQEw/viewform?usp=sf_link',
      'https://docs.google.com/forms/d/e/1FAIpQLScTTKxSCyCLOoDuCX018xjxmGyNx21Q55WDtTINROMvVQ4Sdg/viewform?usp=sf_link',
      'https://docs.google.com/forms/d/e/1FAIpQLSf8jwlUvSloejO9TGbodzgGlUgGIaSG3hLRM16GnshKyUv7MQ/viewform?usp=sf_link'
    ]

    const survey = surveys[Math.floor(Math.random() * surveys.length)]

    window.location = survey
  })
})
