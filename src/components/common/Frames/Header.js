import { Dropdown, Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getLocalStore } from 'functions/Utils'
import { commonAction } from 'store/actions'

const Header = () => {
    const dispatch = useDispatch()
    
    // header 
    const [header, setHeader] = useState({
        isSidebar: false,
        isSidebarMobible: false,
        isHeaderTopBar: false,
    })

    // icon sidebar pc 
    const toggleSidebar = (show) => {
        setHeader({ ...header, isSidebar: show })
        dispatch(commonAction.toggleSidebar(show))
    }

    // icon sidebar mobile 
    const toggleSidebarMobile = (show) => {
        setHeader({ ...header, isSidebarMobible: show })
        dispatch(commonAction.toggleSidebarMobile(show))
    }

    const logout = () => {
        getLocalStore('admin', true)
        window.location.reload()
    }

    return (
        <header className="header__topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">

                <div className="navbar-header">
                    <div className="nav-toggler" onClick={() => toggleSidebarMobile(!header.isSidebarMobible)}>
                        <span className="line line-1" />
                        <span className="line line-2" />
                        <span className="line line-3" />
                    </div>
                    <div className="nav-more" onClick={() => setHeader({ ...header, isHeaderTopBar: !header.isHeaderTopBar })}>
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                    </div>
                    <div className="navbar-brand">
                        <div className="logo">
                            G Shoes
                        </div>
                        <div className="sidebartoggler" onClick={() => toggleSidebar(!header.isSidebar)}>
                            <span className="line line-1" />
                            <span className="line line-2" />
                            <span className="line line-3" />
                        </div>
                    </div>
                    <div className="topbartoggler d-block d-md-none waves-effect waves-light">
                        <i className="ti-more" />
                    </div>
                </div>

                <div className={`navbar-collapse collapse ${header.isHeaderTopBar && 'show'}`}>
                    <span className="text-exchange-rate text-center w-100 d-block d-sm-none">Quản lý G Shoes</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="nav-link log-out">
                                <span onClick={logout} className="arrow cursor-pointer"><i className="la la-sign-out" /> Đăng Xuất </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header