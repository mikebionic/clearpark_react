import React, { useState, useEffect } from 'react'

import Modal from '../components/Modal/Modal';
import Nav from '../components/Navbar/Navbar';
import Card from '../components/Card/Card';
import { fetchRpAccs } from '../services'

const ClientsGridPage = () => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_rp = async() => {
			const response_data = await fetchRpAccs()
			if (response_data){
				setData(response_data)
			}
		}
		fetch_rp();
		setInterval(() => {
			fetch_rp()
		}, 10000);
  }, []);

	const [showModal, setShowModal] = useState(false);
	const [modalUserInfo, setModalUserInfo] = useState({})

	return (
		<div>
			<Nav />

			<Modal showModal={showModal} setShowModal={setShowModal} userInfo={modalUserInfo} />

			<div className="grid grid-cols-2 gap-2 grid-row-auto h-100 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{data.map((user, idx) => {
					return (
						<div key={idx}
							onClick={() => setModalUserInfo(user)}>
							<Card
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

export default ClientsGridPage
