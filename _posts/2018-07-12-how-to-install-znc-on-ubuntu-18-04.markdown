---
layout: post
published: true
title: How to install ZNC on Ubuntu 18.04
date: '2018-07-12 13:29:44 +0530'
date_gmt: '2018-07-12 13:29:44 +0530'
categories:
- Ubuntu
tags:
- Linux
- Ubuntu
comments: []
---
<p><!-- wp:paragraph --></p>
<p>ZNC allows you to stay connected to IRC network. Multiple clients can be connected to single ZNC account different locations simultaneously and therefore appear under the same nickname on IRC server.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>Let&rsquo;s get our system set up with prerequisite.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>First, update system.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo apt update
sudo apt upgrade</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>ZNC can be installed from Ubuntu repo. Let&rsquo;s install it.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>sudo apt install znc znc-dev</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>znc-dev is requires to compile the modules if installed.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>We will now begin setting up ZNC as a system daemon.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo useradd --create-home -d /var/lib/znc --system --shell /sbin/nologin --comment "User to run ZNC daemon" --user-group znc 
sudo -u znc /usr/bin/znc --datadir=/var/lib/znc --makeconf 
&#91; .. ] Checking for list of available modules... 
&#91; >> ] ok 
&#91; ** ]
&#91; ** ] -- Global settings -- 
&#91; ** ]
&#91; ?? ] Listen on port (1025 to 65534): 6697 
&#91; ?? ] Listen using SSL (yes/no) &#91;no]: yes 
&#91; ?? ] Listen using both IPv4 and IPv6 (yes/no) &#91;yes]: yes 
&#91; .. ] Verifying the listener... 
&#91; >> ] ok 
&#91; ** ] Unable to locate pem file: &#91;/var/lib/znc/znc.pem], creating it 
&#91; .. ] Writing Pem file &#91;/var/lib/znc/znc.pem]... 
&#91; >> ] ok 
&#91; ** ] Enabled global modules &#91;webadmin] 
&#91; ** ]
&#91; ** ] -- Admin user settings -- 
&#91; ** ]
&#91; ?? ] Username (alphanumeric): vinoth 
&#91; ?? ] Enter password: 
&#91; ?? ] Confirm password: 
&#91; ?? ] Nick &#91;vinoth]: 
&#91; ?? ] Alternate nick &#91;vinoth_]: 
&#91; ?? ] Ident &#91;vinoth]: 
&#91; ?? ] Real name &#91;Got ZNC?]: vinoth 
&#91; ?? ] Bind host (optional): 
&#91; ** ] Enabled user modules &#91;chansaver, controlpanel] 
&#91; ** ]
&#91; ?? ] Set up a network? (yes/no) &#91;yes]: yes 
&#91; ** ]
&#91; ** ] -- Network settings -- 
&#91; ** ]
&#91; ?? ] Name &#91;freenode]: 
&#91; ?? ] Server host &#91;chat.freenode.net]: 
&#91; ?? ] Server uses SSL? (yes/no) &#91;yes]: yes 
&#91; ?? ] Server port (1 to 65535) &#91;6697]: 6697 
&#91; ?? ] Server password (probably empty): 
&#91; ?? ] Initial channels: #ubuntu 
&#91; ** ] Enabled network modules &#91;simple_away] 
&#91; ** ]
&#91; .. ] Writing config &#91;/var/lib/znc/configs/znc.conf]... 
&#91; >> ] ok 
&#91; ** ]
&#91; ** ] To connect to this ZNC you need to connect to it as your IRC server 
&#91; ** ] using the port that you supplied. You have to supply your login info 
&#91; ** ] as the IRC server password like this: user/network:pass. 
&#91; ** ]
&#91; ** ] Try something like this in your IRC client... 
&#91; ** ] /server <znc_server_ip> +6697 vinoth: 
&#91; ** ]
&#91; ** ] To manage settings, users and networks, point your web browser to 
&#91; ** ] https://<znc_server_ip>:6697/ 
&#91; ** ] 
&#91; ?? ] Launch ZNC now? (yes/no) &#91;yes]: no</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Before starting ZNC, let&rsquo;s create systemd unit file.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo nano /etc/systemd/system/znc.service</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now put the below in the file we just created.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>&#91;Unit]
Description=ZNC Service
After=network-online.target

&#91;Service]
ExecStart=/usr/bin/znc -f --datadir=/var/lib/znc
User=znc

&#91;Install]
WantedBy=multi-user.target</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Now let&rsquo;s enable and start ZNC service.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:code --></p>
<pre class="wp-block-code"><code>sudo systemctl enable znc
sudo systemctl start znc</code></pre>
<p><!-- /wp:code --></p>
<p><!-- wp:paragraph --></p>
<p>Boom, we have successfully setup znc now.</p>
<p><!-- /wp:paragraph --></p>
<p><!-- wp:paragraph --></p>
<p>If you have any question or stuck up anywhere, post it on comments below. Happy to help.</p>
<p><!-- /wp:paragraph --></p>
