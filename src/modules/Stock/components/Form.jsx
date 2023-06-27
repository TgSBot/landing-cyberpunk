import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragAndDrop from '../../../components/DragAndDrop/DragAndDrop.jsx';
import { formSlice } from '../../../store/reducers/Form.js';
import MyButton from '../../../UI/Button/MyButton';
import '../styles/Form.css';

const Form = () => {
	const { firstName, email, checkbox, fileName } = useSelector(
		(state) => state.formReducer
	);
	const { changeFirstName, changeEmail, changeCheckbox } = formSlice.actions;
	const dispatch = useDispatch();
	const [firstNameDirty, setfirstNameDirty] = useState(false);
	const [emailDirty, setEmailDirty] = useState(false);
	const [firstNameError, setFirstNameError] = useState(
		'Имя не может быть пустым'
	);
	const [emailError, setEmailError] = useState('Email не может быть пустым');
	const [formValid, setFormValid] = useState(false);

	const blurHandler = (event) => {
		switch (event.target.name) {
			case 'firstName':
				setfirstNameDirty(true);
				break;
			case 'email':
				setEmailDirty(true);
				break;
			default:
				return '';
		}
	};

	useEffect(() => {
		if (firstNameError || emailError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [firstNameError, emailError]);

	useEffect(() => {
		if (
			firstName === '' ||
			email === '' ||
			fileName === '' ||
			checkbox === false
		) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [firstName, email, fileName, checkbox]);

	const firstNameHandler = (event) => {
		dispatch(changeFirstName(event.target.value));
		if (event.target.value.length < 1) {
			setFirstNameError('Напишите своё имя');
		} else {
			setFirstNameError('');
		}
	};

	const emailHandler = (event) => {
		dispatch(changeEmail(event.target.value));
		const re = /@/;
		if (!re.test(String(event.target.value).toLowerCase())) {
			setEmailError('Некоректный email');
		} else {
			setEmailError('');
		}
	};

	return (
		<>
			<form action='#' className='form'>
				<input
					type='text'
					name='firstName'
					onBlur={(event) => blurHandler(event)}
					placeholder={'Как тебя зовут?'}
					className='input_text'
					autoComplete='off'
					onChange={(event) => firstNameHandler(event)}
					value={firstName}
				/>
				{firstNameDirty && firstNameError && (
					<span className='input_error'>{firstNameError}</span>
				)}
				<input
					type='text'
					name='email'
					autoComplete='off'
					onBlur={(event) => blurHandler(event)}
					placeholder={'Твой e-mail'}
					className='input_text'
					onChange={(event) => emailHandler(event)}
					value={email}
				/>
				{emailDirty && emailError && (
					<span className='input_error'>{emailError}</span>
				)}
				<DragAndDrop />
				<MyButton
					type={'submit'}
					disabled={!formValid}
					style={{
						width: 192,
						height: 59,
						background: '#F8F200',
						color: 'black',
						marginBottom: 15,
					}}
				>
					Отправить
				</MyButton>
				<label className={'check'}>
					<input
						type={'checkbox'}
						onChange={(event) => dispatch(changeCheckbox(event.target.checked))}
						className={'input_checkbox'}
						checked={checkbox}
					/>
					<span className={'check_box'}></span>
					Согласен на обработку персональных данных
				</label>
			</form>
		</>
	);
};

export default Form;
