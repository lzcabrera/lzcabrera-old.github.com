---
layout: post
title: "Install Compass: CSS Authoring Framework"
---

<p>Compass needs a computer that has ruby installed.</p>

<p>If you have a Mac with Mac OS X then you can follow the steps on my previous post <a href="/2012/10/01/setting-up-rvm-on-mac-os-x.html">Setting up RVM (Ruby Version Manager) on Mac OS X</a>.</p>

<p>If you have are running Windows you can follow the steps on my post <a href="/2012/10/02/installing-ruby-on-windows.html">Setting up Ruby on Windows</a>.</p>

<div class="step">
<p><span>Step 1</span> Update the ruby gems</p>
<p>A gem is a packaged Ruby application or library. It has a name and a version. In our case, to our luck, there is compass gem and in order to get the latest version of the compass gem we must run the following command to update the gems library in the system:</p>
<blockquote>gem update --system</blockquote>
</div>

<div class="step">
<p><span>Step 2</span> Install Compass</p>
<p>Run the following command to install compass</p>
<blockquote>gem install compass</blockquote>
</div>

<div class="step">
<p><span>Step 3</span> Create a compass project</p>
<blockquote>compass create /path/to/project</blockquote>

<p>This will create a new project with the following folder structure</p>
<pre>
/.sass-cache
config.rb
/sass
/stylesheets
</pre>
</div>

<div class="step">
<p><span>Step 4</span> Compile .scss files</p>
<p>To compile the sassy css stylesheets you run the following command</p>
<blockquote>compass watch</blockquote>
<p>within the projects main directory.</p>
</div>

<p>Now you can edit and add the *.scss files in the sass directory with your text editor. The 'compass watch' process automatically compiles the *.scss files into css in the stylesheets directory whenever they change.</p>

<p>And that's it you have now created your first compass project.</p>

<p>Note:<br/>
To check the version of compass your project/running is running you can use the following command:</p>
<blockquote>compass version</blockquote>

<p>Now that you have compass installed, you can refer to my post on how to use Foundation 3 and compass to learn how create responsive websites using sass.</p>

<p>If you want more information on how to setup compass you can go to <a href="http://compass-style.org/install/">http://compass-style.org/install/</a>.</p>