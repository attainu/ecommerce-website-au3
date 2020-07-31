import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-4"
            style={{ maxHeight: "120px", maxWidth: "120px" }}
        />
    </div>
);

export default ShowImage;
