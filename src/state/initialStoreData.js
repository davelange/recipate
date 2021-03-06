import mainc_wp_sm from '../assets/img/main-course-sm.webp';
import mainc_wp_m from '../assets/img/main-course-m.webp';
import mainc_png_m from '../assets/img/main-course-m.png';

import soup_wp_sm from '../assets/img/soup-sm.webp';
import soup_wp_m from '../assets/img/soup-m.webp';
import soup_png_m from '../assets/img/soup-m.png';

import fingerf_wp_sm from '../assets/img/fingerfood-sm.webp';
import fingerf_wp_m from '../assets/img/fingerfood-m.webp';
import fingerf_png_m from '../assets/img/fingerfood-m.png';

import salad_wp_sm from '../assets/img/salad-sm.webp';
import salad_wp_m from '../assets/img/salad-m.webp';
import salad_png_m from '../assets/img/salad-m.png';

import dessert_wp_sm from '../assets/img/dessert-sm.webp';
import dessert_wp_m from '../assets/img/dessert-m.webp';
import dessert_png_m from '../assets/img/dessert-m.png';

import snack_wp_sm from '../assets/img/snack-sm.webp';
import snack_wp_m from '../assets/img/snack-m.webp';
import snack_png_m from '../assets/img/snack-m.png';

const options = [
    'Vegan',
    'Vegetarian',
    'Gluten free'
]

const mealTypes = [
    {
        name: 'Main Course',
        img: {
            webpS: mainc_wp_sm,
            webpM: mainc_wp_m,            
            pngM: mainc_png_m
        }
    },
    {
        name: 'Soup',
        img: {
            webpS: soup_wp_sm,
            webpM: soup_wp_m,
            pngM: soup_png_m
        }
    },
    {
        name: 'Finger food',
        img: {
            webpS: fingerf_wp_sm,
            webpM: fingerf_wp_m,
            pngM: fingerf_png_m
        }
    },
    {
        name: 'Salad',
        img: {
            webpS: salad_wp_sm,
            webpM: salad_wp_m,
            pngM: salad_png_m
        }
    },
    {
        name: 'Dessert',
        img: {
            webpS: dessert_wp_sm,
            webpM: dessert_wp_m,
            pngM: dessert_png_m
        }
    },
    {
        name: 'Snack',
        img: {
            webpS: snack_wp_sm,
            webpM: snack_wp_m,
            pngM: snack_png_m
        }
    }
];

export {    
    mealTypes,
    options
};