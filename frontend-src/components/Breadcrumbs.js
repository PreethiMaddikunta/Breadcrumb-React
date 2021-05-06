import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import withBreadcrumbs from "react-router-breadcrumbs-hoc";

function Breadcrumbs({breadcrumb}){
return (
    <div className= "breadcrumbs">
    {breadcrumb.map(({breadcrumb, match }, index) => (
    <div className="bc" key={match.url}>
    <Link to={match.url || ""}>{breadcrumb}</Link>
    {index < breadcrumb.length - 1 && ">"}
    </div>
    ))}
</div>
)
}


export default Breadcrumbs


