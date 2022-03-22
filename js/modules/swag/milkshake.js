const baseMilkshake = `
    <svg class="swag milkShake">
        <style type="text/css">
            .milkShakeSt0{fill:#FCBF75;stroke:#391410;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt1{fill:#FFBE57;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt2{fill:#CC4825;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt3{fill:#FCEE21;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt4{fill:#8C6239;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt5{fill:#48B748;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt6{fill:#F9AE41;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt7{fill:#EA6D36;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt8{fill:#ED1C24;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt9{clip-path:url(#SVGID_2_);}
            .milkShakeSt10{fill:none;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt11{fill:#FFFFFF;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
            .milkShakeSt12{fill:#F7C331;stroke:#391410;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>
        <g>
            <polygon class="milkShakeSt8" points="108.3,73.5 91.7,73.5 61.8,73.5 74.2,172 91.8,172 108.3,172 125.9,172 138.2,73.5 		"/>
            <circle class="milkShakeSt3" cx="100" cy="121" r="20"/>
            <rect x="71" y="54" class="milkShakeSt11" width="58" height="12"/>
            <path class="milkShakeSt11" d="M139.5,79l-79,0.1l0-8.3c0-3.7,3-6.7,6.7-6.7l65.6,0c3.7,0,6.7,3,6.7,6.7L139.5,79z"/>
            <line class="milkShakeSt11" x1="113.1" y1="52" x2="118.1" y2="26"/>
            <path class="milkShakeSt3" d="M100.1,130c0,0,10,1,11-12"/>
        </g>
    </svg>
`;

export const getMilkShake = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseMilkshake;

        default: return baseMilkshake;
    }
}