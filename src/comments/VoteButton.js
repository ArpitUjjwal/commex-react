import React, { useState } from 'react'

const VoteButton = () => {
  const [count, setCount] = useState(0)

  const upVote = () => {
    setCount(count + 1)
  }

  const downVote = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <button type="button" onClick={upVote}>
        Upvote
      </button>
      <div>{count}</div>
      <button type="button" onClick={downVote}>
        Downvote
      </button>
    </div>
  )
}

export default VoteButton
