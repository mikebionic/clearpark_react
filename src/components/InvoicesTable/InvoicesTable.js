import React from 'react'

const InvoicesTable = ({data = []}) => {

	return ( 
		<div >
			<div>
				<div className="mt-2 py-2 align-middle inline-block w-full px-4 py-4">
					<div className="shadow overflow-auto h-100 w-full	border-b border-gray-200 sm:rounded-lg">
						<table className="w-full">
							<thead>
							<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
								<th className="py-3 px-3 text-center w-auto">Ulanyjy</th>
								<th className="py-3 px-3 text-center w-auto">Wagt</th>
								<th className="py-3 px-3 text-center w-auto">Bahasy</th>
								<th className="py-3 px-3 text-center w-auto">Sene</th>
							</tr>
							</thead>
							<tbody className="overflow-auto text-gray-600 text-sm font-light h-100">
								{data.map((invoice, idx) => (
									<tr key={idx}>
										<td className="px-3 py-4 whitespace-nowrap">
											<div className="flex items-center justify-center">
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">{invoice.Rp_acc.RpAccName}</div>
													<div className="text-sm text-gray-500">{invoice.InvFTotal}</div>
												</div>
											</div>
										</td>
										<td className="px-3 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{invoice.Inv_lines[0]["InvLineAmount"]} min.</div>
										</td>
										<td className="px-3 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												{invoice.Rp_acc_trans_total.InvFTotal} TMT
											</span>
										</td>
										<td className="px-3 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{invoice.InvDate}</div>
										</td>
									</tr>
								))}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)

}

export default InvoicesTable
