---
layout: post
title: "Installing Ruby on Windows"
---

<p>If you are running a Windows machine and need to install ruby, here are 3 easy steps to follow. For more information you can also visit <a href="http://rubyinstaller.org/downloads/">rubyinstaller.org</a>, which is where I followed the instructions from when I had to install it on a Windows machine.</p>

<div class="step">
<p><span>Step 1</span>: Download RubyInstaller from <a href="http://rubyinstaller.org/downloads/">http://rubyinstaller.org/downloads/</a></p>
<p>The latest version (when this post was written) is Ruby 1.9.3-p194. I'm providing this instructions because I had to figure how to setup Ruby on a computer at work.<br/>
I'm not aware if there is something similar to RVM (Ruby Version Manager) for Windows that could help with future updates to Ruby.</p>
</div>

<div class="step">
<p><span>Step 2</span>: Run the Installer</p>
<p>I checked the following 2 options to make it simple to use. The Windows command line is already complicated enough when I am not used to it anyways:</p>
<ul>
	<li>Add Ruby executable to your PATH</li>
	<li>Associate .rb and .rbw files with this Ruby installation</li>
</ul>
</div>

<div class="step">
<p><span>Step 3</span>: Verify that your installation was successful</p>
<ul>
	<li>Go to the Windows command line by clicking on the Windows logo and on the search field type cmd and hit enter</li>
	<li>A new window with a black background will popup, for all of you non-tech savvy this is the Windows command line</li>
	<li>Type "ruby -v" and you should see
	<blockquote>ruby 1.9.3p194</blockquote> 
	immediately after it</li>
</ul>
</div>
<p>That's it you now have ruby installed on your Windows machine and will now be able to install fancy tools like compass and zurb foundation 3 to create and design cool web responsive websites and web applications.</p>
