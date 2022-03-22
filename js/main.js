'use strict';

import { allowNextStage, resultLogo, setResultLogo } from './modules/common.js';
import { initStages, nextStage } from './modules/stages.js';
import { initShapeList } from './modules/shapesStage.js';

initShapeList();
initStages();

const downloadSVGBtn = document.querySelector('.download-svg-btn');
const downloadPNGBtn = document.querySelector('.download-png-btn');

const authDialogSvgWrapper = document.querySelector('.auth-dialog-svg-wrapper');

const authPopup = document.querySelector('.auth-popup');
const videoPopupDialog = document.querySelector('.video-popup-dialog');
const continueBtn = document.querySelector('.continue-btn');
const startAgainBtn = document.querySelector('.start-again-btn');

if (localStorage.getItem('logo')) {
    authPopup.style.display = 'flex';
    videoPopupDialog.style.display = 'none';
    authDialogSvgWrapper.innerHTML = localStorage.getItem('logo');
} else {
    authPopup.style.display = 'none';
}


continueBtn.addEventListener('click', () => {
    const realLogo = localStorage.getItem('logo');
    const realStage = +localStorage.getItem('stage')
    resultLogo.outerHTML = realLogo;
    for (let i = 0; i < realStage; i++) {
        nextStage(true)
    }
    localStorage.setItem('logo', realLogo);
    allowNextStage();
    setResultLogo(document.querySelector('.result-logo'))
    authPopup.style.display = 'none';
    videoPopupDialog.style.display = 'none';
})

startAgainBtn.addEventListener('click', () => {
    authPopup.style.display = 'none';
    videoPopupDialog.style.display = 'flex';
    localStorage.clear();
});

const onDownloadSVGBtnClick = () => {
    const svgData = resultLogo.outerHTML;
    const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "monsterLogo.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    localStorage.clear()
};

const onDownloadPNGBtnClick = () => {
    const html = document.querySelector(".result-logo").parentNode.innerHTML;
    const imgsrc = 'data:image/svg+xml;base64,' + btoa(html);
    const canvas = document.createElement("canvas"),
    context = canvas.getContext("2d");
    canvas.setAttribute('width', 512);
    canvas.setAttribute('height', 512);
    
    const image = new Image;
    image.src = imgsrc;
    image.onload = function () {
        context.drawImage(image, 0, 0);
        const canvasdata = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.textContent = "save";
        a.download = "export_" + Date.now() + ".png";
        a.href = canvasdata;
        a.click()
        a.remove()
        canvas.remove()
    };
    localStorage.clear()
};


downloadSVGBtn.addEventListener('click', onDownloadSVGBtnClick);
downloadPNGBtn.addEventListener('click', onDownloadPNGBtnClick)
