#version 450
#extension GL_ARB_separate_shader_objects : enable


layout (location = 0) out vec4 fragColor;
layout (location = 0) in vec3 pos;

void main() {
  fragColor = vec4(1.0,0.5,1.0,1.0);
}
