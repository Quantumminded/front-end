import { toast } from "react-toastify";

function toastMessage(type, message) {
  if (!message) return;
  if (!type) type = "info";
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
