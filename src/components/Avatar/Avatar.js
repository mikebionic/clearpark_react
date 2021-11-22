
import React, { Fragment } from 'react';

const Avatar = ({imageUrl, name}) => {

	return( 
		<Fragment>
			<div className="flex justify-center	pt-4"> 
				{imageUrl && <img alt="avatar" src={imageUrl} />}
				{imageUrl === undefined && name !== "" &&(
					<div className="w-16 h-16 rounded-2xl bg-purple-500	">
						{/* {name.substring(0,2)} */}
					</div>
				)}
			</div>
		</Fragment>
	)
}
export default Avatar
