import "../stylesheets/data/bind.css"
import React from "react";
import BasicButton from "../components/BasicButton";

export default class ConditionalRendering extends React.Component {

    constructor(props, context) {
        super(props, context);

        const randomValue = Math.floor(Math.random() * 1000);

        this.state = {value: randomValue}
    }

    render() {
        return (
            <div className="Page-Bind">
                <h1 className="Color-React">Bind Test</h1>

                <div className="Input-Box">
                    <p className="Color-React">
                        이번 숫자는 { this.state.value } 입니다.
                    </p>
                    {/* !! 이렇게도 작성할 수 있다 !! */}
                    {/*{(this.state.value >= 500)*/}
                    {/*    ? (<h2>500 이상이라서 표시됩니다.</h2>)*/}
                    {/*    : ''*/}
                    {/*}*/}

                    {/* !! 모든 코드는 같은 동작 !! */}
                    {(() => {
                        if (this.state.value >= 500) {
                            return (<h2 style={ { marginTop: '16px' } }>500 이상이라서 표시됩니다.</h2>)
                        }
                    })()}

                    {/* TODO: 어떻게 써야 깔끔해보일까.. 연구하기 */}
                    <br />
                </div>
                <BasicButton buttonName="Refresh!" onClick={() => {
                    this.setState({value : Math.floor(Math.random() * 1000)})
                }}></BasicButton>
            </div>
        )
    }
}
