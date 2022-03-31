'use strict';

import {activeLogosDataItem, clearDOMItem, generateDOMItem, logosData, resultLogo} from "./common.js";

let swags;

const stages = document.querySelector('.stages');
const swagList = document.querySelector('.swag-list');
const swagPopup = document.querySelector('.swag-popup');
const swagPopupTitle = document.querySelector('.swag-popup-title');

const chooseKeyIcon = (key) => {
    return key === 'none' ? 'none' : `<svg><use href="#${key}-icon"></use></svg>`;
}


const generateSwag = () => {
    const fragment = document.createDocumentFragment();
    
    clearDOMItem(swagList);

    for (let key in activeLogosDataItem.swag) {
        const template = ` 
            <li class="stages-item swag-item">
                <button class="stages-btn swag-btn ${key === 'icons' ? 'stages-btn-active' : ''}" data-swag="${key}">
                    ${activeLogosDataItem.swag[key].name}
                </button>
            </li>
        `;
        fragment.append(generateDOMItem(template));
    };
    return fragment;
}

const generateSwagPopup = () => {
    const div = document.createElement('div');

    for (let key in activeLogosDataItem.swag) {
        if (key === 'none') {
            continue;
        }
        const ul = document.createElement('ul');

        ul.classList.add('swag-popup-list');

        if (key === 'icons') {
            ul.classList.add('swag-popup-list-active');
        }
        ul.setAttribute('data-swag', key);

        ul.addEventListener('click', onSwagListItemClick);

        for (let key2 in activeLogosDataItem.swag[key].items) {
            const template = ` 
                <li class="stages-item swag-popup-item">
                    <button class="stages-btn swag-item-btn" data-swag-group="${key}" data-swag-item="${key2}">
                        ${chooseKeyIcon(key2)}
                    </button>
                </li>
            `;
            ul.append(generateDOMItem(template));
        }
        div.append(ul)
    };

    swagPopupTitle.textContent = swagList.querySelector('.stages-btn-active').textContent;

    return div;
}

const onSwagClick = (e) => {

    if (e.target.closest('.swag-btn')) {
        swagList.querySelectorAll('.swag-btn').forEach(elem => {
            elem.classList.remove('stages-btn-active');
        });
        if (e.target.closest('.swag-btn').dataset.swag !== 'none') {
            swagPopup.classList.add('swag-popup-active');
            stages.classList.add('stages-on-popup-active');
            e.target.closest('.swag-btn').classList.add('stages-btn-active');
            
            swagPopup.querySelectorAll('.swag-popup-list').forEach(elem => {
                elem.classList.remove('swag-popup-list-active');
            });
            swagPopup.querySelector(`.swag-popup-list[data-swag = ${e.target.closest('.swag-btn').dataset.swag}]`).classList.add('swag-popup-list-active');

            swagPopupTitle.textContent = e.target.closest('.swag-btn').textContent;

            document.querySelector('.tabs-section').style.display = 'flex'
        } else {
            swagPopup.classList.remove('swag-popup-active');
            stages.classList.remove('stages-on-popup-active');
            e.target.closest('.swag-btn').classList.add('stages-btn-active');

            swagPopupTitle.textContent = '';

            changeSwag('none');
            
            swagPopup.querySelectorAll('.swag-item-btn').forEach(elem => {
                elem.classList.remove('stages-btn-active');
            });
            
            document.querySelector('.color-picker-popup').style.display = 'none'
            document.querySelector('.tabs-section').style.display = 'none'
        }
    }

}

const onSwagMouseDown = (e) => {
    e.preventDefault();

    const swag = e.target.closest('.swag');
    resultLogo.append(swag)

    const coords = getCoords(resultLogo);

    function moveAt(e) {
        swag.setAttribute('x', e.pageX - coords.x - swag.getBoundingClientRect().width / 2 + 'px');
        swag.setAttribute('y', e.pageY - coords.y - swag.getBoundingClientRect().height / 2 + 'px');
    }

    resultLogo.onmousemove = function(e) {
        moveAt(e);
    };

    resultLogo.onmouseup = function() {
        resultLogo.onmousemove = null;
        swag.onmouseup = null;
    };

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();
        return {
            x: box.x - pageXOffset,
            y: box.y - pageYOffset,
        };
    }
}

const onSwagListItemClick = (e) => {
    if (e.target.closest('.swag-item-btn')) {

        if (!(e.target.closest('.swag-item-btn').dataset.swagGroup === 'none')) {

            if (!(e.target.closest('.swag-item-btn').classList.contains('stages-btn-active'))) {
                changeSwag(e.target.closest('.swag-item-btn').dataset.swagGroup, e.target.closest('.swag-item-btn').dataset.swagItem);
                e.target.closest('.swag-item-btn').classList.add('stages-btn-active');
            } else {
                e.target.closest('.swag-item-btn').classList.remove('stages-btn-active');
                resultLogo.querySelector(`.${e.target.closest('.swag-item-btn').dataset.swagItem}`).remove();
            }

        } else {
            swagPopup.querySelectorAll('.swag-item-btn').forEach(elem => {
                elem.classList.remove('stages-btn-active');
            });
            changeSwag(e.target.closest('.swag-item-btn').dataset.swagGroup, e.target.closest('.swag-item-btn').dataset.swagItem);
            e.target.closest('.swag-item-btn').classList.add('stages-btn-active');
        }
        swags = document.querySelectorAll('.swag')
        swags.forEach(elem => {
            elem.addEventListener('mousedown', onSwagMouseDown);
            elem.ondragstart = function() {
                return false;
            };
        })

    }
}


const changeSwag = (swagGroup, swagItem) => {
    if (!(swagGroup === 'none')) {
        resultLogo.innerHTML += activeLogosDataItem.swag[swagGroup].items[swagItem].shape;
    } else {
        resultLogo.querySelectorAll('.swag').forEach(elem => {
            elem.remove();
        });
        // document.querySelector('.color-picker-popup').style.display = 'none'
        // document.querySelector('.tabs-section').style.display = 'none'
    }
}


export const initSwag = () => {
    swagList.append(generateSwag());
    swagPopup.append(generateSwagPopup());

    swagPopup.classList.add('swag-popup-active');
    stages.classList.add('stages-on-popup-active');

    swagList.addEventListener('click', onSwagClick);
}
