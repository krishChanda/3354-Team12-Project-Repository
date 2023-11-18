import PropTypes from "prop-types";

PostLink.PropTypes = {
    url: PropTypes.string,
}

export default async function PostLink(PostLinkProps) {
  const response = await fetch("http://localhost:5000/api/links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(PostLinkProps.url),
  });
  return response.json();
}