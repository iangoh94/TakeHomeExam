import * as React from 'react';
import { Grid } from 'antd';
import { isBrowser } from '../utils';

const { useBreakpoint } = Grid;
const { useState, useEffect } = React;

interface IUseViewport {
	isMobile: boolean;
	isMobileStatic: boolean;
	isWeb: boolean;
	xs: boolean;
	sm: boolean;
	md: boolean;
	lg: boolean;
	xl: boolean;
	xxl: boolean;
}

/**
 * This variable determines the browser's navigator, from which, we can determine
 * if we should initialise the boolean as true or false.
 *
 * This is helpful as we dont need to wait for rendering to set layouts
 */
export const isInitialisedAsMobile = /iPhone|iPad|iPod|Android/i.test(
	isBrowser() ? navigator.userAgent : null
);

/**
 * This hook allows you to keep track of all breakpoints that are consistent with
 * ant design's breakpoint and as well as allows you to check for mobile vp easily
 */
export function useViewport(): IUseViewport {
	const [isMobile, setIsMobile] = useState(isInitialisedAsMobile);
	const isMobileStatic = isInitialisedAsMobile; // Returns the original initialisation (maybe needed for edge cases)

	// We need to initalise the breakpoints as it might be undefined at the initial load of the page
	const {
		xs = isInitialisedAsMobile,
		sm = isInitialisedAsMobile,
		md = !isInitialisedAsMobile,
		lg = !isInitialisedAsMobile,
		xl = !isInitialisedAsMobile,
		xxl = !isInitialisedAsMobile
	} = useBreakpoint();

	const isWeb = !isMobile;

	useEffect(() => {
		if ((xs || sm) && !md) setIsMobile(true);
		else setIsMobile(false);
	}, [xs, sm, md]);

	return { isMobile, isMobileStatic, isWeb, xs, sm, md, lg, xl, xxl };
}
