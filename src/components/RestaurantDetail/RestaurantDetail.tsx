import React from 'react';
import './restaurantDetail.scss';

export const RestaurantDetail = (props: any) => {
	const { item } = props.location.state;
	console.log(item);
	return (
		<div className={'restaurant-detail'}>
			<h1 className={'title'}>Restaurant Details</h1>
			<div className={'content'}>
				<h2 className={'content-title'}>{item.name}</h2>
				<dl>
					<dt>Attire:</dt>
					<dd>{item.attire}</dd>
					<dt>Hours:</dt>
					<dd>{item.hours}</dd>
					<dt>Phone:</dt>
					<dd>{item.telephone}</dd>
					<dt>Website:</dt>
					<dd>{item.website}</dd>
					<dt>Genres:</dt>
					<dd>{item.genre.toString()}</dd>
				</dl>
				<address className={'content-address'}>
					<span className={'content-address-title'}>Address:</span>
					<p>{item.address1}</p>
					<p>
						{item.city}, {item.state}
					</p>
					<p>{item.zip}</p>
				</address>
			</div>
		</div>
	);
};
