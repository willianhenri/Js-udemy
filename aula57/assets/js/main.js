const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;
for (let p of ps) {
    
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = 'white'
}
