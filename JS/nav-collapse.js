document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.projects-nav-section').forEach(section => {
    const header = section.querySelector('.projects-nav-header');
    if (!header || header.innerHTML.toLowerCase().includes("highlights")) return;

    // make header act like a button
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');
    header.setAttribute('aria-expanded', 'true');

    const toggle = () => {
      const collapsed = section.classList.toggle('collapsed');
      header.setAttribute('aria-expanded', (!collapsed).toString());
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });

    // Initial state: collapsed
    toggle();
  });
});