import React from 'react'

const Post = ({ image, content, user}) => {
  console.log(image)
  return (
    <div className="text-white text-2xl text-center">
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="post-cover"
          className="h-52 md:h-72 lg:h-96 w-full"
          // style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </div>
  )
}

export default Post