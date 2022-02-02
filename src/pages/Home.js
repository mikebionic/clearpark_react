import React, { useState } from 'react'

import { Modal } from '../components/Modal/Modal';
import Nav from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';

const Home = () => {

	const [showModal, setShowModal] = useState(false);
	const [modalUserInfo, setModalUserInfo] = useState({})

	const exampleInfoList = [
		{
			"id": 1,
			"name": "Plan Planyyew",
			"description": "WebDeveloper",
			"balance": 199.30,
		},
		{
			"id": 2,
			"name": "Jemal Planyyewa",
			"description": "Backend Developer",
			"balance": 9098.50,
		},
		{
			"id": 1,
			"name": "Plan Planyyew",
			"description": "WebDeveloper",
			"balance": 199.30,
		},
		{
			"id": 2,
			"name": "Jemal Planyyewa",
			"description": "Backend Developer",
			"balance": 9098.50,
		},
		{
			"id": 1,
			"name": "Plan Planyyew",
			"description": "WebDeveloper",
			"balance": 199.30,
		},
		{
			"id": 2,
			"name": "Jemal Planyyewa",
			"description": "Backend Developer",
			"balance": 9098.50,
		}
	]
	return (
		<div>
			<Nav />

			{/* <Modal showModal={showModal} setShowModal={setShowModal} userInfo={modalUserInfo} /> */}

			<div className="grid grid-cols-2 gap-2 grid-row-auto h-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{exampleInfoList.map((user) => {
					return (
						<div onClick={() => setModalUserInfo(user)}>
							<Card key={user.id}
							
							setShowModal={setShowModal}
							userInfo={user}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Home
