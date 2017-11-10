---
layout: post
title: Hello Hydro Game Update
date: 2013-09-05 12:37
author: tmencer
comments: true
categories: [Lab Notes]
---
I've been off and on not really giving much updates to anything I've been working on. Shame on me.

However, there is some small updates on the game, Hello Hydro. This platform style game is being developed to play on a desktop/laptop computer and, hopefully, in the future your Android/iOS device.

Originally, my plan was for it to play like this: <a title="Hello, Hydro 2D Demo" href="http://projects.cubelabmedia.com/hydro/" target="_blank">http://projects.cubelabmedia.com/hydro/</a> and this was a fun prototype. However, I opened up <a title="Unity 3D - Game Engine Software" href="http://www.unity3d.com" target="_blank">Unity3D </a>and played around for a weekend.

The following videos are prototypes only and not intended to be viewed as a real product.

https://www.youtube.com/watch?v=5plylZ_OVUg

My first attempt wasn't bad. But I needed to fix a few things. I really wanted a rotating wheel .. so, after a little extra code ..

https://www.youtube.com/watch?v=1cKfSpiuLpE

BAM, a wheel that spins in the correct direction.

For the robotic character I used <a title="Blender" href="http://www.blender.org" target="_blank">Blender</a>. It's not the best model, but it was enough to get me started.

One thing that I learned, through trial and error, was the FBX format is far better than OBJ for game characters. When I bring it into unity it keeps all the data from Blender that I needed. I can then take pieces (such as the wheel) and rotate it in game, rather than build out animations (BVM) and bringing those into Unity. This makes it more flexible to me and allows me to do more with my character.

I had to also find a good screen capture tool. I didn't want to pay for Camtastia, Jing didn't cut it and CamStudio has frame rate issues. So, after a lot of time on Google I came across <a title="Open Broadcaster Software" href="http://obsproject.com/" target="_blank">Open Broadcaster Software</a>. This a 100% free software that works wonderfully. The interface isn't perfect, but it works well.
