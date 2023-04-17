const imgA = document.getElementById("img-A");

const labelA = document.getElementById("label-A");
labelA.addEventListener("click", function () {});

const imgB = document.getElementById("img-B");

const labelB = document.getElementById("label-B");
labelB.addEventListener("click", function () {});

const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");

const defaultCanvasW = canvas1.width;
const defaultCanvasH = canvas1.height;

const context1 = canvas1.getContext("2d");
const context2 = canvas2.getContext("2d");
const context3 = canvas3.getContext("2d");

imgA.addEventListener("change", function () {
  const image = new Image();
  image.onload = function () {
    canvas1.width = image.width;
    canvas1.height = image.height;
    context1.drawImage(image, 0, 0);
  };
  image.src = URL.createObjectURL(this.files[0]);
});

imgB.addEventListener("change", function () {
  const image = new Image();
  image.onload = function () {
    canvas2.width = image.width;
    canvas2.height = image.height;
    context2.drawImage(image, 0, 0);
  };
  image.src = URL.createObjectURL(this.files[0]);
});

function Adicao() {
  // Define as dimensões do terceiro canvas
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  // Soma as duas imagens pixel a pixel
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] + imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] + imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] + imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  // Desenha a imagem resultante no terceiro canvas
  context3.putImageData(imageData3, 0, 0);
}

function Subtracao() {
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  // Subtrai as duas imagens pixel a pixel
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = imageData1.data[i] - imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] = imageData1.data[i + 1] - imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] = imageData1.data[i + 2] - imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  // Desenha a imagem resultante no terceiro canvas
  context3.putImageData(imageData3, 0, 0);
}

function Multiplicacao() {
  let InpMulti = document.getElementById("valor-mult");
  let valor = InpMulti.value;

  // Multiplica os pixels da imagem pelo valor do input
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      imageData3.data[i] = imageData2.data[i] * valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData2.data[i + 1] * valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData2.data[i + 2] * valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] * valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData1.data[i + 1] * valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData1.data[i + 2] * valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  }
}

function Divisao() {
  let InpMulti = document.getElementById("valor-div");
  let valor = InpMulti.value;

  // Divide os pixels da imagem pelo valor do input
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      imageData3.data[i] = imageData2.data[i] / valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData2.data[i + 1] / valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData2.data[i + 2] / valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] / valor;
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = imageData1.data[i + 1] / valor;
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = imageData1.data[i + 2] / valor;
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  }
}

function Media() {
  // Define as dimensões do terceiro canvas
  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  // Faz a media das duas imagens pixel a pixel
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] = (imageData1.data[i] + imageData2.data[i]) / 2;
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] =
      (imageData1.data[i + 1] + imageData2.data[i + 1]) / 2;
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] =
      (imageData1.data[i + 2] + imageData2.data[i + 2]) / 2;
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  // Desenha a imagem resultante no terceiro canvas
  context3.putImageData(imageData3, 0, 0);
}

function Blending() {
  let InpMulti = document.getElementById("valor-blen");
  let valor = InpMulti.value;
  // Define as dimensões do terceiro canvas

  canvas3.width = canvas1.width;
  canvas3.height = canvas1.height;

  // Soma as duas imagens pixel a pixel
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
  const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
  for (let i = 0; i < imageData1.data.length; i += 4) {
    imageData3.data[i] =
      valor * imageData1.data[i] + (1 - valor) * imageData2.data[i];
    if (imageData3.data[i] > 255) imageData3[i] = 255;
    else if (imageData3.data[i] < 0) imageData3[i] = 0;

    imageData3.data[i + 1] =
      valor * imageData1.data[i + 1] + (1 - valor) * imageData2.data[i + 1];
    if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
    else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

    imageData3.data[i + 2] =
      valor * imageData1.data[i + 2] + (1 - valor) * imageData2.data[i + 2];
    if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
    else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

    imageData3.data[i + 3] = 255;
  }

  // Desenha a imagem resultante no terceiro canvas
  context3.putImageData(imageData3, 0, 0);
}

function AND() {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
  
    // Soma as duas imagens pixel a pixel
    const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] & imageData2.data[i];
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;
  
      imageData3.data[i + 1] = imageData1.data[i + 1] & imageData2.data[i + 1];
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;
  
      imageData3.data[i + 2] = imageData1.data[i + 2] & imageData2.data[i + 2];
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;
  
      imageData3.data[i + 3] = 255;
    }
  
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
}

function OR() {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
  
    // Soma as duas imagens pixel a pixel
    const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] | imageData2.data[i];
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;
  
      imageData3.data[i + 1] = imageData1.data[i + 1] | imageData2.data[i + 1];
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;
  
      imageData3.data[i + 2] = imageData1.data[i + 2] | imageData2.data[i + 2];
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;
  
      imageData3.data[i + 3] = 255;
    }
  
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
}

function XOR() {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
  
    // Soma as duas imagens pixel a pixel
    const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = imageData1.data[i] ^ imageData2.data[i];
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;
  
      imageData3.data[i + 1] = imageData1.data[i + 1] ^ imageData2.data[i + 1];
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;
  
      imageData3.data[i + 2] = imageData1.data[i + 2] ^ imageData2.data[i + 2];
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;
  
      imageData3.data[i + 3] = 255;
    }
  
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
}

function NOT() {
  let MAX = 255;
  // Divide os pixels da imagem pelo valor do input
  const imageData1 = context1.getImageData(0, 0, canvas1.width, canvas1.height);
  const imageData2 = context2.getImageData(0, 0, canvas2.width, canvas2.height);

  if (canvas1.width == 300) {
    const imageData3 = context3.createImageData(canvas2.width, canvas2.height);
    canvas3.width = canvas2.width;
    canvas3.height = canvas2.height;
    for (let i = 0; i < imageData2.data.length; i += 4) {
      imageData3.data[i] = MAX - imageData2.data[i];
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = MAX - imageData2.data[i + 1];
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = MAX - imageData2.data[i + 2];
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  } else {
    canvas3.width = canvas1.width;
    canvas3.height = canvas1.height;
    const imageData3 = context3.createImageData(canvas1.width, canvas1.height);
    for (let i = 0; i < imageData1.data.length; i += 4) {
      imageData3.data[i] = MAX - imageData1.data[i];
      if (imageData3.data[i] > 255) imageData3[i] = 255;
      else if (imageData3.data[i] < 0) imageData3[i] = 0;

      imageData3.data[i + 1] = MAX - imageData1.data[i + 1];
      if (imageData3.data[i + 1] > 255) imageData3[i + 1] = 255;
      else if (imageData3.data[i + 1] < 0) imageData3[i + 1] = 0;

      imageData3.data[i + 2] = MAX - imageData1.data[i + 2];
      if (imageData3.data[i + 2] > 255) imageData3[i + 2] = 255;
      else if (imageData3.data[i + 2] < 0) imageData3[i + 2] = 0;

      imageData3.data[i + 3] = 255;
    }
    // Desenha a imagem resultante no terceiro canvas
    context3.putImageData(imageData3, 0, 0);
  }
}

function SalvarImg() {
  const nomeArquivo = "Imagem Salva.png";
  const conteudoArquivo = canvas3.toDataURL("Imagem_Salva/png");

  const linkDownload = document.createElement("a");
  linkDownload.download = nomeArquivo;
  linkDownload.href = canvas3.toDataURL("Imagem_Salva/png");

  document.body.appendChild(linkDownload);
  linkDownload.click();

  document.body.removeChild(linkDownload);
}
