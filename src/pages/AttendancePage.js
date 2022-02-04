import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { fetchOrders } from '../services'

const AttendancePage = ({history}) => {

	const [data, setData] = useState([])

	useEffect(() => {
		const fetch_logs = async () => {
			try {
				const attendance_data = await fetchOrders()
				const json_data = await attendance_data.json()
				setData(json_data.data)
			} catch (e){
				console.log(e)
			}
		}
		fetch_logs();
		const fetch_interval = setInterval(() => {
			fetch_logs()
		}, 10000);

		return () => {
			clearInterval(fetch_interval);
		}	
	}, [setData, history])

	return (
		<>
			<h4>Attendance</h4>
			<ul className="list-group">
				{(data.map((attendace) => 
					<li key={attendace.AttId} >
						{`${attendace.AttDate} | Rp_acc id: ${attendace.RpAccId}`}
						{/* <span className="badge bg-secondary rounded-pill">{attendace.name}</span>
						<span className="badge bg-success rounded-pill">{attendace.access_type}</span> */}
					</li>
				))}
			</ul>
		</>
	)
}

export default withRouter(AttendancePage)