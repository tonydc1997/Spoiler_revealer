// Create Reveal spoiler button
const $button = $('<button>Reveal Spoiler</button>');
// Append to the page
$('.spoiler').append($button);

// Hide spoiler text 
$('.spoiler span').hide();
// When button is pressed 
$('.spoiler').on('click', 'button', () => {
  // Show the spoiler text
  $('.spoiler span').fadeIn(1000);
  // Hide the Reveal Button
  $('.spoiler button').hide();
});
 