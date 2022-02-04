import React, { useState, useEffect } from 'react';
import Nav from '../components/Navbar/Navbar';
import ClientsTable from '../components/ClientsTable'

import { fetchRpAccs } from '../services'

function ClientsTablePage() {

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

	return (
		<div>
			<Nav />
			<div>
				<ClientsTable data={data} />
			</div>
		</div>
	)
}

export default ClientsTablePage
