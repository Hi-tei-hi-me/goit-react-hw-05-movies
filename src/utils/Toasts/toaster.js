import toast from 'react-hot-toast';
import { GiSkullInJar, GiSurprisedSkull, GiGooSkull, GiPirateSkull } from 'react-icons/gi';

const toastConfig = {
  incorrectQuery: {
    icon: <GiSkullInJar size={40} />,
    style: {
      color: 'black',
      background: 'silver',
    },
  },
  noCastInfo: {
    icon: <GiSurprisedSkull size={40} />,
    style: {
      color: 'black',
      background: 'silver',
    },
  },
  reviewsFound: {
    icon: <GiGooSkull size={40} />,
    style: {
      color: 'black',
      background: 'silver',
    },
  },
  noReviews: {
    icon: <GiPirateSkull size={40} />,
    style: {
      color: 'black',
      background: 'silver',
    },
  },
};

export const showToast = (text, type) => {
  toast(text, toastConfig[type]);
};
