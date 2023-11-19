import PropTypes from "prop-types";

PostLink.PropTypes = {
    url: PropTypes.string,
};

export default async function PostLink(PostLinkProps) {

    const ProductLink = {
        url: PostLinkProps.url,
    };

    return fetch("http://localhost:8080/api/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ProductLink),
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
