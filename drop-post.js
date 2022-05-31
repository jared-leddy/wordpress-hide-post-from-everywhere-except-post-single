jQuery(document).ready(function($){  
  // hide blog post from all archives
  if (!window.location.href.toString().toLowerCase().includes('/schedule-a-live-demo-of-lighttrack-ois200/')) {
    // capture post body/card
    const postBody = $('.post-89399');
    // add class to style content area 
    $(postBody).addClass('hide-post-89399');
  }
});
