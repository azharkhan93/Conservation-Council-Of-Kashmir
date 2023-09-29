/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  author: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ imageUrl, title, category, date, author, content }) => {
  return (
    <div className="mb-16 flex flex-wrap">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
        <div className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20">
          <img src={imageUrl} className="w-full" alt={title} />
          <a href="#!">
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
        <h3 className="mb-4 text-2xl font-bold">{title}</h3>
        <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="mr-2 h-5 w-5">
            {/* Your category-specific SVG here */}
          </svg>
          {category}
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
          Published <u>{date}</u> by
          <a href="#!">{author}</a>
        </p>
        <p className="text-neutral-500 dark:text-neutral-300">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;

