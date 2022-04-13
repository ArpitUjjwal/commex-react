import Comments from "./comments/Comments";
import "./index.css";

const App = () => {
  return (
    <div className="body">
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;