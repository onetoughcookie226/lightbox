/**
 * Created by bam on 6/8/16.
 */
//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with a large image - lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add an image to overlay
$overlay.append($image);

// A caption to overlay
$overlay.append($caption);

// Add overlay
$('body').append ($overlay);



// Capture the click event on a link to an image
$("#image-gallery a").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    // Update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    // show the overlay
    $overlay.show();

    // Get child's alt attribute and set to caption
    var captionText= $(this).children("img").attr("alt");
    $caption.text(captionText);


});



// When overlay is clicked
$overlay.click (function () {

// Hide overlay
$overlay.hide();
});

