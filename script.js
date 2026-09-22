// Say hi to my Bad skills learned on the fly

//loading and that stuff, refer to css
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {  
  document.getElementById("header")?.classList.add("loaded");
  document.getElementById("land")?.classList.add("loaded");
}, 10);
 setTimeout(() => {  
  document.getElementById("work")?.classList.add("loaded");
}, 100);
setTimeout(() => {  
  document.getElementById("faq")?.classList.add("loaded");
}, 200);
 setTimeout(() => {  
  document.getElementById("contact")?.classList.add("loaded");
}, 300);
setTimeout(() => {
  document.getElementById("landing-text")?.classList.add("loaded");
}, 250);
});


const card = document.getElementById('MeImg');

card?.addEventListener('mouseenter', () => {

  const image = card.querySelector('img');

  gsap.to(image, {
    duration: 1,
    ease: 'power2.out',
    boxShadow: '0px 0px 12px rgba(255, 255, 255, 1)',
    overwrite: 'auto',
  });
});

card?.addEventListener('mousemove', (e) => {

  const image = card.querySelector('img');
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;  

  // tilt sens
  const rotateXValue = -y / 25; 
  const rotateYValue = x / 25;
  const shadowX = -rotateYValue * .5;
  const shadowY = rotateXValue * .5;


  image.style.transform = `rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg) scale(1.01)`;
  gsap.to(image, {
    duration: 0.1,
    ease: 'linear',
    boxShadow: `${shadowX}px ${shadowY}px 12px rgba(255, 255, 255, 1)`,
    overwrite: 'auto',
  });

});

card?.addEventListener('mouseleave', () => {
  const image = card.querySelector('img');
  image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';

  gsap.to(image, {
    duration: .5,
    ease: 'power2.out',
    boxShadow: '0px 0px 6px rgba(255, 255, 255, 0)',
  });
});

const target = document.querySelector('#openup');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.05 // out of 1 so  0.25 is 25%
});

if (target) observer.observe(target);

const target2 = document.querySelector('#section-two');
const root = document.documentElement;

const regularRootVariables = {
  '--base-color': '#294051',
  '--background-color': '#3c627d',
  '--top-gradient': 'linear-gradient(180deg, rgb(60, 98, 125), rgb(60, 98, 125) 100%)',
  '--bg-gradient': 'linear-gradient(180deg, rgb(60, 98, 125), rgb(82, 119, 146) 100%)',
  '--border-color': '#FFB89E',
  '--text-color': '#FFB89E'
};

const sectionTwoVariables = {
  '--base-color': '#294051',
  '--background-color': 'rgb(252, 134, 91)',
  '--top-gradient': 'linear-gradient(180deg, rgb(252, 134, 91), rgb(252, 134, 91) 100%)',
  '--bg-gradient': 'linear-gradient(180deg, rgb(252, 134, 91), rgb(255, 184, 158) 100%)',
  '--border-color': '#ffb89e',
  '--text-color': '#294051'
};

const setRootVariables = (variables) => {
  Object.entries(variables).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });
};

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      setRootVariables(sectionTwoVariables);
    } else {
      entry.target.classList.remove('visible');
      setRootVariables(regularRootVariables);
    }
  });
}, {
  threshold: 0.05 // out of 1 so  0.25 is 25%
});

if (target2) observer2.observe(target2);
