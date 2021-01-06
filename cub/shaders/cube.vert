#version 450
#extension GL_ARB_separate_shader_objects : enable

out gl_PerVertex {
	vec4 gl_Position;
};

layout (location = 0) in vec3 aVertexPosition;
layout (location = 0) out vec3 vSurfaceNormal;
layout (location = 1) out vec3 pos;
layout (binding = 0) uniform UBO {
  mat4 model;
  mat4 view;
  mat4 projection;
  vec3 lightPosition;
} ubo;


void main() {
  vec4 vertexPosition = ubo.projection * ubo.view * ubo.model * vec4(aVertexPosition, 1.0);
  pos = aVertexPosition;
	gl_Position = vertexPosition;
}
