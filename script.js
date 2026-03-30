(function () {
  const selectors = ['diseaseSelect', 'diseaseSelectSub'];

  selectors.forEach((id) => {
    const select = document.getElementById(id);
    if (!select) return;

    select.addEventListener('change', (event) => {
      const target = event.target.value;
      if (!target || target === '#') return;
      window.location.href = target;
    });
  });
})();
