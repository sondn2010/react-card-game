import React, { useState } from "react";

import CardGame from './CardGame';

import Comments from './Exercise/Comments';

export function App({ initialData }) {
  return (
    <>
      <CardGame />
      <Comments />
    </>
  );
}

