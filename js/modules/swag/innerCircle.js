const baseInnerCircleSVG = `
    <svg class="swag innerCircle">
        <circle fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" cx="256.7" cy="259" r="154.4"/>
    </svg>
`;

const wreathCircleSVG = `
    <svg class="swag innerCircle">
        <circle  fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" cx="256.7" cy="249" r="154.4"/>
    </svg>
`;

export const getInnerCircle = (shapeName) => {
    switch (shapeName) { 
        case 'wreath': return wreathCircleSVG;
        default: return baseInnerCircleSVG;
    }
}