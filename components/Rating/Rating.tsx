import { useState, useEffect, KeyboardEvent } from 'react';

import { RatingProps } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';
// icon
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	// как должен выглядить компонент
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	
	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	// функция для заполнения стейта
	// currentRating - значение рейтинга, так же можно использовать rating из пропсов
	const constructRating = (currentRating: number) => {
	// updateArray - массив в который мы будем передавать стейт описанный выше [ratingArray, setRatingArray]
		const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.editable]: isEditable,
					})}
					onMouseEnter={()=> changeDisplay(i+1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGAElement>)=> isEditable && handleSpace(i+1, e)}
				/>
				</span>

			);
		});
		setRatingArray(updateArray);
	};

	//
	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};




