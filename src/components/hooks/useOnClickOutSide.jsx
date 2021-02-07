import React from 'react';

function useOnClickOutside(
    ref,
    callback
) {
    const handleClickOutside = React.useCallback(
        (e) => {
            if (!ref.current || ref.current.contains(e.target))
                return;

            callback();
        },
        [ref, callback]
    );
    React.useEffect(() => {
        window.document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.document.removeEventListener(
                'mousedown',
                handleClickOutside
            );
        };
    }, [handleClickOutside]);
    return [];
}
export default useOnClickOutside;
