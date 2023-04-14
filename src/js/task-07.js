const fontSizeModified = event => {
  const fontSize = event.currentTarget.value;
  document.querySelector('#text').style.fontSize = `${fontSize}px`;
};

const zipper = document.querySelector('#font-size-control');
zipper.addEventListener('input', fontSizeModified);
