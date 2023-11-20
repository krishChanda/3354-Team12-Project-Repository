import PropTypes from "prop-types";

PostLink.PropTypes = {
    url: PropTypes.string,
};

export async function GetProduct(){
    return fetch("http://localhost:8080/api/links", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.log("Error: ", error);
            return {};
        });
    
};

export async function PostLink(PostLinkProps) {
    const ProductLink = {
        link: PostLinkProps.url,
    };

    return fetch("http://localhost:8080/api/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
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
