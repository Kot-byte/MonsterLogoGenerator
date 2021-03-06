'use-strict';

const baseBurger = `
    <svg class="swag burger"> 
        <style type="text/css">
            .burgerSt0{fill:#FCBF75;stroke:#391410;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt1{fill:#FFBE57;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt2{fill:#CC4825;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt3{fill:#FCEE21;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt4{fill:#8C6239;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt5{fill:#48B748;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt6{fill:#F9AE41;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt7{fill:#EA6D36;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt8{fill:#ED1C24;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt9{clip-path:url(#SVGID_2_);}
            .burgerSt10{fill:none;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSt11{fill:#FFFFFF;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .burgerSburgerSt12{fill:#F7C331;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
            <g>
                <path class="burgerSt1" d="M46.5,136.3v10.5c0,5.1,5.8,9.3,12.8,9.3h79.8c7.1,0,12.8-4.2,12.8-9.3v-10.5H46.5z"/>
                <path class="burgerSt2" d="M152.6,137.5H47.4c-3.8,0-6.9-3.1-6.9-6.9v-2.5c0-3.8,3.1-6.9,6.9-6.9h105.2c3.8,0,6.9,3.1,6.9,6.9v2.5
                    C159.5,134.4,156.4,137.5,152.6,137.5z"/>
                <polyline class="burgerSt3" points="57.5,119.5 114.5,146.5 148.5,115.5"/>
                <path class="burgerSt4" d="M150.9,120.5H49.1c-3.6,0-6.6-2.9-6.6-6.6v-1.8c0-3.6,2.9-6.6,6.6-6.6h101.8c3.6,0,6.6,2.9,6.6,6.6v1.8
                    C157.5,117.6,154.6,120.5,150.9,120.5z"/>
                <path class="burgerSt5" d="M133,84.5c-4.6,0-8.8,1.9-11.7,4.8c-2.9-3-7.1-4.8-11.7-4.8c-4.4,0-8.3,1.6-11.2,4.3
                    c-2.9-2.7-6.8-4.3-11.2-4.3s-8.3,1.6-11.2,4.3c-2.9-2.7-6.8-4.3-11.2-4.3c-8.8,0-16,6.7-16,15c0,8.3,7.1,15,16,15
                    c4.4,0,8.3-1.6,11.2-4.3c2.9,2.7,6.8,4.3,11.2,4.3s8.3-1.6,11.2-4.3c2.9,2.7,6.8,4.3,11.2,4.3c4.6,0,8.8-1.9,11.7-4.8
                    c2.9,3,7.1,4.8,11.7,4.8c8.8,0,16-6.7,16-15C149,91.2,141.9,84.5,133,84.5z"/>
                <path class="burgerSt1" d="M98.5,44c-29.4,0-53.7,21.7-57.9,49.9c-0.7,4.5,2.8,8.6,7.4,8.6H149c4.6,0,8.1-4.1,7.4-8.6
                    C152.2,65.7,127.9,44,98.5,44z"/>
            </g>
            <path class="burgerSt1" d="M135,69.7c5,4.9,10.4,13.2,11.4,22.4"/>
            <path class="burgerSt1" d="M129.5,64.5c0,0-4-6-14-10"/>
        </g>
    </svg>
`;

export const getBurger = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseBurger;

        default: return baseBurger;
    }
}