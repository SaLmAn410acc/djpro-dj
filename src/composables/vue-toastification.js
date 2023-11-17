import { useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const toast = useToast({
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    maxToasts: 5,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
});

export default function useToastPlugin() {
    return toast;
}
