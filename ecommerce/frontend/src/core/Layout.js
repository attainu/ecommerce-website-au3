import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    title = "",
    description = "",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <h4>{title}</h4>
            <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
