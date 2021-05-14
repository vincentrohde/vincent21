import React, {ComponentProps, useState, useEffect, useRef} from 'react';
import classNames from 'classnames';
import styles from './ScrollItem.module.scss';

export const visibilityStates = ['full', 'entering', 'leaving', 'hidden'];

export type animationFunction = (newVisibillity: string, isScrollingDown: boolean) => void;

interface Props extends ComponentProps<any> {
    customAnimationCallback?: animationFunction;
}

const ScrollItem = ({customAnimationCallback, children, className}: Props) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    let visibillity: string;
    let windowHeight: number;
    let itemHeight: number;
    let isScrollingDown: boolean;
    let itemPosition: number;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let setVisibillityState = () => {};

    const getHeight = () => {
        if (ref.current) {
            return ref.current.clientHeight;
        }
    };

    const setHeight = () => {
        const newHeight = getHeight();
        if (newHeight) {
            itemHeight = newHeight;
        }
    };

    const setIsScrollingDown = (newPosition: number, oldPosition: number) => {
        isScrollingDown = newPosition < oldPosition;
    };

    const getPosition = () => {
        if (ref.current) {
            return ref.current.getBoundingClientRect().top;
        }
    };

    const setPosition = () => {
        const newPosition = getPosition();

        if (newPosition) {
            setIsScrollingDown(newPosition, itemPosition);

            if (newPosition !== itemPosition) {
                itemPosition = newPosition;
            }
        }
    };

    const getWindowHeight = () => {
        return window.innerHeight;
    };

    const setWindowDimensions = () => {
        windowHeight = getWindowHeight();
    };

    const setDimensions = () => {
        setHeight();
        setWindowDimensions();
    };

    const getIsVisibleFull = () => {
        return itemPosition >= 0 && itemPosition + itemHeight <= windowHeight;
    };

    const getIsEntering = () => {
        return itemPosition < windowHeight && itemPosition + itemHeight > windowHeight;
    };

    const getIsLeaving = () => {
        return itemPosition < 0 && itemPosition + itemHeight > 0;
    };

    const handleResize = () => {
        setDimensions();
    };

    const handleScroll = () => {
        setPosition();
        setVisibillityState();
    };

    const addScrollListener = () => {
        window.addEventListener('scroll', handleScroll);
    };

    const removeScrollListener = () => {
        window.removeEventListener('scroll', handleScroll);
    };

    const addResizeListener = () => {
        window.addEventListener('resize', handleResize);
    };

    const removeResizeListener = () => {
        window.removeEventListener('resize', handleResize);
    };

    const addEventListeners = () => {
        addScrollListener();
        addResizeListener();
    };

    const removeEventListeners = () => {
        removeScrollListener();
        removeResizeListener();
    };

    const animationCallback = (newVisibillity: string, isScrollingDown: boolean) => {
        const needsAnimation = newVisibillity === 'entering' && isScrollingDown === true;

        if (needsAnimation && !isAnimationTriggered) {
            setIsAnimationTriggered(true);
            removeEventListeners();
        }
    };

    const handleAnimationCallback = () => {
        if (typeof customAnimationCallback === 'function') {
            customAnimationCallback(visibillity, isScrollingDown);
        } else {
            animationCallback(visibillity, isScrollingDown);
        }
    };

    setVisibillityState = () => {
        let newVisibillity;

        const isVisibleFull = getIsVisibleFull();
        const isEntering = getIsEntering();
        const isLeaving = getIsLeaving();

        if (isVisibleFull) {
            newVisibillity = visibilityStates[0];
        } else if (isEntering) {
            newVisibillity = visibilityStates[1];
        } else if (isLeaving) {
            newVisibillity = visibilityStates[2];
        } else {
            newVisibillity = visibilityStates[3];
        }

        if (newVisibillity !== visibillity) {
            visibillity = newVisibillity;
            handleAnimationCallback();
        }
    };

    useEffect(() => {
        if (!isInitialized) {
            setIsInitialized(true);

            setDimensions();
            addEventListeners();
        }

        return () => {
            removeEventListeners();
        };
    }, []);
    return (
        <div
            className={classNames(
                styles.ScrollItem,
                {[styles.comeIn]: isAnimationTriggered},
                className,
            )}
            ref={ref}
        >
            {children && children}
        </div>
    );
};

export default ScrollItem;
