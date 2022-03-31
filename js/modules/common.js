'use strict';

import { circleSVG } from './shapes/circle.js';
import { crossSVG } from './shapes/cross.js';
import { rhombusSVG } from './shapes/rhombus.js';
import { shieldSVG } from  './shapes/shield.js';
import { wreathSVG } from './shapes/wreath.js';
import { getAnchor } from './swag/anchor.js';
import { getInnerCircle } from './swag/innerCircle.js';
import { getCoffeeCap } from './swag/coffeeCap.js';
import { getMustache } from './swag/mustache.js';
import { getDoubleLine } from './swag/doubleLine.js';
import { getBurger } from './swag/burger.js';
import { getMilkShake } from './swag/milkshake.js';
import { getTako } from './swag/taco.js';
import { getApple } from './swag/apple.js';
import { getBlackboard } from './swag/blackboard.js';
import { getGlobus } from './swag/globus.js';
import { getDiplom } from './swag/diplom.js';
import { getTie } from './swag/tie.js';
import { getBag } from './swag/bag.js';
import { getShirt } from './swag/shirt.js';

export let resultLogo = document.querySelector('.result-logo');
export const personalizationPopup = document.querySelector('.personalize-popup');

export function setResultLogo (newLogo) {
    resultLogo = newLogo
}

export let letNextStage = false;
export let activeLogosDataItem = JSON.parse(localStorage.getItem('dataItem'));
export let activeLogosDataItemKey = '';

export const logosData = {
    circle: {
        iconLink: '#circle-icon',
        shape: circleSVG,
        personalize: {
            none: {
                name: 'Пусто',
            },
            singleLine: {
                name: 'В одну линию',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            none: {
                name: 'Пусто',
                items: {},
            },
            icons: {
                name: 'Еда',
                items: {
                    apple: {
                        shape: getApple('circle')
                    },
                    burger: {
                        shape: getBurger('circle')
                    },
                    milkShake: {
                        shape: getMilkShake('circle')
                    },
                    taco: {
                        shape: getTako('circle')
                    },
                },
            },
            shapes: {
                name: 'Школа',
                items: {
                    blackboard: {
                        shape: getBlackboard('')
                    },
                    globus: {
                        shape: getGlobus('')
                    },
                    diplom: {
                        shape: getDiplom('')
                    }
                }
            },
            clothes: {
                name: 'Одежда',
                items: {
                    tie: {
                        shape: getTie('')
                    },
                    bag: {
                        shape: getBag('')
                    },
                    shirt: {
                        shape: getShirt('')
                    }
                }
            },
            more: {
                name: 'Прочее',
                items: {
                    mustache: {
                        shape: getMustache('circle'),
                    },
                    coffeeCap: {
                        shape: getCoffeeCap('circle'),
                    },
                    anchor: {
                        shape: getAnchor('circle'),
                    },
                    innerCircle: {
                        shape: getInnerCircle('circle'),
                    },
                    doubleLine: {
                        shape: getDoubleLine('circle'),
                    },
                }
            },
        },
    },
    shield: {
        iconLink: '#shield-icon',
        shape: shieldSVG,
        personalize: {
            none: {
               name: 'Пусто',
            },
            singleLine: {
                name: 'В одну линию',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            none: {
                name: 'Пусто',
                items: {},
            },
            icons: {
                name: 'Иконки',
                items: {
                    mustache: {
                        shape: getMustache('shield'),
                    },
                    coffeeCap: {
                        shape: getCoffeeCap('shield'),
                    },
                    burger: {
                        shape: getBurger('shield')
                    },
                    milkShake: {
                        shape: getMilkShake('shield')
                    },
                    taco: {
                        shape: getTako('shield')
                    },
                    blackboard: {
                        shape: getBlackboard('')
                    },
                    globus: {
                        shape: getGlobus('')
                    },
                    diplom: {
                        shape: getDiplom('')
                    }
                },

            },
            shapes: {
                name: 'Формы',
                items: {
                    doubleLine: {
                        shape: getDoubleLine('shield'),
                    },
                }
            },
            more: {
                name: 'Ещё',
                items: {
                    anchor: {
                        shape: getAnchor('shield'),
                    },
                },
            },
        },
    },
    rhombus: {
        iconLink: '#rhombus-icon',
        shape: rhombusSVG,
        personalize: {
            none: {
                name: 'Пусто',
            },
            singleLine: {
                name: 'в одну линию',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
                
            },
        },
        swag: {
            none: {
                name: 'Пусто',
                items: {},
            },
            icons: {
                name: 'Иконки',
                items: {
                    mustache: {
                        shape: getMustache('rhombus'),
                    },
                    coffeeCap: {
                        shape: getCoffeeCap('rhombus'),
                    },
                    burger: {
                        shape: getBurger('rhombus')
                    },
                    milkShake: {
                        shape: getMilkShake('rhombus')
                    },
                    taco: {
                        shape: getTako('rhombus')
                    },
                    blackboard: {
                        shape: getBlackboard('')
                    },
                    globus: {
                        shape: getGlobus('')
                    },
                    diplom: {
                        shape: getDiplom('')
                    }
                },
            },
            shapes: {
                name: 'Формы',
                items: {
                    doubleLine: {
                        shape: getDoubleLine('rhombus'),
                    },
                }
            },
            more: {
                name: 'Ещё',
                items: {
                    anchor: {
                        shape: getAnchor('rhombus'),
                    },
                },

            },
        },
    },
    wreath: {
        iconLink: '#wreath-icon',
        shape: wreathSVG,
        personalize: {
            none: {
                name: 'Пусто',
            },
            singleLine: {
                name: 'В одну линию',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    text: {
                        name: 'text',
                        content: 'W.R.M.',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            none: {
                name: 'Пусто',
                items: {},
            },
            icons: {
                name: 'Иконки',
                items: {
                    mustache: {
                        shape: getMustache('wreath'),
                    },
                    coffeeCap: {
                        shape: getCoffeeCap('wreath'),
                    },
                    burger: {
                        shape: getBurger('wreath')
                    },
                    milkShake: {
                        shape: getMilkShake('wreath')
                    },
                    taco: {
                        shape: getTako('wreath')
                    },
                    blackboard: {
                        shape: getBlackboard('')
                    },
                    globus: {
                        shape: getGlobus('')
                    },
                    diplom: {
                        shape: getDiplom('')
                    }
                },
            },
            shapes: {
                name: 'Формы',
                items: {
                    innerCircle: {
                        shape: getInnerCircle('wreath'),
                    },
                    doubleLine: {
                        shape: getDoubleLine('wreath'),
                    },
                }
            },
            more: {
                name: 'Ещё',
                items: {
                    anchor: {
                        shape: getAnchor('wreath'),
                    },
                }
            },
        },
    },
    cross: {
        iconLink: '#cross-icon',
        shape: crossSVG,
        personalize: {
            none: {
                name: 'Пусто',
            },
            xLetters: {
                name: 'В форме Х',
                popupFields: {
                    fontSize: {
                        name: 'font size',
                        content: 70,
                        contentType: 'number',
                    },
                    textTop: {
                        name: 'text top',
                        content: 'x',
                        contentType: 'text',
                    },
                    textRight: {
                        name: 'text right',
                        content: 'x',
                        contentType: 'text',
                    },
                    textBottom: {
                        name: 'text bottom',
                        content: 'x',
                        contentType: 'text',
                    },
                    textLeft: {
                        name: 'text left',
                        content: 'x',
                        contentType: 'text',
                    },
                },
            },
        },
        swag: {
            none: {
                name: 'Пусто',
                items: {},
            },
            icons: {
                name: 'Иконки',
                items: {
                    mustache: {
                        shape: getMustache('cross'),
                    },
                    coffeeCap: {
                        shape: getCoffeeCap('cross'),
                    },
                    burger: {
                        shape: getBurger('cross')
                    },
                    milkShake: {
                        shape: getMilkShake('cross')
                    },
                    taco: {
                        shape: getTako('cross')
                    },
                    blackboard: {
                        shape: getBlackboard('')
                    },
                    globus: {
                        shape: getGlobus('')
                    },
                    diplom: {
                        shape: getDiplom('')
                    }
                },
            },
            shapes: {
                name: 'Формы',
                items: {
                    // innerCircle: {
                    //     shape: getInnerCircle('cross'),
                    // },
                    // doubleLine: {
                    //     shape: getDoubleLine('cross'),
                    // },
                }
            },
            more: {
                name: 'Ещё',
                items: {
                    anchor: {
                        shape: getAnchor('cross'),
                    },
                },
            },
        },
    },
};


export const allowNextStage = () => {
    letNextStage = true;
}

export const changeActiveLogosDataItem = (itemKey) => {
    activeLogosDataItem = logosData[itemKey];
}

export const generateDOMItem = (template) => {
    const div = document.createElement('div');
    div.insertAdjacentHTML('beforeend', template);
    return div.firstElementChild;
}

export const clearDOMItem = (item) => {
    item.innerHTML = '';
}