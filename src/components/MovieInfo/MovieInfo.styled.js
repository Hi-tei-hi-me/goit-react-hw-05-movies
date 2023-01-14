import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid lightgray;
  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const PosterContainer = styled.div`
  width: 400px;
  max-width: 30vw;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const RatingColorizer = styled.b`
  display: inline-block;
  text-align: center;
  width: 44px;
  padding-top: 10px;
  padding-right: 1px;
  padding-bottom: 11px;
  border-radius: 50%;
  border: 2.5px solid;
  ${prop => {
    switch (prop.variant) {
      case 'red':
        return 'color: #a40000; background-color: #f0a3a3; border-color: #a40000';
      case 'orange':
        return 'color: #c46300; background-color: #FFA55A; border-color: #c46300';
      case 'green':
        return 'color: #197504; background-color: #98d752; border-color: #197504';
      case 'pink':
        return 'color: #7c0ca0; background-color: #ffb0cd; border-color: #7c0ca0';
      default:
        return 'color: #000000; background-color: #D3D3D3; border-color: #000000';
    }
  }};
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
`;

export const AddInfoOption = styled.li`
  padding: 5px 0px;
  color: #9c0309;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
