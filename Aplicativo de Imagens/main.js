const M = 512; // Definindo as dimensões das imagens
const N = 512;

// Carregando as imagens em elementos de imagem HTML
const imgP = new Image();
const imgQ = new Image();
imgP.src = "Lenna.png";
imgQ.src = "ponte-512.png";

// Criando o elemento canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Esperando as imagens carregarem
imgP.onload = () => {
  // Convertendo a imagem P para ImageData em escala de cinza
  const imageDataP = ctx.createImageData(M, N);
  const pixelsP = imageDataP.data;
  ctx.drawImage(imgP, 0, 0, M, N);
  const imgDataP = ctx.getImageData(0, 0, M, N);
  for (let i = 0; i < pixelsP.length; i += 4) {
    const grayscale = (imgDataP.data[i] + imgDataP.data[i + 1] + imgDataP.data[i + 2]) / 3; // tranforma o pixel para escala de cinza
    pixelsP[i] = grayscale; // R
    pixelsP[i + 1] = grayscale; // G
    pixelsP[i + 2] = grayscale; // B
    pixelsP[i + 3] = 255; // Alpha
  }

  // Convertendo a imagem Q para ImageData em escala de cinza
  const imageDataQ = ctx.createImageData(M, N);
  const pixelsQ = imageDataQ.data;
  ctx.drawImage(imgQ, 0, 0, M, N);
  const imgDataQ = ctx.getImageData(0, 0, M, N);
  for (let i = 0; i < pixelsQ.length; i += 4) {
    const grayscale =
      (imgDataQ.data[i] + imgDataQ.data[i + 1] + imgDataQ.data[i + 2]) / 3;
    pixelsQ[i] = grayscale;
    pixelsQ[i + 1] = grayscale;
    pixelsQ[i + 2] = grayscale;
    pixelsQ[i + 3] = 255;
  }

  // Aqui você pode manipular as imagens P e Q
  // ...

  // Desenhando as imagens no canvas
  ctx.putImageData(imageDataP, 0, 0);
  ctx.putImageData(imageDataQ, M + 10, 0);
};
