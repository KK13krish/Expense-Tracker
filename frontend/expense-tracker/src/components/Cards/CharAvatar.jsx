import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height, style }) => {
    return ( 
    <div
        className={`${width || 'w-13'} ${height || 'h-13'} ${style || ''} flex items-center justify-center rounded-full text-gray-900 font-medium bg-gray-200`}
    >
        {getInitials(fullName || "")}
    </div>
    );
};

export default CharAvatar;