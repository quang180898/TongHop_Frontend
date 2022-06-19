import { IMAGE_URL, PAGES_URL } from 'contant'
import { getLocalStore } from 'functions/Utils'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { MENU } from 'router/routesMenu'
import { accountAction } from 'store/actions'
import PopoverDropdown from '../Popover/PopoverDropdown'

const Sidebar = () => {

    const dispatch = useDispatch()

    const user = getLocalStore('admin')

    const [state, setState] = useState(user)

    const [menuChildActive, setMenuChildActive] = useState(null)

    // reducer 
    const store = useSelector(state => state.accountReducer)
    const { detailAccount } = store

    React.useEffect(() => {
        dispatch(accountAction.getDetailAccount({user_id: user.customer_id}))
    }, [])

    React.useEffect(() => {
        if (detailAccount) {
            let detail = detailAccount.detail
            if (detailAccount.success) {
                if (detail.permission_code === "1") {
                    setState(detail)
                    localStorage.setItem("admin", JSON.stringify(detail));
                }
            }
        }
    }, [detailAccount])


    const openMenuChild = (active, position) => {
        setMenuChildActive(position)
    }

    const ChildNavLink = ({ icon, link, label }) => {
        return (
            <NavLink to={link} className="sidebar-link">
                <i className={icon} />
                <span className="hide-menu">{label}</span>
            </NavLink>
        )
    }

    return (
        <aside className="left-sidebar">
            {/* profile  */}
            <div className="user-profile">
                <div className="avartar">
                    <div className="dropdown sub-dropdown">
                        <div className="profile-pic rounded-circle position-relative" type="button"
                           >
                            <img className="profile-pic rounded-circle position-relative" src={`data:image/jpeg;base64, ${state?.image_bytes}`}/>
                            <span className="badge rounded-circle badge-success profile-dd text-center ">
                                <i className="las la-check text-white" style={{ fontSize: '9px' }}></i>
                            </span>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item">
                                <i className="fa fa-circle " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile">
                    <p className="name" style={{ fontFamily: '"Open Sans", sans-serif !important', fontWeight: 600 }}>{state?.name}</p>
                    <p className="position"></p>
                    <div className="actions">
                        <div className="item dropdown">
                            <div className="actions_item" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icon las la-bell" />
                                <i className="badge-noti" id="user_count_notifications">9+</i>
                            </div>
                            <div className="dropdown-menu mailbox" style={{ transform: 'translate3d(20px, 60px, 0px) !important' }}>
                                <ul className="list-style-none">
                                    <li>
                                        <div className="drop-title">
                                            <h5 className="title uni_text_6d30ab ml-2">New Messages</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="all_messages">
                                            <strong className="uni_text_6d30ab">View All</strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="item dropdown">
                            <PopoverDropdown
                                placement='bottomLeft'
                                overlayClassName="setting-profile--popover"
                                children={
                                    <div className="actions_item cursor-pointer">
                                        <i className="icon las la-cog" />
                                    </div>
                                }
                                content={
                                    [
                                        <Link to={PAGES_URL.admin.url} style={{ color: '#6c757d' }}>
                                            <i className="las la-user-alt uni_text_6d30ab mr-2 fs-17" />
                                            Thông tin
                                        </Link>,
                                        <Link to={PAGES_URL.admin.url} style={{ color: '#6c757d' }}>
                                            <i className="las la-exclamation-circle uni_text_6d30ab mr-2 fs-17" />
                                            Thay đổi mật khẩu
                                        </Link>,
                                    ]
                                }
                            />
                        </div>

                        <div className="item dropdown">
                            <div className="actions_item" role="button" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                                <i className="icon lar la-comment-alt" />
                                <i className="badge-noti" id="count_noti">0</i>
                            </div>
                            <div className="dropdown-menu chatbox" x-placement="bottom-start" style={{ position: 'absolute', transform: 'translate3d(30px, 55px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                                <div className="drop-title uni_text_6d30ab">
                                    <h5 className="title uni_text_6d30ab ml-2">New Messages</h5>
                                </div>
                                <ul className="list-style-none" id="popup_chat_notification">
                                </ul>
                                <div className="all_messages">
                                    <Link to={PAGES_URL.admin.url}>
                                        <strong className="uni_text_6d30ab">View All</strong>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* menu  */}
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        {MENU && MENU.map((item, index) => {
                            return (
                                <li className={`sidebar-item ${menuChildActive == index ? 'active' : ''}`} key={index}>
                                    { item.children
                                        ? <div className='sidebar-link has-arrow cursor-pointer'
                                            onClick={() => openMenuChild(!menuChildActive, index)}>
                                            <i className={item.icon} />
                                            <span className="hide-menu">item.label</span>
                                        </div>
                                        : <ChildNavLink icon={item.icon} link={item.link} label={item.label} />
                                    }

                                    {/* children  */}
                                    <ul className="collapse first-level base-level-line">
                                        {item.children && item.children.map((child, childIndex) => {
                                            return (
                                                <li className="sidebar-item" key={childIndex}>
                                                    <ChildNavLink icon={child.icon} link={child.link} label={child.label} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

        </aside>
    )
}

export default Sidebar