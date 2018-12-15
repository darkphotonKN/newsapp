import React from 'react';
import Link from 'next/link';

const StoryList = ({ stories }) => {
  return (
    <React.Fragment>
      {stories.map((story) => {
        return (
          <div className="card col-4" key={story.id}>
            <img src="" alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title ">
                <a href={story.url}>{story.title}</a>
              </h5>
              <p className="card-text row">
                <span className="text-muted col-md-6">
                  {story.points} Points
                </span>
                <Link href={`/story?id=${story.id}`} className="col-md-6">
                  <a>{story.comments_count || 0} comments</a>
                </Link>
              </p>
            </div>
            <div className="card-footer">
              <small
                className={
                  story.time_ago.slice(0, 1) > 2
                    ? 'text-muted bg-warning'
                    : 'text-muted'
                }
              >
                {story.time_ago}
              </small>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default StoryList;
