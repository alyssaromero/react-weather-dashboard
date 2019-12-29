import React from 'react'
import Header from './Header.js'
import Time from './Time.js'
import Card from './Card'
import Greeting from './Greeting'
import Location from './Location'

function App() {

    return (
        <div className="dashboard">
            <Header />
            <div className="greeting-section">
                <Location />
                <Greeting />
                <Time />
            </div>
            <div className="card-section d-flex">
                <div className="current-section d-flex">
                    <Card index="0"/>
                </div>
                <div className="future-section d-flex">
                    <Card index="1" />
                    <Card index="2" />
                    <Card index="3" />
                    <Card index="4" />
                    <Card index="5" />
                </div>
            </div>
        </div>
    )
}

export default App
