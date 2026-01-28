const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')
let period = document.querySelectorAll('.period')

let workHoursStatistic = document.querySelector('#work-hours-statistic')
let workLastTimeStatistic = document.querySelector('#work-last-time-statistic')

let playHoursStatistic = document.querySelector('#play-hours-statistic')
let playLastTimeStatistic = document.querySelector('#play-last-time-statistic')

let studyHoursStatistic = document.querySelector('#study-hours-statistic')
let studyLastTimeStatistic = document.querySelector('#study-last-time-statistic')

let exerciseHoursStatistic = document.querySelector('#exercise-hours-statistic')
let exerciseLastTimeStatistic = document.querySelector('#exercise-last-time-statistic')

let socialHoursStatistic = document.querySelector('#social-hours-statistic')
let socialLastTimeStatistic = document.querySelector('#social-last-time-statistic')

let selfCareHoursStatistic = document.querySelector('#self-care-hours-statistic')
let selfCareLastTimeStatistic = document.querySelector('#self-care-last-time-statistic')

let hoursStatistics = document.querySelectorAll('.hour-statistic')
let lastTimeStatistics = document.querySelectorAll('.last-time-statistic')


async function getData() {
    const file = ('../data.json')
    const response = await fetch(file)
    const data = await response.json()
    return data
}



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

    if (daily.classList.contains('active')) {

        getData().then(function (data) {
            workHoursStatistic.textContent = `${data[0].timeframes.daily.current}hrs`
            workLastTimeStatistic.textContent = `Yesterday - ${data[0].timeframes.daily.previous}hrs`

            playHoursStatistic.textContent = `${data[1].timeframes.daily.current}hrs`
            playLastTimeStatistic.textContent = `Yesterday - ${data[1].timeframes.daily.previous}hrs`

            studyHoursStatistic.textContent = `${data[2].timeframes.daily.current}hrs`
            studyLastTimeStatistic.textContent = `Yesterday - ${data[2].timeframes.daily.previous}hrs`

            exerciseHoursStatistic.textContent = `${data[3].timeframes.daily.current}hrs`
            exerciseLastTimeStatistic.textContent = `Yesterday - ${data[3].timeframes.daily.previous}hrs`

            socialHoursStatistic.textContent = `${data[4].timeframes.daily.current}hrs`
            socialLastTimeStatistic.textContent = `Yesterday - ${data[4].timeframes.daily.previous}hrs`

            selfCareHoursStatistic.textContent = `${data[5].timeframes.daily.current}hrs`
            selfCareLastTimeStatistic.textContent = `Yesterday - ${data[5].timeframes.daily.previous}hrs`

        })
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

    if (weekly.classList.contains('active')) {

        getData().then(function (data) {
            workHoursStatistic.textContent = `${data[0].timeframes.weekly.current}hrs`
            workLastTimeStatistic.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`

            playHoursStatistic.textContent = `${data[1].timeframes.weekly.current}hrs`
            playLastTimeStatistic.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`

            studyHoursStatistic.textContent = `${data[2].timeframes.weekly.current}hrs`
            studyLastTimeStatistic.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`

            exerciseHoursStatistic.textContent = `${data[3].timeframes.weekly.current}hrs`
            exerciseLastTimeStatistic.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`

            socialHoursStatistic.textContent = `${data[4].timeframes.weekly.current}hrs`
            socialLastTimeStatistic.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`

            selfCareHoursStatistic.textContent = `${data[5].timeframes.weekly.current}hrs`
            selfCareLastTimeStatistic.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`

        })
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

    if (monthly.classList.contains('active')) {

        getData().then(function (data) {
            workHoursStatistic.textContent = `${data[0].timeframes.monthly.current}hrs`
            workLastTimeStatistic.textContent = `Last Month - ${data[0].timeframes.monthly.previous}hrs`

            playHoursStatistic.textContent = `${data[1].timeframes.monthly.current}hrs`
            playLastTimeStatistic.textContent = `Last Month - ${data[1].timeframes.monthly.previous}hrs`

            studyHoursStatistic.textContent = `${data[2].timeframes.monthly.current}hrs`
            studyLastTimeStatistic.textContent = `Last Month - ${data[2].timeframes.monthly.previous}hrs`

            exerciseHoursStatistic.textContent = `${data[3].timeframes.monthly.current}hrs`
            exerciseLastTimeStatistic.textContent = `Last Month - ${data[3].timeframes.monthly.previous}hrs`

            socialHoursStatistic.textContent = `${data[4].timeframes.monthly.current}hrs`
            socialLastTimeStatistic.textContent = `Last Month - ${data[4].timeframes.monthly.previous}hrs`

            selfCareHoursStatistic.textContent = `${data[5].timeframes.monthly.current}hrs`
            selfCareLastTimeStatistic.textContent = `Last Month - ${data[5].timeframes.monthly.previous}hrs`

        })
    }
})




