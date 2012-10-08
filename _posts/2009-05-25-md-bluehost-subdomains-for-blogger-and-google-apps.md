---
layout: post
title: "Bluehost subdomains for Blogger and Google Apps"
---
I  bought an add-on domain using my Bluehost account to create this website and at the same time to  setup Google Apps and Blogger as subdomains.<br />
<br />
The journey began and ended up being a lot simpler than expected. It turns out Google has really good documentation on their Help pages.<br />
<br />
To setup Google Apps you can go to: <a href="http://www.google.com/a/cpanel/domain/new">sign up for Google Apps Standard Edition</a>.<br />
<br />
To setup Blogger by publishing a custom domain with Bluehost, you need to set things up on Bluehost and Blogger separately, one after the other:<br />
<br />
<h4>Steps to follow on Bluehost</h4><ul><li>Contact Bluehost Support Team and request to add a <strong>CNAME</strong> to your account: <strong>blog.mydomain.com ghs.google.com</strong></li>
</ul><h4>Steps to follow on Blogger </h4><ul><li>Login to your blogger account</li>
<li>Under the <strong>Manage Blogs</strong> section select Settings</li>
<li>Go to the <strong>Publishing</strong> tab</li>
<li>Under <strong>Advanced Settings</strong>, on the <strong>Your Domain</strong> field enter the url for your blog (ie. <strong>blog.yourdomain.com</strong>)</li>
<li>Click <strong>Save Settings</strong></li>
</ul><br />
Now you are done! and you should be able to see your blogger blog when you go to <strong>blog.yourdomain.com</strong>. <br />
<br />
Be aware that the propagation of the CNAME setup on your Bluehost account may take up to 4 hours.<br />
<br />
If you need any assistance, feel free to <a href="http://funnelcity.com/en/contact">drop me a line</a>.