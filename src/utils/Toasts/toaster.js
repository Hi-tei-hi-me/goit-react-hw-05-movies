import toast from 'react-hot-toast';
import { GiSkullInJar, GiChoppedSkull } from 'react-icons/gi';

const toastConfig = {
  incorrectQuery: {
    icon: <GiSkullInJar size={40} />,
    style: {
      color: 'black',
      background: 'lightgray',
    },
  },
  noInfo: {
    icon: <GiChoppedSkull size={40} />,
    style: {
      color: 'black',
      background: 'lightgray',
    },
  },
};

export const showToast = (text, type) => {
  toast(text, toastConfig[type]);
};
