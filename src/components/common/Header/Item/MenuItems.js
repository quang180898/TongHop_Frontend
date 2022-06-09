import { PAGES_URL } from "contant";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandAction } from "store/actions";

const MenuItems = () => {
    const dispatch = useDispatch();

    const [state, setState] = React.useState();

    const store = useSelector((state) => state);
    const { listBrand } = store.brandReducer;

    React.useEffect(() => {
        dispatch(brandAction.getListBrand());
    }, []);

    React.useEffect(() => {
        if (listBrand) {
            let detail = [].concat(listBrand.detail);
            if (listBrand.success) {
                detail.push({brand_id: null, brand_name: "Tất cả SP"})
                setState(detail);
            }
        }
    }, [listBrand]);

    return (
        state?.length > 0 &&
        state.map((items, index) => {
            return (
                <li
                    className="horizontal-list__item"
                    key={index}
                >
                    <a href={items.brand_id != null ? PAGES_URL.collection.url + "/" + items.brand_id : PAGES_URL.collection.url} className="item-link">
                        {items.brand_name}
                        <span className="line-bottom">{items.brand_name}</span>
                    </a>
                </li>
            );
        })
    );
};

export default MenuItems;
