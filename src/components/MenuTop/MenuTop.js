import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/img/logo.svg'

import './MenuTop.scss';

export default function MenuTop() {
    return (
        <div className="menu-top">
            <div className="menu-top_logo">
                <Logo />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{lineHeight: "64px"}}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}