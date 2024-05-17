---
id: 3
published: true
title: Enable submit button if at least one input has value
date: '2018-07-26 13:52:24 +0530'
date_gmt: '2018-07-26 13:52:24 +0530'
image: '/03/featured.jpg'
category: JQuery
tags:
  - JavaScript
  - JQuery
---

<p><!-- wp:paragraph --></p>
<p>There are some scenarios where submit button is enabled if at least one input has value. This tutorial will show you how to enable the submit button if you enter something into a text box, select drop down and check a check box.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Let&rsquo;s have a simple Html form:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code><form class="cc-form">
  <input type="email" id="email" class="email" name="email">
  <input type="text" id="name" class="name" name="name">
  <input type="text" id="city" class="city" name="city">
  <select name="dropdown" id="dropdown" class="dropdown">
    <option value="" selected>Choose...</option>
    <option value="1">...</option>
  </select>
  <input name="checkbox" type="checkbox" value="true">
  <button type="submit" id="search">Search</button>
</form></code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>jQuery:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>$(document).ready(function(){
  validateButton();
  $('.cc-form input:text').keyup(validateButton);
  $('.cc-form select').change(validateButton);
  $('.cc-form input:checkbox').change(validateButton);
});

function validateButton() {
var validation = true;
$('.cc-form input:text, .cc-form select').each(function(){
    if ($.trim($(this).val()).length > 0) {
validation = false;
}
});

$('.cc-form input:checkbox').each(function() {
    if($(this).filter(':checked').length > 0) {
validation = false;
}
});

if(validation){
$('#search').attr('disabled', 'disabled');
} else {
$('#search').removeAttr('disabled', 'disabled');
}
}</code></pre>

<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>On document ready function <code>validateButton();</code> is being called, so on page load, form will be validated and if there is no value, button will be disabled.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>When ever keyup event occurs on any input text type <code>$('.cc-form input:text').keyup(validateButton);</code> calls the <code>validateButton();</code> and validates the form.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>If dropdown change event occurs <code>$('.cc-form select').change(validateButton);</code> will call <code>validateButton();</code> function.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Finally if a checkbox is checked or unchecked, change event <code>$('.cc-form input:checkbox').change(validateButton);</code> fires up and call our <code>validateButton();</code> function.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Let&rsquo;s see what our <code>validateButton();</code> does.<br>When ever the function called, it will set the variable <code>validation</code> to true to disable the button if there is no value. <code>$('.cc-form input:text, .cc-form select').each(function(){ });</code> select input and select fields then loop it. <code>$.trim($(this).val()).length > 0</code> if any field has value greater than 0 <code>validation</code> variable set to false.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Line previously <code>$('.cc-form input:checkbox').each(function(){});</code> select the check boxes and do the same.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Finally if <code>validation</code> variable is true <code>$('#search').attr('disabled', 'disabled');</code> disabled property is added to search button to disable it. Else <code>$('#search').removeAttr('disabled', 'disabled');</code> disabled property is being removed and search button is enabled.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Hope this tutorial was helpful. Working demo can be found <a href="https://vinothvkr.github.io/demo/js-submitbutton/">here</a>. If required source code is available <a href="https://github.com/vinothvkr/demo/blob/master/js-submitbutton/index.html">here</a> in Github.</p>
<p><!-- /wp:paragraph --></p>
