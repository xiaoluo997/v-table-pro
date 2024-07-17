
import * as ArcoDesignIcon from '@arco-design/web-react/icon'
import { useState } from 'react'
import { Comment ,Popover, Avatar} from '@arco-design/web-react';
const { IconHeart, IconMessage, IconStar, IconStarFill, IconHeartFill } = ArcoDesignIcon;
export const CommentReactComponent = (props) => {
  const { name } = props;
  const [like, setLike] = useState();
  const [star, setStar] = useState();
  const actions = [
    <button className="custom-comment-action" key="heart" onClick={() => setLike(!like)}>
      {like ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="star" onClick={() => setStar(!star)}>
      {star ? <IconStarFill style={{ color: '#ffb400' }} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </button>
  ];
  return (
    <Comment
      actions={actions}
      author={name}
      avatar={
        <Popover
          title={name}
          content={
            <span>
              <p>Here is the description of this user.</p>
            </span>
          }
        >
          <Avatar>{name.slice(0, 1)}</Avatar>
        </Popover>
      }
      content={<div>Comment body content.</div>}
      datetime="1 hour"
      style={{ marginTop: 10, marginLeft: 10 }}
    />
  );
};