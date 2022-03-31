const baseTie = `
<svg class="swag tie"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="body_1" width="110" height="83">

<g transform="matrix(1.2222222 0 0 1.2205882 0 0)">
	<g transform="matrix(0.75555557 0 0 0.75555557 11 -0)">
		<g>
            <path d="M57.92 33.51L76.7 15.67L76.7 0L13.59 0L13.59 15.67L32.370003 33.510002L35.22 29.110003L37.33 34L30.160002 80.130005L45.14 90L60.12 80.13L52.95 34L55.06 29.11L57.92 33.51zM71.11 13.27L58.95 24.82L54.03 17.22L71.11 7.579999L71.11 13.27zM63.27 5.59L49.34 13.450001L40.96 13.450001L27.02 5.59L63.27 5.59zM31.34 24.82L19.18 13.27L19.18 7.58L36.260002 17.220001L31.34 24.82zM45.14 83.31L36.23 77.439995L42.6 36.429996L47.66 36.429996L54.03 77.439995L45.14 83.31zM48.23 30.84L42.059998 30.84L38.879997 23.470001L41.739998 19.050001L48.55 19.050001L51.41 23.470001L48.23 30.84z" stroke="none" fill="#000000" fill-rule="nonzero" />
		</g>
	</g>
</g>
</svg>
`;

export const getTie = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseTie;

        default: return baseTie;
    }
}