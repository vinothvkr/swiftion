---
id: 8
slug: basic-linux-commands
published: true
title: Basic Linux commands
date: '2020-07-23 05:19:35 +0530'
date_gmt: '2020-07-23 05:19:35 +0530'
image: '/08/featured.jpg'
category: Ubuntu
tags:
  - Linux
  - Ubuntu
  - Fedora
  - Alpine Linux
---

To list all the users in system.

```
cat /etc/passwd
```

To list all the groups in system.

```
cat /etc/group
```

To add new user.

```
sudo adduser username
```

To add a user to sudo group.

```
sudo usermod -aG sudo username
```

To delete user.

```
sudo deluser username
```

To delete user and his home directory

```
sudo deluser --remove-home username
```

To add a group to directory

```
sudo chgrp -R username directoryname
```

To make directory read write access to group

```
sudo chmod g+rwx -R directoryname
```
