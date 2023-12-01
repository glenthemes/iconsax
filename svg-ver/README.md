### 900+ icons from Iconsax (by Vuesax)

<sub>Whilst there were webfont files available from the site, I couldn't get them to work so I uploaded the icons here onto Github, then wrote a script that lets you add any icon via a single line. I take no ownership of these icons, just the script I wrote to retrieve the file urls, as well as the cheatsheet I made.</sub>  

[iconsax.io](https://iconsax.io) | [vuesax.com](https://vuesax.com)

---

#### ICONS LIST:
💘 [glenthemes.tumblr.com/icons/iconsax](https://glenthemes.tumblr.com/icons/iconsax) 💘

---

#### HOW TO USE:
Make sure you have jQuery somewhere on your page. If you don't have it, put this under `<head>`:
```
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```
Paste the essential scripts (also under `<head>`):
```
<script src="//glenthemes.github.io/iconsax/geticons.js"></script>
<link href="//glenthemes.github.io/iconsax/style.css" rel="stylesheet">
```

To use an icon, paste the following line where you want your icon to be:
```
<i class="iconsax" icon-name="milk"></i>
```

Choose an icon from [the list](https://glenthemes.tumblr.com/icons/iconsax), copy the name and paste it between the `""` of `icon-name=""`.  
(in this case, replace `milk`).

Use this CSS to set the global appearance of the icons:
```
:root {
    --Iconsax-Size:20px;
    --Iconsax-Color:#9fb3c7;
}
```

If you want to change the styling of an icon e.g. under a different div:
```
.special-class .iconsax {
    --Iconsax-Size:14px;
    --Iconsax-Color:#696969;
}
```
---
#### TROUBLESHOOTING:
[discord.gg/RcMKnwz](https://discord.gg/RcMKnwz)
