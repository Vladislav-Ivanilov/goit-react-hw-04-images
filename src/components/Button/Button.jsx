import { MoreBtn } from './Button.styled';

export const Button = ({ onLOardMore }) => {
  return (
    <MoreBtn type="button" onClick={onLOardMore}>
      Load more
    </MoreBtn>
  );
};
