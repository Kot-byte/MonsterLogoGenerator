'use strict';

import { activeLogosDataItem, letNextStage, personalizationPopup, resultLogo} from "./common.js";
import { initPersonalizationList } from "./personalizeStage.js";
import { initSwag } from "./swagStage.js";


const LAST_STAGE_NUM = 3;

const menuItems = document.querySelectorAll('.menu-item');
const stagesTitle = document.querySelector('.stages-title');
const stagesSlidesWrapper = document.querySelector('.stages-slides-wrapper');
const stagesSlides = stagesSlidesWrapper.querySelectorAll('.stages-slide');
const nextBtn = document.querySelector('.next-btn');

const stages = document.querySelector('.stages');
const swagPopup = document.querySelector('.swag-popup');

const openVideoBtns = document.querySelectorAll('.open-video-btn');
const videoPopup = document.querySelector('.video-popup');
const videoPopupCloseBtn = document.querySelector('.video-close-btn');

const onOpenVideoBtnClick = () => {
    if (videoPopup.classList.contains('video-popup-active')) {
        videoPopup.classList.remove('video-popup-active');
    } else {
        videoPopup.classList.add('video-popup-active');
    }
}

const onVideoPopupCloseBtnClick = () => {
    videoPopup.classList.remove('video-popup-active')
}

openVideoBtns.forEach(elem => {
    elem.addEventListener('click', onOpenVideoBtnClick)
})

videoPopupCloseBtn.addEventListener('click', onVideoPopupCloseBtnClick)

let activeStageNum = 0;

const updateStagesTitle = (stageNum) => {
    switch (stageNum) {
        case 1:
            stagesTitle.textContent = 'Lets Personalize This Shiz';
        break;
        case 2:
            stagesTitle.textContent = 'Add Some Swag';
        break;
        case 3:
            stagesTitle.textContent = 'Download Monster Logo';
        break;
    }
}


const updateStageSlide = (stageNum) => {
    stagesSlides.forEach(elem => {
        elem.classList.remove('stages-slide-active');
    });
    stagesSlides[stageNum].classList.add('stages-slide-active');

    menuItems.forEach(elem => {
        elem.classList.remove('menu-item-active');
    });
    menuItems[stageNum].classList.add('menu-item-active');
}


export const nextStage = (letNextStage) => {
    if (activeStageNum < LAST_STAGE_NUM && letNextStage) {
        activeStageNum++;
        updateStageSlide(activeStageNum);

        switch (activeStageNum) {
            case 1: 
                initPersonalizationList();
                localStorage.setItem('stage', 1)
                localStorage.setItem('logo', resultLogo.outerHTML)
                localStorage.setItem('dataItem', JSON.stringify(activeLogosDataItem))
            break;
            case 2:
                personalizationPopup.classList.remove('personalize-popup-active');
                localStorage.setItem('stage', 2)
                localStorage.setItem('logo', resultLogo.outerHTML)
                localStorage.setItem('dataItem', JSON.stringify(activeLogosDataItem))
                initSwag();
            break;
            case LAST_STAGE_NUM :
                localStorage.setItem('stage', 3)
                localStorage.setItem('logo', resultLogo.outerHTML)
                localStorage.setItem('dataItem', JSON.stringify(activeLogosDataItem))

                nextBtn.style.display = 'none';
                swagPopup.classList.remove('swag-popup-active');
                stages.classList.remove('stages-on-popup-active');
            break;
        }

        updateStagesTitle(activeStageNum);
    }
}


const onNextBtnClick = () => {
    nextStage(letNextStage);
}


export const initStages = () => {
    nextBtn.addEventListener('click', onNextBtnClick);
}