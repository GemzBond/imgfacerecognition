import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageURL, box }) => {
	console.log("BOXXXXXXX", box);
	return (
		<div className='center'>
			<div className='absolute mt2'>
				<img id='imageinput' alt='' src={imageURL} width='500px' height='auto' />
				<div
					className='boundingBox'
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol
					}}>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;
