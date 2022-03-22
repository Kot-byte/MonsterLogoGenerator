const baseTako = `
    <svg class="swag taco">
        <style type="text/css">
            .takoSt0{fill:#FCBF75;stroke:#391410;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt1{fill:#FFBE57;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt2{fill:#CC4825;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt3{fill:#FCEE21;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt4{fill:#8C6239;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt5{fill:#48B748;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt6{fill:#F9AE41;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt7{fill:#EA6D36;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt8{fill:#ED1C24;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt9{clip-path:url(#SVGID_2_);}
            .takoSt10{fill:none;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt11{fill:#FFFFFF;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .takoSt12{fill:#F7C331;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
            <rect x="52.2" y="64.3" transform="matrix(0.9305 0.3662 -0.3662 0.9305 41.6873 -24.5198)" class="takoSt3" width="66.6" height="66.6"/>
            <circle class="takoSt8" cx="140.4" cy="96.3" r="27.2"/>
            <path class="takoSt5" d="M164.7,112.8c0-0.2,0-0.5,0-0.7c0-5.4-3.1-10.1-7.5-12.4c0-0.1,0-0.3,0-0.4c0-6.7-4.7-12.3-11-13.7
                c0-0.3,0-0.5,0-0.8c0-7.7-6.3-14-14-14c-0.2,0-0.4,0-0.6,0c-1.7-5.8-7.1-10-13.4-10c-4.2,0-7.9,1.8-10.5,4.8
                c-2.6-2.9-6.3-4.8-10.5-4.8c-6.5,0-11.9,4.4-13.5,10.3c-1-0.2-2-0.3-3-0.3c-6,0-11.1,3.7-13.1,9c-1.6-0.6-3.4-1-5.2-1
                c-7.7,0-14,6.3-14,14c-7.7,0-14,6.3-14,14c0,0.3,0,0.7,0.1,1c-5.1,2.1-8.8,7.1-8.8,13c0,7.7,6.3,14,14,14s14-6.3,14-14
                c0-0.3,0-0.7-0.1-1c5.1-2.1,8.8-7.1,8.8-13c6,0,11.1-3.7,13.1-9c1.6,0.6,3.4,1,5.2,1c6.5,0,11.9-4.4,13.5-10.3c1,0.2,2,0.3,3,0.3
                c4.2,0,7.9-1.8,10.5-4.8c2.6,2.9,6.3,4.8,10.5,4.8c0.2,0,0.4,0,0.6,0c1.4,4.9,5.4,8.6,10.5,9.7c0,0.3,0,0.5,0,0.8
                c0,5.4,3.1,10.1,7.5,12.4c0,0.1,0,0.3,0,0.4c0,6.2,4,11.4,9.5,13.3c0,0.2,0,0.5,0,0.7c0,7.7,6.3,14,14,14s14-6.3,14-14
                C174.2,119.9,170.2,114.7,164.7,112.8z"/>
            <path class="takoSt1" d="M100.9,78.6c-29.6,0-54.4,22.1-60.9,51.7c-1.7,7.8,3.9,15.2,11.4,15.2h98.9c7.5,0,13.1-7.4,11.4-15.2
                C155.4,100.7,130.6,78.6,100.9,78.6z"/>
            <path class="takoSt1" d="M133.1,102.9c0,0,15.7,10.3,17.3,31"/>
            <path class="takoSt8" d="M124.3,93.8c0,0-11.1-6-19.8-7"/>
        </g>
    </svg>
`;

export const getTako = (shapeName) => {
    switch (shapeName) {

        case 'circle': return baseTako;

        default: return baseTako;
    }
}