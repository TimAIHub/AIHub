"use client"

import React, { useState, useRef } from "react";

// https://x.com/davidm_ml/status/1839273432644473290

function SideBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const hanldeExpand = () => {
        setIsCollapsed(prevState => !prevState);
    }

    // 使用 useRef 来存储上一个事件目标
    const prevTargetRef = useRef(null);
    const [activeElement, setActiveElement] = useState(null);

    const handleLinkClick = (event) => {
        const currentTarget = event.target;

        if (prevTargetRef.current && prevTargetRef.current !== currentTarget) {
            prevTargetRef.current.classList.remove('active', 'main-item--open');
        }

        // if (currentTarget.classList.contains('active')) {
        //     currentTarget.classList.remove('active', 'main-item--open');
        // } else {
        //     currentTarget.classList.add('active', 'main-item--open');
        // }
        currentTarget.classList.add('active', 'main-item--open');

        prevTargetRef.current = currentTarget;
        setActiveElement(currentTarget);
    };

    return (
        <nav className={isCollapsed ? "sidebar collapsed" : "sidebar"}>
            <div className="sidebar-top-wrapper">
                <div className="sidebar-top">
                    <a className="logo__wrapper" href="#">
                        <img alt="Crestline Bank Logo" className="logo-small" src="favicon.ico"/>
                        <span className="hide company-name"> Crestline Bank </span>
                    </a>
                </div>
                <button 
                    className="expand-btn" 
                    type="button"
                    onClick={hanldeExpand}
                >
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" >
                        <path
                        d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="sidebar-links-wrapper">
                <div className="sidebar-links">
                <ul>
                    <li>
                        <a href="#dashboard" title="Dashboard"  onClick={handleLinkClick}>
                            <svg
                            className="icon icon-tabler icons-tabler-filled icon-tabler-layout-dashboard"
                            fill="currentColor"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                            <path d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2zm10 -4a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2zm0 -8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
                            </svg>
                            <span className="link hide"> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a className="tooltip main-item" href="#bank-accounts" title="Bank Accounts" onClick={handleLinkClick}>
                            <svg
                            className="icon icon-tabler icons-tabler-outline icon-tabler-building-bank"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M3 21l18 0" />
                                <path d="M3 10l18 0" />
                                <path d="M5 6l7 -3l7 3" />
                                <path d="M4 10l0 11" />
                                <path d="M20 10l0 11" />
                                <path d="M8 14l0 3" />
                                <path d="M12 14l0 3" />
                                <path d="M16 14l0 3" />
                            </svg>
                            <span className="link hide"> Bank Accounts </span>
                            <svg
                            className="hide expand-icon"
                            fill="none"
                            height="44"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="44"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                        </a>
                        <ul className="hide">
                            <li>
                                <a href="#income" title="Income" > Income </a>
                            </li>
                            <li>
                                <a href="#expenses" title="Expense"> Expenses </a>
                            </li>
                            <li>
                                <a href="#statements" title="Statements" > Statements</a>
                            </li>
                            <li>
                                <a href="#payouts" title="Payouts" > Payouts </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="tooltip main-item" href="#transfers" title="Transfers" onClick={handleLinkClick}>
                            <svg
                            className="icon icon-tabler icons-tabler-outline icon-tabler-repeat"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
                                <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
                            </svg>
                                <span className="link hide"> Transfers </span>
                            <svg
                            className="hide expand-icon"
                            fill="none"
                            height="44"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="44"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                        </a>
                        <ul className="hide">
                            <li>
                                <a href="#incoming" title="Incoming"> Incoming</a>
                            </li>
                            <li>
                                <a href="#outgoing" title="Outgoing"> Outgoing</a>
                            </li>
                            <li>
                                <a href="#pending" title="Pending" >Pending </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a className="tooltip main-item" href="#reports" title="Reports" onClick={handleLinkClick}>
                            <svg
                            className="icon icon-tabler icons-tabler-outline icon-tabler-file-analytics"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M9 17l0 -5" />
                                <path d="M12 17l0 -1" />
                                <path d="M15 17l0 -3" />
                            </svg>
                            <span className="link hide"> Reports </span>
                            <svg
                            className="hide expand-icon"
                            fill="none"
                            height="44"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="44"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M9 6l6 6l-6 6" />
                            </svg>
                        </a>
                        <ul className="hide">
                            <li>
                                <a href="#portfolio" title="Portfolio"> Portfolio </a>
                            </li>
                            <li>
                                <a href="#transactions" title="Transactions" > Transactions</a>
                            </li>
                            <li>
                                <a href="#performance" title="Performance" >Performance </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#wallets" title="Wallets">
                            <svg
                            className="icon icon-tabler icons-tabler-outline icon-tabler-wallet"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                            />
                            <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                            <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                            <span className="link hide">
                            Wallets
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="#statistics" title="Statistics">
                            <svg
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chart-pie"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                                <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
                                <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
                            </svg>
                            <span className="link hide"> Statistics </span>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="sidebar__profile">
                <div className="avatar__wrapper">
                    <img alt="Joe Doe Picture" className="avatar" src="favicon.ico" />
                    <div className="online__status" />
                </div>
                <div className="avatar__name hide felx">
                    <div className="user-name"> Natalia Bartošová </div>
                    <div className="email"> @natalia_bartosova </div>
                </div>
                <svg
                className={isCollapsed ? "logout collapsed hidden" : "logout"}
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M9 12h12l-3 -3" />
                    <path d="M18 15l3 -3" />
                </svg>
            </div>
        </nav>
    );
}

export default SideBar;