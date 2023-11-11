 // Funciones de filtrado
function filterByRange(range) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const cardRange = card.querySelector('.card-range').innerText.trim();
      if (cardRange === range) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

function resetFilter() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.style.display = 'block';
  });
}