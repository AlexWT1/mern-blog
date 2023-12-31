import React from 'react';
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  if (!post) {
    return <div className="text-xl text-center text-white py-10">Загрузка...</div>;
  }

  return (
    <Link to={`/${post._id}`}>
      <div className="flex flex-col basis-1/4 flex-grow">
        <div className={post.imageUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
          {post.imageUrl && (
            <img
              src={`http://localhost:3002/${post.imageUrl}`}
              alt=""
              className="object-cover w-full"
            ></img>
          )}
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-white opacity-50">{post.username}</div>
          <div className="text-xs text-white opacity-50">
            <Moment date={post.createdAt} format="D MMM YYYY" />
          </div>
        </div>
        <div className="text-white text-xl">{post.title}</div>
        <p className="text-white opacity-60 text-xs pt-4">{post.text}</p>
        <div className="flex gap-3 items-center mt-2">
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-10">
            <AiFillEye /> <span>{post.views}</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-10">
            <AiOutlineMessage /> <span>{post.comments?.lenght || 0} </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col basis-1/4 flex-grow">
        <div className={post.imageUrl ? 'flex rounded-sm h-80' : 'flex rounded-sm'}>
          {post.imageUrl && (
            <img
              src={`http://localhost:3002/${post.imageUrl}`}
              alt=""
              className="object-cover w-full"
            ></img>
          )}
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-white opacity-50">{post.username}</div>
          <div className="text-xs text-white opacity-50">
            <Moment date={post.createdAt} format="D MMM YYYY" />
          </div>
        </div>
        <div className="text-white text-xl">{post.title}</div>
        <p className="text-white opacity-60 text-xs pt-4">{post.text}</p>
        <div className="flex gap-3 items-center mt-2">
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-10">
            <AiFillEye /> <span>{post.views}</span>
          </button>
          <button className="flex items-center justify-center gap-2 text-xs text-white opacity-10">
            <AiOutlineMessage /> <span>{post.comments?.lenght || 0} </span>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
