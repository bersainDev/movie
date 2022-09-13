import React from 'react';
import { Spin } from 'antd';

import './Loading.scss';

export default function Loading() {
    return (
        <div className="Loading">
            <Spin size="large" />
        </div>
    )
}