---
layout: post
title: "Online Forms Best Practices"
---
I have had to program a variety of online forms and that is the reason why I have decided to write a little bit about what I consider best practices when programming online forms.<br />
<br />
<ul><li>Program the form in plain HTML</li>
<li>Add server-side scripts (ie. PHP)<br />
<ul><li>If the form is too long split it up into pages by sections so you can keep track how far users get before leaving the site (or page) while completing the form.</li>
<li>When the form is submitted send the user to a different page (not the page where the form is in). This is to keep track of how many users have successfully completed the form.</li>
</ul></li>
<li>Add client-side scripts (ie. Javascript)</li>
<ul><li>These should only be enhancements, the form should be fully functional without any client-side scripts if you want to follow web accessibility guidelines</li>
</ul></ul>