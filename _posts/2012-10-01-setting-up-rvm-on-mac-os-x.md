---
layout: post
title: "Setting up RVM (Ruby Version Manager) on Mac OS X"
---


<p>Here are 10 easy steps some of you may find useful. Thanks to Ryan bigg for his <a href="http://ryanbigg.com/2011/06/mac-os-x-ruby-rvm-rails-and-you/">article</a> that helped me figure it all out</p>

<div class="step">
<p><span>Step 1</span> Install XCode (Mac App Store)</p>
<p>We need this for the build tools that it installs to install Ruby and other packages.</p>
<p>This install will take a couple of minutes...</p>
</div>

<div class="step">
<p><span>Step 2</span> Install Homebrew</p>
<p>Homebrew is a package management system, you can install it via command line</p>
<blockquote>ruby -e "$(curl -fsSL https://gist.github.com/raw/323731/install_homebrew.rb)"</blockquote>
<p>Once homebrew is installed, let's install the package for Git.</p>
</div>

<div class="step">
<p><span>Step 3</span> Install Git</p>
<blockquote>brew install git</blockquote>
<p>The reason why we are installing Git is to install RVM (Ruby Version Manager) from its Github repository</p>
</div>

<div class="step">
<p><span>Step 4</span> Install RVM (Ruby Version Manager)</p>
<p>This is a helpful tool for installing and managing many different versions of Ruby and its gems all at once.</p>
<p>We are going to use it to install only one version of Ruby.</p>
<p>The following command installs RVM and it is expecting you to have git and curl installed for it to work:</p>
<blockquote>bash -s stable &lt; &lt;(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)</blockquote>
</div>

<div class="step">
<p><span>Step 5</span> Update ~/.bash_profile</p>
<p>We need to add a line to the ~/.bash_profile that is responsible for setting up the bash session (this is where we load RVM)</p>
<blockquote>echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] &amp;&amp; source "$HOME/.rvm/scripts/rvm"' >> ~/.bash_profile </blockquote>
</div>

<div class="step">
<p><span>Step 6</span> Reload ~/.bash_profile</p>
<blockquote>. ~/.bash_profile</blockquote>
</div>

<div class="step">
<p><span>Step 7</span> Install Ruby</p>
<p>With RVM and XCode install we can install Ruby 1.9.3</p>
<blockquote>rvm install 1.9.3</blockquote>
<p>This command will take a couple of minutes...</p>
</div>

<div class="step">
<p><span>Step 8</span> Select the Ruby version to use</p>
<p>In our case, since we just installed version 1.9.3, this is the one we are going to use</p>
<blockquote>rvm use 1.9.3</blockquote>
</div>

<div class="step">
<p><span>Step 9</span> Check which version of Ruby you are using</p>
<blockquote>ruby -v</blockquote>
<p>If you see something like </p>
<blockquote>ruby 1.9.3p0 (2011-10-30 revision 33570) [x86_64-linux] </blockquote>
<p>or similar then we are on the same page.</p>
</div>

<div class="step">
<p><span>Step 10</span> Set the default Ruby version</p>
<blockquote>rvm --default use 1.9.3</blockquote>
<p>Now whenever we open a new bash session we will have Ruby available for us to use.</p>
</div>







