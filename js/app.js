// Create Reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
// Append to the page
$('.spoiler').append($button);

// Hide spoiler text 
$('.spoiler span').hide();
// When button is pressed 
$('.spoiler').on('click', 'button', (event) => {
  // Show the spoiler text
  $(event.target).prev().fadeIn(1000);
  // Hide the Reveal Button
  $(event.target).hide();
});
 