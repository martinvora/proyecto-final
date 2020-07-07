import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
const notify = () => {
  toast.dark('🛸💨💨 Thanks for subscribing !!', {
    position: toast.POSITION.BOTTOM_RIGHT
  })
}

export default notify;
