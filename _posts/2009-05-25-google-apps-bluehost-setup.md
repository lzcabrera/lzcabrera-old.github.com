---
layout: post
title: "Google Apps/Bluehost Setup"
---
I have successfully setup Google Apps using an add-on domain purchased and hosted on Bluehost. I am pretty excited to use this setup for my next project.<br />
<br />
Google Apps Standard Edition gives access to Free Web applications for communication and collaboration and can be setup for personal use, businesses or schools.<br />
<br />
Here is an overview of what you can setup for a domain name you already own:<br />
<ul><li>Gmail: Fast, searchable email with less spam</li>
<li>Google Talk: IM and call your friends through your computer</li>
<li>Google Calendar: Organize your schedule and share events with friends</li>
<li>Google Docs: Share online documents, presentations, and spreadsheets</li>
<li>Google Sites: Create websites and secure group wikis</li>
</ul>You can go to <a href="http://www.google.com/a/cpanel/domain/new">http://www.google.com/a/cpanel/domain/new</a> to sign up for Google Apps Standard Edition.<br />
<br />
While setting the collaborative environment up, some of the steps that involved Bluehost configuration were:<br />
<ul><li>Ownership verification of the domain name using HTML (done through <strong>FTP</strong>)</li>
<li>MX Records configuration using <strong>cPanel</strong> (change to ASPMX.L.GOOGLE.COM)</li>
<li><strong>CNAME</strong> setup for custom URLs (I had to submit a request to Bluehost since it could not be done through the cPanel interface). Basically, Bluehost Technical Support needs to create <strong>CNAME</strong> records with <strong>ghs.google.com</strong> as their destination.</li>
</ul>For example, if you own <strong>example.com</strong>, you will want to setup Gmail for your domain to be accessed through mail.example.com. Therefore, you will have to request Bluehost to create a CNAME record for mail with the destination setup to ghs.google.com. This is not a necessary step, but it is a lot easier to remember  mail.example.com than mail.google.com/a/example.com.<br />
<br />
Note: <strong>cPanel</strong> changes may take up to 48 hours to propagate through the Internet.