window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
  
}
  				function copyToClipboard(text) {
										var textarea = document.createElement("textarea");
										textarea.textContent = text;
										document.body.appendChild(textarea);
										textarea.select();
										document.execCommand("copy");
										document.body.removeChild(textarea);
									}
								