import {useLoading} from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css';
export default function useLoadingPlugin() {
    const loading = useLoading({
        color: '#7367F0',
        loader: 'spinner',
        width: 64,
        height: 64,
        backgroundColor: 'rgba(0,0,0,0.1)',
        opacity: 1,
        isFullPage: true,
        lockScroll: true,
        transition: 'scale-in-out',
    })
    return loading
}
