---
layout: post
published: true
title: Basic Linux commands
date: '2020-07-23 05:19:35 +0530'
date_gmt: '2020-07-23 05:19:35 +0530'
categories:
- Ubuntu
tags:
- Linux
- Ubuntu
- Fedora
- Alpine Linux
comments: []
---
<p><!-- wp:paragraph --></p>
<p>To list all the users in system.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>cat /etc/passwd</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To list all the groups in system.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>cat /etc/group</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To add new user.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo adduser username</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To add a user to sudo group.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo usermod -aG sudo username</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To delete user.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo deluser username</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>To delete user and his home directory</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo deluser --remove-home username</code></pre>
<p><!-- /wp:code --></p>
