import toast from 'react-hot-toast';
import {
  GiSkullInJar,
  GiSkullCrossedBones,
  GiHappySkull,
  GiChewedSkull,
  GiSurprisedSkull,
  GiGooSkull,
  GiPirateSkull,
} from 'react-icons/gi';

const toastConfig = {
  incorrectQuery: {
    icon: <GiSkullInJar size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  repeatedQuery: {
    icon: <GiSkullCrossedBones size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  filmsFound: {
    icon: <GiHappySkull size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  nothingFound: {
    icon: <GiChewedSkull size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  noCastInfo: {
    icon: <GiSurprisedSkull size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  reviewsFound: {
    icon: <GiGooSkull size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
  noReviews: {
    icon: <GiPirateSkull size={40} color="#9c0a21" />,
    style: {
      color: 'black',
      background: 'rgba(218, 212, 212, 0.8)',
    },
  },
};

export const showToast = (text, type) => {
  toast(text, toastConfig[type]);
};
