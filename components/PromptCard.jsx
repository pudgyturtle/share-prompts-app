"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathName, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleTagClick, handleEdit, handkeDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image 
            src={post && post.creator.image ? post.creator.image : "/images/logo.svg"}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default PromptCard
