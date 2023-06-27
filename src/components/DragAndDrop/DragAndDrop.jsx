import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../../context/IsEmpty';
import '../../global/styles/DragAndDrop.css';
import { formSlice } from '../../store/reducers/Form';

const DragAndDrop = () => {
	const [drag, setDrag] = useState(false);
	const { fileName } = useSelector((state) => state.formReducer);
	const { changeFileName } = formSlice.actions;
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
		dispatch(changeFileName(event.dataTransfer.files[0].name));
		setDrag(false);
	}

	function onInputHandler(event) {
		event.preventDefault();
		dispatch(changeFileName(event.target.files[0].name));
	}

	return (
		<>
			{drag ? (
				<label
					className='drop-area'
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
					onDrop={(event) => onDropHandler(event)}
				>
					<input
						type='file'
						name='drop-area'
						onChange={(event) => {
							onInputHandler(event);
						}}
					/>
					Отпустите файл, что бы загрузить
				</label>
			) : isEmpty(fileName) === false ? (
				<label
					className='drop-area'
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input
						type='file'
						name='drop-area2'
						onChange={(event) => onInputHandler(event)}
					/>
					<span className='not-empty-file'>{fileName}</span>
				</label>
			) : (
				<label
					className='drop-area'
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input
						type='file'
						name='drop-area3'
						onChange={(event) => onInputHandler(event)}
					/>
					<h5 className='drop-area_h5'>Прикрепите скриншот</h5>
					<p className='drop-area_p'>.png/ .jpg/ .pdf</p>
				</label>
			)}
		</>
	);
};

export default DragAndDrop;
