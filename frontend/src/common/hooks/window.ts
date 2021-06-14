import { useEffect, useState } from 'react';

function getWindowDimensions(): { width: number; height: number } {
	if (typeof window !== `undefined`) {
		const { innerWidth: width, innerHeight: height } = window;

		return {
			width,
			height
		};
	}
}

export function useWindowDimensions(): {
	width: number;
	height: number;
} {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		if (typeof window !== `undefined`) {
			window.addEventListener('resize', handleResize);
			return () => window.removeEventListener('resize', handleResize);
		}
	}, []);

	return windowDimensions;
}
