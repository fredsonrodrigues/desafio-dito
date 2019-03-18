import React, { Component } from "react";
import { connect } from "react-redux";
import { getTimeline } from "../Actions";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeline: this.props.timeline
        };
    }

    componentWillReceiveProps(props) {
        console.log(props.timeline);

        this.setState({ timeline: props.timeline });
    }

    componentDidMount = async () => {
        await this.props.getTimeline();
    };

    timeline = () => {
        if (this.state.timeline.length === 0) {
            return (
                <header className="timeline-header">
                    <span className="tag is-medium is-danger">Não há dados para apresentar :(</span>
                </header>
            )
        }
        return (
            <div class="timeline">
                {this.state.timeline.map((el, key) => {
                    var date = new Date(el.timestamp)
                    var odd = key % 2 === 0 ? true : false
                    return (
                        <div className={odd === true ? "container-timeline left" : "container-timeline right"}>
                            <div className="content">
                                <p className="heading">{date.toLocaleString()}</p>
                                <p>Loja: {el.store_name}</p>
                                <p>Valor da Compra: R$ {el.revenue}</p>
                                {el.products.map(e => {
                                    return <p className="heading">- {e.name}: R$ {e.price}</p>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div className="container has-text-centered">
                <h1 className="title">
                    <strong>Timeline</strong>
                </h1>
                {this.timeline()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    timeline: state.appState.timeline
});

const conTimeline = connect(
    mapStateToProps,
    { getTimeline }
)(Timeline);

export { conTimeline };