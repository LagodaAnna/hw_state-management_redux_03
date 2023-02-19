import { StyledInput, StyledLabel } from './Input.styled';

const Input = ({
	name,
	labelText,
	placeholderText,
	inputValue,
	onInputChange,
	className,
	type = 'text',
}) => (
	<StyledLabel htmlFor='input'>
		{labelText}
		<StyledInput
			type={type}
			placeholder={placeholderText}
			onChange={onInputChange}
			value={inputValue}
			name={name}
			autoComplete='off'
			className={className}
		/>
	</StyledLabel>
);

export default Input;
