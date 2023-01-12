import { toast } from "react-toastify";

const validTypes = ["success", "error", "warning", "info"];

function toastMessage(type, message) {
  if (!message) return;

  // Set default type to "info" if no type is provided
  if (!type) type = "info";

  // Check if the provided type is valid
  if (!validTypes.includes(type)) {
    console.error(`"${type}" is not a valid type for toastMessage. Valid types are: ${validTypes.join(", ")}`);
    return;
  }

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
