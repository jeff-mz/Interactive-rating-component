"use strict ";
const rateBtn = document.querySelectorAll('.rate');
const submitBtn = document.querySelector('.submit-btn');
const ratingCard = document.querySelector('.ratingcard');
const apperciation = document.querySelector('.apperciation');
let result = document.querySelector('.result')
let rate = 0;

rateBtn.forEach(btn => {
    btn.addEventListener('click', (el) => {
        rate = 0;
        rateBtn.forEach(el => {
            el.classList.remove('rateBtn-active');
        })
        if (el.target.classList.contains('rateBtn-active')) {
            el.target.classList.remove('rateBtn-active');
        } else {
            el.target.classList.add('rateBtn-active');
        }
        rate = el.target.textContent;
    })
});
submitBtn.addEventListener('click', () => {
    ratingCard.classList.add('hidden');
    apperciation.classList.remove('hidden');
    result.textContent = `You selected ${rate} out of 5`
})