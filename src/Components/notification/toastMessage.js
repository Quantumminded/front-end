import { toast } from "react-toastify";

function toastMessage(type, message) {
  if (type)
    toast[`${type}`](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: null,
      theme: "colored",
    });
}
export default toastMessage;
