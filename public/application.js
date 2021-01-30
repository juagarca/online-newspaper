const input = document.getElementById('search-input');

// if in search page add key up event to the search input
if (document.getElementById('search-input')) {
  input.addEventListener('keyup', (event) => {
    const query = event.currentTarget.value;
  });
}
