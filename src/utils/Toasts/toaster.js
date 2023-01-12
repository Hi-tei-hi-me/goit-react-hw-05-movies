import toast from 'react-hot-toast';
import { GiSkullInJar } from 'react-icons/gi';

const toastConfig = {
  incorrectQuery: {
    icon: <GiSkullInJar size={40} />,
    style: {
      background: 'lightgray',
    },
  },
};

export const showToast = (text, type) => {
  toast(text, toastConfig[type]);
};
