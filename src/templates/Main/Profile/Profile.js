import { getLocalStore } from "functions/Utils";
import React from "react";

const Profile = () => {
    const user = getLocalStore("user");

    return (
        <div className="template-profile">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-header">
                                <div className="profile-logo">
                                    {user.name
                                        .split(" ")
                                        .map((x) => x[0])
                                        .join("")}
                                </div>
                                <span className="acc-name">{user.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-9 col-md-9">haha</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
