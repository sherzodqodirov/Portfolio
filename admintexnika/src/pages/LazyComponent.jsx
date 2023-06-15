import React, {lazy} from 'react';

const LazyComponent = (componentName) => {
    const LazyElement = lazy(() => import(`../pages/${componentName}.jsx`))
    return (
        <div>
            
        </div>
    );
};

export default LazyComponent;
