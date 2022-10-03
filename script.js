const datePicker = MCDatepicker.create({
    el: '#datepicker',
    bodyType: 'modal',
    closeOndblclick: false,
    theme: {
        theme_color: '#8abbf9',
        main_background: '#f0f0f0'
    },
    selectedDate: new Date(),
    dateFormat: 'dd-mmmm-yyyy',
    customOkBTN: '',
    customCancelBTN: ''
});

const input = document.querySelector('#datepicker');
const submit = document.querySelector('#submit');
const output = document.querySelector('.text');
let bnSeason = '';

const arrayBnMonth = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];
const arrayBnNumber = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const arrayBnSeason = ['গ্রীষ্মকাল', 'বর্ষাকাল', 'শরৎকাল', 'হেমন্তকাল', 'শীতকাল', 'বসন্তকাল'];
const afterDate = { la: 'লা', ra: 'রা', tha: 'ঠা', i: 'ই', she: 'শে' };


const convert = (date, month, year) => {

    let bnDate = 0;
    let bnMonth = 0;
    let bnYear = 0;
    let bnSeason = 0;
    let isLeapYear = false;

    if ((year % 4 == 0) && (year % 100 != 0)) {
        isLeapYear = true
    } 
    if (year % 400 == 0) {
        isLeapYear = true
    }

    if (month <= 4 && date <= 13) {
        bnYear = year - 594
    } else {
        bnYear = year - 593
    }

    const dateMonth = (date, month) => {
        switch (true) {
            case month == 1 && date <= 14:
                bnMonth = 9;
                bnDate = date + 16;
                bnSeason = 5;
                break;
            case month == 1 && date > 14:
                bnMonth = 10;
                bnDate = date - 14;
                bnSeason = 5;
                break;
            case month == 2 && date <= 13:
                bnMonth = 10;
                bnDate = date + 17;
                bnSeason = 5;
                break;
            case month == 2 && date > 13:
                bnMonth = 11;
                bnDate = date - 13;
                bnSeason = 5;
                break;
            case month == 3 && date <= 14 && !isLeapYear:
                bnMonth = 11;
                bnDate = date + 15;
                bnSeason = 6;
                break;
            case month == 3 && date <= 14 && isLeapYear:
                bnMonth = 11;
                bnDate = date + 16;
                bnSeason = 6;
                break;
            case month == 3 && date > 14:
                bnMonth = 12;
                bnDate = date - 14;
                bnSeason = 6;
                break;
            case month == 4 && date <= 13:
                bnMonth = 12;
                bnDate = date + 17;
                bnSeason = 6;
                break;
            case month == 4 && date > 13:
                bnMonth = 1;
                bnDate = date - 13;
                bnSeason = 1;
                break;
            case month == 5 && date <= 14:
                bnMonth = 1;
                bnDate = date + 17;
                bnSeason = 1;
                break;
            case month == 5 && date > 14:
                bnMonth = 2;
                bnDate = date - 14;
                bnSeason = 1;
                break;
            case month == 6 && date <= 14:
                bnMonth = 2;
                bnDate = date + 17;
                bnSeason = 1;
                break;
            case month == 6 && date > 14:
                bnMonth = 3;
                bnDate = date - 14;
                bnSeason = 2;
                break;
            case month == 7 && date <= 14:
                bnMonth = 3;
                bnDate = date + 17;
                bnSeason = 2;
                break;
            case month == 7 && date > 14:
                bnMonth = 4;
                bnDate = date - 14;
                bnSeason = 2;
                break;
            case month == 8 && date <= 15:
                bnMonth = 4;
                bnDate = date + 17;
                bnSeason = 2;
                break;
            case month == 8 && date > 15:
                bnMonth = 5;
                bnDate = date - 15;
                bnSeason = 3;
                break;
            case month == 9 && date <= 15:
                bnMonth = 5;
                bnDate = date + 16;
                bnSeason = 3;
                break;
            case month == 9 && date > 15:
                bnMonth = 6;
                bnDate = date - 15;
                bnSeason = 3;
                break;
            case month == 10 && date <= 15:
                bnMonth = 6;
                bnDate = date + 15;
                bnSeason = 3;
                break;
            case month == 10 && date > 15:
                bnMonth = 7;
                bnDate = date - 15;
                bnSeason = 4;
                break;
            case month == 11 && date <= 15:
                bnMonth = 7;
                bnDate = date + 16;
                bnSeason = 4;
                break;
            case month == 11 && date > 15:
                bnMonth = 8;
                bnDate = date - 15;
                bnSeason = 4;
                break;
            case month == 12 && date <= 15:
                bnMonth = 8;
                bnDate = date + 15;
                bnSeason = 4;
                break;
            case month == 12 && date > 15:
                bnMonth = 9;
                bnDate = date - 15;
                bnSeason = 5;
                break;
            default:
                bnMonth = false;
                bnDate = false;
                bnSeason = false;
                break;
        }

        return {
            month: bnMonth,
            date: bnDate,
            bnSeason: bnSeason
        }
    }

    
    const bnAfterDate = (num) => {
        switch(true) {
            case num == '১':
                return afterDate.la
            case num == '২' || num == '৩':
                return afterDate.ra
            case num == '৪':
                return afterDate.tha
            case num >= '৫' || num <= '১৮':
                return afterDate.i
            case num >= '১৯' || num <= '৩১':
                return afterDate.she
            default:
                return false
        }
    }

    const resultDateMonth = dateMonth(date, month);
    
    const resultDate = resultDateMonth.date.toString().split('').map((num) => arrayBnNumber[num]).join('');
    const resultMonth = arrayBnMonth[resultDateMonth.month - 1];
    const resultYear = bnYear.toString().split('').map((num) => arrayBnNumber[num]).join('');
    const resultSeason = arrayBnSeason[resultDateMonth.bnSeason - 1];

    output.innerHTML = `${resultDate}${bnAfterDate(resultDate)} ${resultMonth}, ${resultYear} বঙ্গাব্দ, ${resultSeason}`;
}


const getBengaliDateTime = () => {
    const date = datePicker.getDate();
    const month = datePicker.getMonth() + 1;
    const year = datePicker.getYear();
    
    convert(date, month, year)
}

window.onload = () => {
    datePicker.open();
    document.querySelector('.mc-date--today');
    getBengaliDateTime();
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('mc-date')) {
        getBengaliDateTime();
    }
})
