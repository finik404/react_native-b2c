import React from 'react';
import { HomeItems } from '@/src/features/home/widgets/Items';
import { PostCard } from '@/src/features/home/blocks/blog/widgets/Card';
import { PostCardSkeleton } from '@/src/features/home/blocks/blog/widgets/Skeleton';

// # --------------- HomeBlog --------------- #
export const HomeBlog = () => {
  return (
    <HomeItems<TPost>
      title="Блог"
      url="/include/mainpage/blog/"
      height={300}
      skeleton={PostCardSkeleton()}
      child={item => <PostCard data={item} />}
    />
  );
};
