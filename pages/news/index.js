// domain.com/news/something-important
import Link from 'next/link';
import React from "react";

const news = () => {
  return (
    <>
      <h1>news</h1>
      <ul>
        <li>
          <Link href='/news/next'>List 1</Link>
        </li>
        <li>List 2</li>
      </ul>
    </>
  );
};

export default news;
