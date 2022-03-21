document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('button').addEventListener('click', () => {
    const surveys = [
      'city',
      'nature',
      'mixed'
    ]

    const survey = surveys[Math.floor(Math.random() * surveys.length)]

    window.location = window.location
  })
})
