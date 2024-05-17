---
id: 2
slug: how-to-setup-a-firewall-with-ufw-on-ubuntu-18-04
published: true
title: How to setup a Firewall with UFW on Ubuntu 20.04
date: '2018-07-16 13:45:33 +0530'
date_gmt: '2018-07-16 13:45:33 +0530'
image: '/02/featured.jpg'
category: Ubuntu
tags:
  - Linux
  - Ubuntu
---

<p><!-- wp:paragraph --></p>
<p>UFW - Uncomplicated Firewall provides a user friendly way to create an IPv4 or IPv6 host-based firewall which helps a regular user to deny all incoming connections without much configuration.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>UFW comes with Ubuntu by default. In case it is not installed or removed for some reason, run the following command to install it:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo apt install ufw</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>UFW is disabled by default. Before we enable it, let&rsquo;s check it for any existing rule.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw status</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>It shouldn&rsquo;t be having any rules yet. Before we enable it, we should add set the rule to allow ssh connection. To do that let&rsquo;s run the command below. Which will add the rule to allow connection from port 22.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw allow ssh</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>If your ssh server is configured to use different port, run the following command, instead of previous one.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw allow 2222</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now let&rsquo;s enable UFW. Run the following command.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw enable</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>You will get the warning of existing ssh connection disruption. Since we already set the rule to allow ssh connection, choose yes to continue.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Boom. UFW deny all the incoming connections except the one we allowed.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>If you are running a webserver on your server. Run the following command to allow http connection.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw allow http</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>You could also specify the port:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw allow 80</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Run the following command to check the status and rules.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw status</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>In case if you would like to deny connection from specific port, you could do it with following command.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw deny 80</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To delete the rule, let&rsquo;s run the command.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ufw delete allow 80</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Hope this guide is helpful for you. If you have any questions post in the comments below. Happy to help you.</p>
<p><!-- /wp:paragraph --></p>
