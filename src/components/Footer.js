import React from "react";

const Footer = ({data:{copyright, author}}) => {

return(
    <footer>
        <p>{copyright} - {author}</p>
    </footer>

)
}
export default Footer