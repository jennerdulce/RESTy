import DotLoader from "react-spinners/DotLoader";
import './Loading.scss'
function Loading() {

  return (
    <div className="loading">
      <DotLoader color={'white'} size={80} />
    </div>
  )
}

export default Loading