var posts=["2025/02/15/博客/","2025/02/18/贪心-局部交叉型/","2025/02/17/六六表-数构造/","2025/02/17/位运算/","2025/02/16/大一上/","2025/02/16/自动刷题刷课/","2025/02/16/高精度算法/","2025/02/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };