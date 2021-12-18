---
layout: post
published: true
title: How to setup own VPN server
date: '2020-06-19 11:13:13 +0530'
date_gmt: '2020-06-19 11:13:13 +0530'
categories:
- Ubuntu
tags:
- Linux
- Ubuntu
- OpenVPN
comments: []
---
<p><!-- wp:paragraph --></p>
<p>Today we are going to see how to setup our own VPN server. Here is a step by step guide to install and setup VPN server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p><strong>Prerequisites:</strong><br>We need a VPS with any Linux distribution setup and running with basic initial configuration. In this tutorial we are using Ubuntu 20.04 server, so the steps shown below would work on almost all the Debian based linux distributions.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>To setup OpenVPN server we are going to use a script which will setup and configure a VPN server with in few seconds. The script is hosted in GitHub repository.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Let's begin to setup VPN server. First download the script to our server:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now make the script executable:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>chmod +x openvpn-install.sh</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Run the script:</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo ./openvpn-install.sh</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now it asks few questions before it install and configure the server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>IP address: XXX.XX.XX.XXX</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Script itself detect the VPS public IP address. Verify the IP address it shows is correct.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Do you want to enable IPv6 support (NAT)? &#91;y/n]: n</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>If you want to enable IPv6 support enter "y" else "n".</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Which port do you want OpenVPN to listen to?
     1) Default: 1194
     2) Custom
     3) Random &#91;49152-65535]
Port choice &#91;1-3]: 1</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Choose a port of your choice. I chose the default port.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>What protocol do you want OpenVPN to use?
UDP is faster. Unless it is not available, you shouldn't use TCP.
     1) UDP
     2) TCP
Protocol &#91;1-2]: 1</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Choose the protocol you prefer. </p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>What DNS resolvers do you want to use with the VPN?
     1) Current system resolvers (from /etc/resolv.conf)
     2) Self-hosted DNS Resolver (Unbound)
     3) Cloudflare (Anycast: worldwide)
     4) Quad9 (Anycast: worldwide)
     5) Quad9 uncensored (Anycast: worldwide)
     6) FDN (France)
     7) DNS.WATCH (Germany)
     8) OpenDNS (Anycast: worldwide)
     9) Google (Anycast: worldwide)
    10) Yandex Basic (Russia)
    11) AdGuard DNS (Anycast: worldwide)
    12) NextDNS (Anycast: worldwide)
    13) Custom
DNS &#91;1-12]: 3</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Choose a DNS of your choice.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Do you want to use compression? It is not recommended since the VORACLE attack make use of it.
Enable compression? &#91;y/n]: n</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Enter "n", it's advised to have it disabled.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Customize encryption settings? &#91;y/n]: n</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Enter "n" to have the default encryption settings. Then press any key to let it install and configure the VPN server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Once everything is installed it ask for few more questions to create a Client file. Then it will create a client file, which we will use to import into OpenVPN client to connect to OpenVPN server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Client Name: swiftionvpn</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Give the name of your choice.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>Do you want to protect the configuration file with a password?
(e.g. encrypt the private key with a password)
   1) Add a passwordless client
   2) Use a password for the client
Select an option &#91;1-2]: 1</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>It is suggested to set a password for the client. This the password we have to enter while connecting to our VPN server. Enter "1" and enter the password when it prompts.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Once it is done. Client file will be created in your home directory for eg. <code>/home/username/swiftionvpn.ovpn</code></p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now let's download the client file to our local machine. To do that we use SCP.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>scp username@ipaddress:/home/username/swiftionvpn.ovpn swiftionvpn.ovpn </code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>This will download the client file to current directory.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now open OpenVPN client and import the client file and connect to our VPN server. when it prompt's credentials. Username is the client name you given and the password you set for that client name.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Now you would have successfully connected to VPN tunnel and routing your traffic through secured encrypted tunnel.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>In case you have any questions or an issue, feel free to post it in the comment box below. Hope I helped you today. Thank you.</p>
<p><!-- /wp:paragraph --></p>
