// import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;


/**
 * ====================================================================
 * Clear state out of our input
 * --- controlled component
 * We'll want the input to be controlled by its state
 */

//  import React from "react";

// const CreatePost = ({ user, setPosts }) => {
//   const [content, setContent] = React.useState("");
//   const [image, setImage] = React.useState(null);

//   const imageInputRef = React.useRef()

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!content && !image) {
//       return alert('Fields must not be empty')
//     }
//     const post = { content, image, user };
//     setPosts(prevPosts => [post, ...prevPosts])
//     setContent('')
//     setImage(null)
//     imageInputRef.current.value = ''
//   }
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Add Post Content"
//           onChange={(e) => setContent(e.target.value)}
//           value={content}
//         />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
//         <button type="submit">Submit Post</button>
//       </form>
//       {/* <p>{content}</p>
//       {image && <img src={URL.createObjectURL(image)} alt="upload" style={{height: 100, width: 200, objectFit: 'cover'}} />} */}
//     </div>
//   );
// };

// export default CreatePost;

/**
 * ====================================================================
 *
 */

 import React from "react";

const CreatePost = ({ user, handleAddPost }) => {
  const [content, setContent] = React.useState("");
  const [image, setImage] = React.useState(null);

  const imageInputRef = React.useRef()

  function handleSubmit(e) {
    e.preventDefault();
    if(!content && !image) {
      return alert('Fields must not be empty')
    }
    const post = { content, image, user };
    handleAddPost(post)
    setContent('')
    setImage(null)
    imageInputRef.current.value = ''
  }
  return (
    <div className="flex flex-col items-center gap-y-5 text-white my-5">
      <h1 className="text-5xl font-bold">Create New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          className="border-2 text-black rounded-l-lg py-1 px-2"
          type="text"
          placeholder="Add Post Content"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        {/*
          what is e.target.files
          - e.target.files is an array of files

          e.target.files[0] contains the first file in the array as a File object
          - a File object is a file that has been selected by the user
          - we can use this to display the image in our post

          explain ref={imageInputRef}
          - we want to be able to access the input element
          - we can do this by using a ref
          - we can then access the input element by using imageInputRef.current
          - we can then set the value of the input element to an empty string
        */}
        <input type="file" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} 
          className="
          file:mr-4 file:py-3 file:px-4
          file:rounded-r-lg file:border-0
          file:text-sm
          file:bg-blue-500 file:text-white
          file:font-bold
          hover:file:bg-white hover:file:text-blue-500
          file:w-2/4
          "
        />
        <button className="bg-blue-500 p-2 rounded-lg text-xl font-bold hover:bg-white hover:text-blue-500" type="submit">Submit Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
