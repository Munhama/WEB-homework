$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: [
            "close"
          ],
        afterClose: function() {alert("Bye!");},
    });
})
