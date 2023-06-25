import React, { useEffect, useState } from 'react';
import classes from './MyInput.module.css';

const MyInput = ({ ...props }) => {
	const [selectedFiles, setSelectedFiles] = useState(null);
	const [drag, setDrag] = useState(false);

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
		setSelectedFiles(...event.dataTransfer.files);
		setDrag(false);
	}

	function handleSub(event) {
		event.preventDefault();
		setSelectedFiles(event.target.files[0]);
	}

	useEffect(() => {}, [selectedFiles]);

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
					<input type={'file'} onChange={handleSub} {...props} />
					<p>Отпустите файл, что бы загрузить</p>
				</label>
			) : selectedFiles !== null ? (
				<label
					className={classes.dragAndDrop}
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input type={'file'} onChange={handleSub} {...props} />
					<span>{selectedFiles.name}</span>
				</label>
			) : (
				<label
					className={classes.dragAndDrop}
					onDragStart={(event) => dragStartHandler(event)}
					onDragLeave={(event) => dragLeaveHandler(event)}
					onDragOver={(event) => dragStartHandler(event)}
				>
					<input type={'file'} onChange={handleSub} {...props} />
					<h5>Прикрепите скриншот</h5>
					<p>.png/ .jpg/ .pdf</p>
				</label>
			)}
		</>
	);
};

export default MyInput;
