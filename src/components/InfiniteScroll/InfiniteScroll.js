import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = ({ childRef, scrollOffset, onScroll, children }) => {
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const windowScrollY = window.scrollY;
            const childScrollY = childRef.current.offsetHeight;

            const shouldLoad = windowHeight + windowScrollY >= (childScrollY - scrollOffset);
            if (shouldLoad) onScroll();
        };

        window.addEventListener('scroll', handleScroll, false);

        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        };
    }, [childRef, scrollOffset, onScroll]);

    return (
        <>
            {children}
        </>
    );
};

InfiniteScroll.propTypes = {
    childRef: PropTypes.object.isRequired,
    scrollOffset: PropTypes.number.isRequired,
    onScroll: PropTypes.func.isRequired
};

export default InfiniteScroll;