const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
let period = document.querySelectorAll('.period')



// switch periods

daily.addEventListener('click', function () {

    if (daily.classList.contains('inactive-color')) {

        daily.classList.remove('inactive-color')
        daily.classList.add('active')

        weekly.classList.add('inactive-color')
        weekly.classList.remove('active')

        monthly.classList.add('inactive-color')
        monthly.classList.remove('active')

    }
})

weekly.addEventListener('click', function () {

    if (weekly.classList.contains('inactive-color')) {

        weekly.classList.remove('inactive-color')
        weekly.classList.add('active')

        daily.classList.add('inactive-color')
        daily.classList.remove('active')

        monthly.classList.add('inactive-color')
        monthly.classList.remove('active')

    }
})


monthly.addEventListener('click', function () {

    if (monthly.classList.contains('inactive-color')) {

        monthly.classList.remove('inactive-color')
        monthly.classList.add('active')

        daily.classList.add('inactive-color')
        daily.classList.remove('active')

        weekly.classList.add('inactive-color')
        weekly.classList.remove('active')

    }
})






