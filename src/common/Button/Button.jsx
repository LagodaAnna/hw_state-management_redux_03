import StyledButton from './Button.styled';

const Button = ({ className, onButtonClick, buttonName, type }) => (
	<StyledButton
		className={className}
		onClick={onButtonClick}
		type={type ? type : 'button'}
	>
		{buttonName}
	</StyledButton>
);

export default Button;
