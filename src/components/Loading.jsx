import FidgetSpinner from "../assets/Fidget-spinner.gif"
import "./styles/global.css"

export default function Loading() {
  return (
    <div className="loading">
      <img src={FidgetSpinner} alt="Loading..." />
    </div>
  )
}
