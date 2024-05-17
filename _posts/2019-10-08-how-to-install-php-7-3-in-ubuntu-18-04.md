---
id: 6
published: true
title: How to install PHP 7.3 in Ubuntu 18.04
date: '2019-10-08 16:59:08 +0530'
date_gmt: '2019-10-08 16:59:08 +0530'
image: '/06/featured.jpg'
category: Ubuntu
tags:
  - Ubuntu
  - php
  - Debian
---

<p><!-- wp:paragraph --></p>
<p>In this tutorial we will see how to install PHP version 7.3 in Ubuntu 18.04. Currently Ubuntu 18.04 support PHP version 7.2 officially in their repository. There are some situation we are required to install version 7.3.x. For example Wordpress latest version required PHP 7.3 or above. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Developer Ondřej Sur&yacute; maintain's the unsupported versions of PHP in <a href="https://launchpad.net/~ondrej">Launchpad</a>. Let's thanks for his work.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>Add PPA repository</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>sudo add-apt-repository ppa:ondrej/php<br>sudo apt update</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now PHP version 7.3 could be installed in Ubuntu 18.04</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>Install PHP 7.3 for Nginx</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>sudo apt install php7.3-fpm</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:heading {"level":3} --></p>
<h3>Install PHP 7.3 for Apache</h3>
<p><!-- /wp:heading --></p>
<p><!-- wp:paragraph --></p>
<p><code>sudo apt install php7.3</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Execute that following command to confirm the php version.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><code>php -v</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>PHP 7.3 version is successfully installed on your server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Please let me know if you encounter any issue in the comment section below.</p>
<p><!-- /wp:paragraph --></p>
