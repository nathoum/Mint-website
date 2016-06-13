varying vec2 vUv;
uniform float opacity;
uniform vec3 color1;
uniform vec3 color2;
// varying float noise;

void main() {
    float coef = 0.0;

    if ( vUv.x < 0.5 ) {
        coef = smoothstep( 0.0, 1.0, vUv.x * 2.0 );
    } else {
        coef = smoothstep( 0.0, 1.0, 2.0 - vUv.x * 2.0 );
    }

    // color = vec3( 1.0 - ( vUv.x - 0.6 ) * 2.5 );
    // gl_FragColor = vec4( mix( color1, color2, coef ), opacity );
    gl_FragColor = vec4( color1, opacity );

    // vec3 color = vec3( vUv * ( 1. - 2. * (noise * 0.1) ), 0.5 );
    // gl_FragColor = vec4( vec3(color.r + 0.3, color.g + 0.3, color.b + 0.3 ), 1.0 );
}
