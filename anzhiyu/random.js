var posts=["2025/02/13/hello-world/","2025/02/15/重新开始/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };