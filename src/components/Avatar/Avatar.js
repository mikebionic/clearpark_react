import { render } from '@headlessui/react/dist/utils/render';
import React, { Fragment } from 'react';
import classes from './avatar.module.css';

const Avatar = ({imageUrl, name}) => {
	render(
		const shorten = this.props.details ? this.props.details.substring(0, 100) : '';
		return<Fragment>
			<div className={classes.container}>
				{imageUrl && <img className={classes.avatarImage} alt="avatar" src={imageUrl} />}
				{imageUrl === undefined && name !== "" &&(
					<div className={classes.avatatext}>
						{/* {name.substring(0,2)} */}
					</div>
				)}
			</div>
		</Fragment>
	)
}
export default Avatar
