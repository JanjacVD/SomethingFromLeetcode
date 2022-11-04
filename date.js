
const months = {
    0:'Jan',
    1:'Feb',
    2:'Mar',
    3:'Apr',
    4:'May',
    5:'Jun',
    6:'Jul',
    7:'Aug',
    8:'Sep',
    9:'Oct',
    10:'Nov',
    11:'Dec',

}
const year = document.querySelector('.year')
const month = document.querySelector('.monthpick span')
const pick = document.querySelector('.days')
const heading = document.querySelector('h1')
const todayDate = new Date();
let currMonth = todayDate.getMonth()
let currYear = todayDate.getFullYear()
year.innerHTML = currYear
month.innerHTML = months[currMonth]

function getDays(y,m){
    const numOfDays = new Date(y, m+1, 0).getDate();
    pick.innerHTML = ''
    for(let i = 1; i <= numOfDays; i++){
        let newDate = new Date(y,m,i)
        let c = document.createElement('span');
        pick.appendChild(c);
        c.addEventListener("click", displayDate);
        c.innerText = newDate.getDate()
        const span = newDate.getDay()
        if(span === 0){
            c.style.gridColumn = 7
        }
        else{
            c.style.gridColumn = span
        }
    }
}
function prevMonth(){
    if(currMonth === 0){
        currMonth = 11;
        currYear--
    }
    else{
        currMonth--
    }
    year.innerHTML = currYear
    month.innerHTML = months[currMonth]
    getDays(currYear,currMonth)
}
function nextMonth(){
    if(currMonth === 11){
        currMonth = 0;
        currYear++
    }
    else{
        currMonth++
    }
    year.innerHTML = currYear
    month.innerHTML = months[currMonth]
    getDays(currYear,currMonth)
}
function displayDate(e){
    let day = e.currentTarget.innerText
    const date = new Date(currYear, currMonth,day )
    const string = date.getDate() + '-' + (+date.getMonth() + 1) + '-'+ date.getFullYear()
    heading.innerText = string;
}
getDays(currYear,currMonth)
