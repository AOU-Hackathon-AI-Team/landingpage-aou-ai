

const ele = `
<div class="calender">
            <ul id="days">
            </ul>
            <header class="">
                انطلاق الهاكاثون
            </header>
            <ul id="grid">
            </ul>
</div>

`
if(document.getElementById('timeline'))
document.getElementById('timeline').innerHTML = ele;



const grid = document.getElementById('grid');
const days = document.getElementById('days');
const numberOfDays = 12;
const months = [
    "Jan", "Feb",
    "Mar", "Apr", "May",
    "Jun", "Jul", "Aug",
    "Sep", "Oct",
    "Nov", "Dec"
];
const daya = [];
const date = new Date('2023', '0', '15');
const evnets = [
    {
        title: 'فترة استقبال مشاركات التسجيل',
        stratAt: 15,
        numberOfDays: 8
    },
    {
        title: 'إعلان المرشحين للمرحلة الأولى',
        stratAt: 21,
        numberOfDays: 5
    },
    {
        title: 'عقد الورش التدريبية',
        stratAt: 23,
        numberOfDays: 3
    },
    {
        title: 'عرض الأفكار',
        stratAt: 23,
        numberOfDays: 1
    },
    {
        title: 'إعلان المرشحين للمرحلة النهائية',
        stratAt: 23,
        numberOfDays: 1
    },
    {
        title: 'الحفل الختامي',
        stratAt: 24,
        numberOfDays: 1
    },

]
for (let i = 0; i < numberOfDays; i++) {
    let isActive = i == 6;
    grid.innerHTML += `
    <li data-month="${months[date.getMonth()]}" data-day="${date.getDate()}" data-index="${i}" data-isActive="${isActive}"><span class="dash"></span></li>
`;

    days.innerHTML += `
<li data-month="${months[date.getMonth()]}"  data-index="${i}" data-isActive="${isActive}">
    <span>${date.getDate()}</span>
    <span>${months[date.getMonth()]}</span>
</li>
`
    date.setDate(date.getDate() + 1);
}

const width = grid.clientWidth/12; 
const height =( grid.clientHeight / 6) -10 ;
evnets.forEach((ele, i) => {
    let to = +ele.numberOfDays + ele.stratAt;
    document.querySelector(`#grid [data-day="${ele.stratAt}"]`).innerHTML += `
<div class="card" data-start="${ele.stratAt}" data-number-of-days="${ele.numberOfDays}" data-is-active="${ i == 0}"
    style="width: ${+width * +ele.numberOfDays + (ele.numberOfDays == 1? 0 :0) }px; top: ${ (height * i) + 20}px "
>
        <span></span>
        <div class="content">
            <span> ${ele.title}</span>
            <span>${ele.stratAt} Jun ${(ele.numberOfDays > 1 ?  to+ ' - Jan ' : '')} </span>
        </div>
    </div>
`
});


