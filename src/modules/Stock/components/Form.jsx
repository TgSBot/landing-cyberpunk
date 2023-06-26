import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import MyButton from '../../../UI/Button/MyButton';
import MyInput from '../../../UI/input/MyInput';
import DragAndDrop from '../../../UI/DragAndDrop/DragAndDrop';
import '../styles/Form.css';
import { useSelector } from 'react-redux';
import { isEmpty } from '../../../context/EmptyString';

const Form = () => {
	const {
		handleSubmit,
		formState: { errors },
		control,
		setValue,
		reset,
	} = useForm({ mode: 'onSubmit' });
	const { fileName } = useSelector((state) => state.formReducer);

	function onSubmit(data) {
		alert(JSON.stringify(data));
		reset();
	}
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name='firstName'
					control={control}
					rules={{
						required: 'Поле обязательно для заполнения',
						minLength: {
							value: 3,
							message: 'Минимальное колличество символов 3',
						},
					}}
					render={({ field: { onChange, onBlur, value, ref } }) => (
						<MyInput
							placeholder={'Как тебя зовут?'}
							onChangeCapture={onChange}
							onBlur={onBlur}
							selected={value}
							innerRef={ref}
						/>
					)}
				/>
				{errors?.firstName && (
					<span className='error_validation'>
						{errors?.firstName.message || 'Error!'}
					</span>
				)}
				<Controller
					name='email'
					control={control}
					rules={{
						required: 'Поле обязательно для заполнения',
						pattern: /@/,
					}}
					render={({ field: { onChange, onBlur, value, ref } }) => (
						<MyInput
							placeholder={'Как тебя зовут?'}
							onChangeCapture={onChange}
							onBlur={onBlur}
							selected={value}
							innerRef={ref}
						/>
					)}
				/>
				{errors?.email && (
					<span className='error_validation'>
						{errors?.email.message || 'Error!'}
					</span>
				)}
				<Controller
					name='img'
					control={control}
					rules={{
						required: 'Поле обязательно для заполнения',
					}}
					render={({ field: { onChange, onBlur, value, ref } }) => (
						<DragAndDrop
							onChangeCapture={onChange}
							onBlur={onBlur}
							selected={value}
							innerRef={ref}
						/>
					)}
				/>
				{errors?.img && (
					<span className='error_validation'>
						{errors?.img.message || 'Error!'}
					</span>
				)}
				{isEmpty(fileName) === true ? (
					<MyButton
						type='submit'
						disabled={true}
						onClick={() => setValue('img', `${fileName}`)}
						style={{
							background: 'yellow',
							color: 'black',
							height: 59,
							width: 192,
							fontSize: 18,
						}}
					>
						Отправить
					</MyButton>
				) : (
					<MyButton
						type='submit'
						onClick={() => setValue('img', `${fileName}`)}
						style={{
							background: 'yellow',
							color: 'black',
							height: 59,
							width: 192,
							fontSize: 18,
						}}
					>
						Отправить
					</MyButton>
				)}

				<Controller
					name='Confirmation'
					control={control}
					rules={{
						required: true,
					}}
					render={({ field: { onChange, onBlur, value, ref } }) => (
						<MyInput
							type={'checkbox'}
							onChangeCapture={onChange}
							onBlur={onBlur}
							selected={value}
							innerRef={ref}
						/>
					)}
				/>
			</form>
		</>
	);
};

export default Form;
