import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="150"
      width="150"
      radius="48"
      color="slategray"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'absolute',
        zIndex: '1000',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
