var posts=["2025/02/15/博客/","2025/02/16/自动刷题刷课/","2025/02/16/大一上/","2025/02/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };