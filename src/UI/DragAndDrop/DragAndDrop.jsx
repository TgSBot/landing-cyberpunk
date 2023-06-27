import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../../context/EmptyString';
import { formSlice } from '../../store/reducer/Form';
import classes from './DragAndDrop.module.css';

const DragAndDrop = ({ innerRef, ...props }) => {
	const [drag, setDrag] = useState(false);
	const { fileName } = useSelector((state) => state.formReducer);
	const { setFileName } = formSlice.actions;
	const dispatch = useDispatch();

	function dragStartHandler(event) {
		event.preventDefault();
		setDrag(true);
	}

	function dragLeaveHandler(event) {
		event.preventDefault();
		setDrag(false);
	}

	function onDropHandler(event) {
		event.preventDefault();
		setDrag(false);
		const file = event.dataTransfer.files[0];
		dispatch(setFileName(file.name));
	}

	function handleSub(event) {
		event.preventDefault();
		let file = event.target.files[0];
		dispatch(setFileName(file.name));
	}

	return (
		<>
			{drag ? (
				<label
					className={classes.dragAndDrop}
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
					onDrop={(event) => onDropHandler(event)}
				>
					<p>Отпустите файл, что бы загрузить</p>
				</label>
			) : isEmpty(fileName) === false ? (
				<label
					className={classes.dragAndDrop}
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input type={'file'} onChange={handleSub} ref={innerRef} {...props} />
					<span>{fileName}</span>
				</label>
			) : (
				<label
					className={classes.dragAndDrop}
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input type={'file'} onChange={handleSub} ref={innerRef} {...props} />
					<h5>Прикрепите скриншот</h5>
					<p>.png/ .jpg/ .pdf</p>
				</label>
			)}
		</>
	);
};

export default DragAndDrop;
