import React from "react";
import {useLocation, useParams} from "react-router-dom";

export const withRouter = (WrappedComponent) => (props) => {

    const params = useParams();
    const location = useLocation()

    return (

        <WrappedComponent
            {...props}
            userId={params.userId}
            location={location}
        />
    );
}



export const withRouter2 = (WrappedComponent) => (props) => {

    const params = useParams();
    const location = useLocation()
    return (

        <WrappedComponent
            {...props}
            userId={params.userId}
            location={location}

        />
    );
}

