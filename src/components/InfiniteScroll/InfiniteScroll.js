import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteScroll = ({ childRef, scrollOffset, onScroll, shouldScroll, children }) => {
    useEffect(() => {
        const containerElement = childRef.current;

        const handleScroll = () => {
            if (!shouldScroll) return;

            const lastChildElement = containerElement.lastElementChild;
            const lastChildHeight = lastChildElement.offsetHeight;
            const containerVisisbleHeight = containerElement.offsetHeight;
            const containerScrollHeight = containerElement.scrollHeight;
            const containerScrollOffset = containerElement.scrollTop + containerVisisbleHeight;

            const shouldLoad = (containerScrollHeight - containerScrollOffset) <= (lastChildHeight / 2);
            if (shouldLoad) onScroll();
        };

        containerElement.addEventListener('scroll', handleScroll, false);

        return () => {
            containerElement.removeEventListener('scroll', handleScroll, false);
        };
    }, [childRef, scrollOffset, onScroll, shouldScroll]);

    return (
        <>
            {children}
        </>
    );
};

InfiniteScroll.propTypes = {
    childRef: PropTypes.object.isRequired,
    scrollOffset: PropTypes.number.isRequired,
    onScroll: PropTypes.func.isRequired,
    shouldScroll: PropTypes.bool.isRequired
};

export default InfiniteScroll;