import { CARD_EQUAL } from "contant";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ButtonBase } from "components/base/Button";
import { useHistory } from "react-router-dom";
import { accountAction, orderAction } from "store/actions";
import { Avatar, Information } from "./item";

const ProfileUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { AccountId } = useParams();

    const [profileData, setProfileData] = useState();
    const [disableUpdate, setDisableUpdate] = useState(true);

    const store = useSelector((state) => state.accountReducer);
    const { detailAccount } = store;

    useEffect(() => {
        dispatch(accountAction.getDetailAccount({ user_id: AccountId}));
        dispatch(orderAction.getHistoryOrder({customer_id: AccountId}))
    }, []);

    useEffect(() => {
        if (detailAccount) {
            let detail = detailAccount.detail;
            if (detailAccount.success) {
                setProfileData(detail);
            }
            dispatch(accountAction.clearData());
        }
    }, [detailAccount]);

    return (
        <>
            <div className="profile">
                <div className="row">
                    <div
                        className={`col-lg-3 col-md-12 col-sm-12 ${CARD_EQUAL}`}
                    >
                        <Avatar data={profileData} />
                    </div>
                    <div
                        className={`col-lg-9 col-md-12 col-sm-12 ${CARD_EQUAL}`}
                    >
                        <Information
                            data={profileData}
                            disabled={disableUpdate}
                            setDisabled={setDisableUpdate}
                        />
                    </div>
                </div>
            </div>
            <div class="text-right mt-3">
                <ButtonBase
                    className="btn-white"
                    label="Trở về"
                    onClick={() => history.goBack()}
                    style={{ minWidth: "190px" }}
                />
            </div>
        </>
    );
};

export default ProfileUser;
