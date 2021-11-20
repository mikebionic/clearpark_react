
const server_url = process.env.REACT_APP_SERVER_URL || 'http://127.0.0.1:5000'
const rpAccsPath = process.env.REACT_APP_RP_ACCS_PATH || '/clearpark/rp-accs/'
const attendancesPath = process.env.REACT_APP_ATTENDANCES_PATH || '/clearpark/attendances/'
const devicesPath = process.env.REACT_APP_DEVICES_PATH || '/clearpark/devices/'

export const fetchRpAccs = () => {
	return fetch(`${server_url}${rpAccsPath}`)
}

export const fetchAttendances = () => {
	return fetch(`${server_url}${attendancesPath}`)
}

export const fetchDevices = () => {
	return fetch(`${server_url}${devicesPath}`)
}