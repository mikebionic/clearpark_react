import React, { useState } from 'react'
import UserName from '../UserName/UserName';
import { Modal } from '../Modal/Modal';
import Avatar from '../Avatar/Avatar';
function Cards() {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(prev => !prev);
	};
	return (
		<div>
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<div onClick={openModal} className="w-60 md:w-4/5 m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<Avatar />
					<UserName />
				</div>
				<div onClick={openModal} className="w-60 md:w-4/5 m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<Avatar />
					<UserName />
				</div>
				<div onClick={openModal} className="w-60 md:w-4/5 m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<Avatar />
					<UserName />
				</div>
				<div onClick={openModal} className="w-60 md:w-4/5 m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<Avatar />
					<UserName />
				</div>
				<div onClick={openModal} className="w-60 md:w-4/5 m-3 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
					<Avatar />
					<UserName />
				</div>
				
			</div>

		</div>
	)
}

export default Cards
