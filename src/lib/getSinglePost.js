import React from 'react';




const getSinglePost = async (id) => {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if (!res.status===200){
        throw new Error("Error Fetching post")
    }

    return (
        res.json()
    );
};

export default getSinglePost;
