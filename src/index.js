import './sass/main.scss';
import countryTpl from './templates/countryTpl.hbs';
import countriesTpl from './templates/countriesTpl.hbs';
import fetchCountries from './js/fetchCountries.js';
import errorMessage from './js/pnotify.js';
const debounce = require('lodash.debounce');

const refs = {
    render: document.querySelector('.render-input-js'),
    input: document.querySelector('.search-input-js'),
};

const onDebounceInput = debounce(onCountryInput, 500);

refs.input.addEventListener('input', onDebounceInput);

function onCountryInput (e) {
    if(!e.target.value) {
        return;
    };
    const searchWord = e.target.value;
    fetchCountries(searchWord)
    .then(renderCountryMarkup)
    .catch(onCatch)
};

function renderCountryMarkup (countries) {
    if (countries.length === 1) {        
        renderCountry(countries);
    } else 
    if (countries.length >= 2 && countries.length <= 10) {
        renderCountries(countries);
    } else {
        errorMessage()
    };  
};

function renderCountry (countries) {
    countries.forEach(country => { 
        refs.render.innerHTML = countryTpl(country);
        refs.input.value = '';
    });
};

function renderCountries (countries) {
    const countriesArray = countries.map(c => c.name);    
    refs.render.innerHTML = countriesTpl(countriesArray);
};

function onCatch (error) {
    alert(`${error}`)
};