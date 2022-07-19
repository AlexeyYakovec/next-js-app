import React, {useEffect, useState} from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

// layout
import {Layout} from '../layout/Layout'

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<Layout>
			<Htag tag='h1'>Title</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='right' >Кнопка</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</Layout>
	);
}
