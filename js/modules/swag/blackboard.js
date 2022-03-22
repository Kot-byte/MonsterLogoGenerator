const baseBlackboard = `
    <svg class="swag blackboard">
        <path d="M62,41c0.552,0,1-0.447,1-1V2c0-0.553-0.448-1-1-1H2C1.448,1,1,1.447,1,2v38c0,0.553,0.448,1,1,1h16.691l-5.656,20.737   c-0.082,0.3-0.019,0.622,0.17,0.87C13.395,62.854,13.688,63,14,63h4c0.451,0,0.846-0.302,0.965-0.737L24.764,41H29v21   c0,0.553,0.448,1,1,1h4c0.552,0,1-0.447,1-1V41h4.279l3.34,10.019C39.488,51.217,37,53.82,37,57c0,3.309,2.691,6,6,6h19   c0.404,0,0.769-0.243,0.924-0.617s0.069-0.804-0.217-1.09L59.415,58C59.147,57.732,59,57.378,59,57s0.147-0.732,0.414-1   l3.293-3.293c0.286-0.286,0.372-0.716,0.217-1.09S62.404,51,62,51H48.721l-3.333-10H62z M3,3h58v36H3V3z M17.236,61h-1.927   l5.455-20h1.927L17.236,61z M33,61h-2V41h2V61z M39,57c0-2.206,1.794-4,4-4v8C40.794,61,39,59.206,39,57z M58,54.586   c-0.645,0.646-1,1.503-1,2.414s0.355,1.769,1,2.414L59.586,61H45v-3h8v-2h-8v-3h3h11.586L58,54.586z M46.612,51h-1.892l-3.333-10   h1.892L46.612,51z"/><path d="M58,5H6C5.448,5,5,5.447,5,6v30c0,0.553,0.448,1,1,1h52c0.552,0,1-0.447,1-1V6C59,5.447,58.552,5,58,5z M51,35h-6v-2h6V35z    M57,35h-4v-3c0-0.553-0.448-1-1-1h-8c-0.552,0-1,0.447-1,1v3H7V7h50V35z"/>
        <path d="M15.197,29.737c0.042-0.028,0.088-0.033,0.137-0.016c0.048,0.02,0.079,0.054,0.092,0.104   c0.206,0.823,0.852,1.433,1.685,1.591c0.83,0.158,1.657-0.171,2.15-0.862l2.364-3.31c0.013-0.018,0.055-0.077,0.139-0.062   c0.087,0.01,0.114,0.07,0.122,0.089l1.359,3.172c0.311,0.726,0.993,1.221,1.779,1.293c0.791,0.067,1.548-0.292,2.029-1.015   c0.026-0.039,0.064-0.062,0.111-0.065c0.049-0.006,0.087,0.01,0.121,0.043l1.303,1.303c0.75,0.751,1.959,0.836,2.81,0.199   L34.6,29.8l-1.2-1.6l-3.202,2.401c-0.061,0.044-0.144,0.037-0.196-0.014L28.7,29.286c-0.457-0.458-1.091-0.682-1.731-0.621   c-0.644,0.063-1.22,0.408-1.623,1.014c-0.012,0.018-0.047,0.064-0.139,0.066c-0.089-0.009-0.116-0.07-0.124-0.09l-1.359-3.172   c-0.311-0.723-0.963-1.205-1.745-1.289c-0.784-0.087-1.522,0.247-1.981,0.888l-2.365,3.311c-0.015,0.021-0.055,0.076-0.149,0.06   c-0.094-0.018-0.111-0.086-0.118-0.111c-0.169-0.678-0.66-1.232-1.311-1.484c-0.651-0.252-1.388-0.171-1.968,0.217l-4.642,3.095   l1.109,1.664L15.197,29.737z"/>
        <rect height="2" width="23" x="10" y="21"/><rect height="2" width="23" x="10" y="13"/><rect height="2" width="23" x="10" y="17"/>
        <path d="M38,28c0.125,0,0.251-0.023,0.372-0.071l5-2c0.125-0.051,0.24-0.126,0.335-0.222l11-11c0.391-0.391,0.391-1.023,0-1.414   l-3-3c-0.391-0.391-1.023-0.391-1.414,0l-11,11c-0.096,0.096-0.171,0.21-0.222,0.336l-2,5c-0.148,0.371-0.061,0.795,0.222,1.078   C37.484,27.898,37.74,28,38,28z M44,22.586L42.414,21L48,15.414L49.586,17L44,22.586z M51,12.414L52.586,14L51,15.586L49.414,14   L51,12.414z M40.852,22.562L41,22.414L42.586,24l-0.148,0.148l-2.643,1.058L40.852,22.562z"/>
    </svg>
`;

export const getBlackboard = (shapeName) => {
    switch (shapeName) { 

        case 'circle': return baseBlackboard;

        default: return baseBlackboard;
    }
}