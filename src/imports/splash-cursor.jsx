import { useEffect, useRef } from 'react';

const FluidSimulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl');

    if (!gl) {
      console.error('Unable to initialize WebGL.');
      return;
    }

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      void main() {
        vec2 p = gl_FragCoord.xy / vec2(800.0, 600.0); // normalize to canvas size
        float color = sin(u_time + p.x * 7.0) * cos(u_time + p.y * 10.0);
        gl_FragColor = vec4(vec3(color), 1.0);
      }
    `;

    const compileShader = (source, type) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation failed: ', gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Program linking failed: ', gl.getProgramInfoLog(shaderProgram));
      return;
    }

    gl.useProgram(shaderProgram);

    const positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'position');
    const timeUniformLocation = gl.getUniformLocation(shaderProgram, 'u_time');

    const vertices = new Float32Array([
      -1.0, -1.0,
      1.0, -1.0,
      0.0, 1.0
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionAttributeLocation);

    let startTime = Date.now();

    const animate = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);

      const currentTime = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeUniformLocation, currentTime);

      gl.drawArrays(gl.TRIANGLES, 0, 1);
      requestAnimationFrame(animate);
    };

    animate();

  }, []);

  return <canvas ref={canvasRef} width="800" height="600" />;
};

export default FluidSimulation;
