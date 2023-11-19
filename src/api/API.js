import PropTypes from "prop-types";

PostLink.PropTypes = {
    url: PropTypes.string,
};

export default async function PostLink(PostLinkProps) {
    return fetch("http://localhost:8080/api/links", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(PostLinkProps.url),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log("Error: ", error);
            return {};
        });
}
