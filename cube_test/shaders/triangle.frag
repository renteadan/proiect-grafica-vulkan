#version 450
#extension GL_ARB_separate_shader_objects : enable

layout (location = 0) out vec4 fragColor;
layout (location = 0) in vec2 offset;

void main() {
	if(offset.x < 0.0 ) fragColor = vec4(1.0, 0.0, 0.0, 1.0);
	else{fragColor = vec4(0.0, 0.0, 1.0, 1.0);}
	
}
