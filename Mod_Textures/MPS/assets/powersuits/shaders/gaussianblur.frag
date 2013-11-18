#version 330
uniform vec2 u_Scale;
uniform sampler2D u_Texture;
in vec2 texcoord;

uniform float gaussFilter[50] = float[50](
    -12.0,               1.0/16777216.0,
    -11.0,	            24.0/16777216.0,
    -10.0,	           276.0/16777216.0,
    -9.0,	          2024.0/16777216.0,
    -8.0,	         10626.0/16777216.0,
    -7.0,	         42504.0/16777216.0,
    -6.0,	        134596.0/16777216.0,
    -5.0,           346104.0/16777216.0,
    -4.0,	        735471.0/16777216.0,
    -3.0,	       1307504.0/16777216.0,
    -2.0,	       1961256.0/16777216.0,
    -1.0,	       2496144.0/16777216.0,
    0.0,	       2704156.0/16777216.0,
    1.0,	       2496144.0/16777216.0,
    2.0,           1961256.0/16777216.0,
    3.0,	       1307504.0/16777216.0,
    4.0,	        735471.0/16777216.0,
    5.0,	        346104.0/16777216.0,
    6.0,	        134596.0/16777216.0,
    7.0,	         42504.0/16777216.0,
    8.0,	         10626.0/16777216.0,
    9.0,	          2024.0/16777216.0,
    10.0,	           276.0/16777216.0,
    11.0,	            24.0/16777216.0,
    12.0,	             1.0/16777216.0
);

void main() {
	vec4 color = vec4(0.0);
	float k = 0.0;
	float wt = 0.0;
	for( int i = 0; i < 25; i++ )
	{
	    vec4 pix = texture2D( u_Texture,
	        vec2(texcoord.x+gaussFilter[i*2]*u_Scale.x, texcoord.y+gaussFilter[i*2]*u_Scale.y )
	    );
        wt = gaussFilter[i*2+1] * pix.w * 1.5;
        color += wt * pix;
        k += wt;
	}
    gl_FragColor = color;
}