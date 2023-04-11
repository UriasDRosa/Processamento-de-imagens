let M = 640;
let N = 480;
// cria um elemento canvas no HTML
const canvas = document.createElement("canvas");
canvas.width = M;
canvas.height = 480;
document.body.appendChild(canvas);

// obtem o contexto 2D do canvas
const ctx = canvas.getContext("2d");

const width = M * 3;
const height = N;

// desenha a primeira imagem na metade esquerda do canvas
const image1Data = ctx.createImageData(width, height);
// preenche a imagem com uma cor vermelha
for (let i = 0; i < image1Data.data.length; i += 4) {
  image1Data.data[i] = 255; // componente vermelho
  image1Data.data[i + 1] = 0; // componente verde
  image1Data.data[i + 2] = 0; // componente azul
  image1Data.data[i + 3] = 255; // componente alpha
}
ctx.putImageData(image1Data, 0, 0);

// desenha a segunda imagem na metade direita do canvas
const image2Data = ctx.createImageData(width, height);
// preenche a imagem com uma cor verde
for (let i = 0; i < image2Data.data.length; i += 4) {
  image2Data.data[i] = 0; // componente vermelho
  image2Data.data[i + 1] = 255; // componente verde
  image2Data.data[i + 2] = 0; // componente azul
  image2Data.data[i + 3] = 255; // componente alpha
}
ctx.putImageData(image2Data, M/3, 0);
