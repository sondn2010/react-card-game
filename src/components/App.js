import React, { useState } from "react";

import Header from './Header';
import CardGame from './Blackjack/CardGame';
import Comments from './Exercise/Comments';
import ExerciseReadingFiles from './Files/ExerciseReadingFiles';

export function App({ initialData }) {
  return (
    <>
      <Header />
      <CardGame />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Comments />
          </div>
          <div className="col-sm-12">
            <ExerciseReadingFiles />
          </div>
        </div>
      </div>
    </>
  );
}

