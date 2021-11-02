const posts = [
  {title: "Post title 1" ,
   author: "Anonymous1" ,
   content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 },
 {title: "Post title 2" ,
  author: "Anonymous2" ,
  content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{title: "Post title 3" ,
 author: "Anonymous1" ,
 content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{title: "Post title 4" ,
 author: "Anonymous4" ,
 content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
];

const sortPosts = (posts, receivedData) => {
  return new Promise((resolve, reject) => {
    console.log("Postlar sıralanıyor...")
    if(receivedData){
      let len = Object.keys(posts).length;
      resolve("Postlar sıralandı");
    }else{
      reject("Veriler sıralanamadı")
    }
  });

}

const addPost = (post) => {
  return new Promise((resolve, reject) => {
      let beforePushlen = Object.keys(posts).length;
      posts.push(post);
      if(Object.keys(posts).length >  beforePushlen)
      {
        resolve("Post eklendi");
      }else{
        reject("Post eklenemedi");
    }
  });
}

async function processPost() {
  try{
    const pro2 = await addPost({
    title: "Post title new" ,
    author: "Anonymousnew" ,
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
  console.log(pro2);
    const pro1 = await sortPosts(posts, true);
    console.log(pro1);


  }catch(error){
  console.log(error)
  }
}

async function process() {
  await processPost()
  console.log(posts)
}
process();
