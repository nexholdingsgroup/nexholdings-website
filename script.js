const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}
function updateNetworkLines() {
  const map = document.querySelector('.network-map');
  const vietnam = document.querySelector('.map-point.vietnam');

  if (!map || !vietnam) return;

  const targets = [
    'korea',
    'singapore',
    'hongkong',
    'philippines',
    'malaysia',
    'indonesia',
    'thailand',
    'china',
    'japan',
    'india'
  ];

  const mapRect = map.getBoundingClientRect();
  const vnDot = vietnam.querySelector('span');

  if (!vnDot) return;

  const vnRect = vnDot.getBoundingClientRect();

  const startX = vnRect.left + vnRect.width / 2 - mapRect.left;
  const startY = vnRect.top + vnRect.height / 2 - mapRect.top;

  targets.forEach(country => {
    const target = document.querySelector(`.map-point.${country}`);
    const line = document.querySelector(`.line-${country}`);

    if (!target || !line) return;

    const targetDot = target.querySelector('span');
    if (!targetDot) return;

    const targetRect = targetDot.getBoundingClientRect();

    const endX = targetRect.left + targetRect.width / 2 - mapRect.left;
    const endY = targetRect.top + targetRect.height / 2 - mapRect.top;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    const distance = Math.sqrt(
      deltaX * deltaX + deltaY * deltaY
    );

    const angle =
      Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.width = `${distance}px`;
    line.style.transform = `rotate(${angle}deg)`;
  });
}

window.addEventListener('load', updateNetworkLines);
window.addEventListener('resize', updateNetworkLines);

function updateNetworkLines() {
  const map = document.querySelector('.network-map');
  const vietnam = document.querySelector('.map-point.vietnam');

  if (!map || !vietnam) return;

  const targets = [
    'korea',
    'singapore',
    'hongkong',
    'philippines',
    'malaysia',
    'indonesia',
    'thailand',
    'china',
    'japan',
    'india'
  ];

  const mapRect = map.getBoundingClientRect();
  const vnRect = vietnam.querySelector('span').getBoundingClientRect();

  const startX = vnRect.left + vnRect.width / 2 - mapRect.left;
  const startY = vnRect.top + vnRect.height / 2 - mapRect.top;

  targets.forEach(country => {
    const target = document.querySelector(`.map-point.${country}`);
    const line = document.querySelector(`.line-${country}`);

    if (!target || !line) return;

    const targetRect = target.querySelector('span').getBoundingClientRect();

    const endX = targetRect.left + targetRect.width / 2 - mapRect.left;
    const endY = targetRect.top + targetRect.height / 2 - mapRect.top;

    const deltaX = endX - startX;
    const deltaY = endY - startY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

    line.style.left = `${startX}px`;
    line.style.top = `${startY}px`;
    line.style.width = `${distance}px`;
    line.style.transform = `rotate(${angle}deg)`;
  });
}

window.addEventListener('load', updateNetworkLines);
window.addEventListener('resize', updateNetworkLines);