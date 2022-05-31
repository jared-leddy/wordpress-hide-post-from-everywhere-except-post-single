# WordPress: Hide Post Everywhere, Single Post Still Active

The if function captures the url (```window.location.href```), then converts it to a string (```.toString()```), then sets everything to lowercase characters just in case (```.toLowerCase()```), and checks the desired slug (```.includes()```). The ! prefixed on the if function turns this into a "not" statement. So, if this string is NOT in the url, execute function. 

Then below that, we capture the post card class, based on the post's ID, and then we add our "hide" class, which is also referenced below.

```js
jQuery(document).ready(function($){
  // hide blog post from all archives
  if (!window.location.href.toString().toLowerCase().includes('/schedule-a-live-demo-of-lighttrack-ois200/')) {
    // capture body/post area
    const postBody = $('.post-89399');
    // add class to style content area 
    $(postBody).addClass('hide-post-89399');
  }
});
```

```css
.post-89399.hide-post-89399 {
  display: none;
}
```
