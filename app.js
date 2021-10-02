const shareData = {
    title: 'AL AZERY',
    text: "AlAzery",
    url: 'https://alazery.github.io/'
  }

  const btn = document.querySelector('#share');
  //const resultPara = document.querySelector('.result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'shared successfully'
    } catch(err) {
      //resultPara.textContent = 'Error: ' + err
      console.log("don't share")
    }
  });


const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function show(){
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide(){
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
close.addEventListener('click', hide);