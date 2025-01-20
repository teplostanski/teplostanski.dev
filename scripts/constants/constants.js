export var ENV = {
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
};
export var TIME = {
    msInSecond: 1000,
    secondsInMinute: 60,
    minutesInHour: 60,
    hoursInDay: 24,
    get msInDay() {
        return (this.msInSecond *
            this.secondsInMinute *
            this.minutesInHour *
            this.hoursInDay);
    },
};
export var DATES = {
    programmersDayNumber: 256,
    piDay: {
        month: 2, // март
        date: 14,
    },
};
export var CONSOLE_STYLES = {
    title: 'font-size: 20px; font-weight: bold;',
    subtitle: 'font-size: 16px; font-weight: bold;',
    text: 'font-size: 13px;',
};
export var LOCALES = [
    { code: 'ru', name: 'Русский', prefix: '/' },
    { code: 'en', name: 'English', prefix: '/en' },
];
