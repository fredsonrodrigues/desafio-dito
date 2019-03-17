import React, { Component } from 'react'
import { connect } from "react-redux";
import { getAutocomplete } from "../Actions";
import Autocomplete from 'react-autocomplete'

class AutocompleteComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            autocomplete: this.props.autocomplete,
            selectItem: ''
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ autocomplete: props.autocomplete });
    }
    
    changeAndSearch = (value) => {
        if (value.length >= 2) {
            this.props.getAutocomplete(value)
        }
        this.setState({ value: value })
    }

    render() {
        return (
            <div className="container has-text-centered">
                <h1 className="title">
                    <strong>Autocomplete</strong>
                </h1>

                <div className="dropdown">
                    <div className="dropdown-trigger">
                        <Autocomplete
                            getItemValue={(item) => item}
                            items={
                                this.state.autocomplete.length === 0 ?
                                ['Nada encontrado'] :
                                this.state.autocomplete}
                            renderItem={(item, isHighlighted) =>
                                <div key={item} style={{ background: isHighlighted ? 'lightgray' : 'white' , color : 'black'}}>
                                    {item}
                                </div>
                            }
                            value={this.state.value}
                            onChange={(e) => this.changeAndSearch(e.target.value)}
                            onSelect={(val) => this.setState({ value: val, selectItem: `Voce escolheu o evento: ${val}`})}
                            inputProps={{ className: 'input is-large',  placeholder: 'Procure um evento'}}
                        />
                    </div>
                </div>
                <p>
                    <strong>{this.state.selectItem}</strong>
                </p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    autocomplete: state.appState.autocomplete
});

const conAutocomplete = connect(
    mapStateToProps,
    { getAutocomplete }
)(AutocompleteComponent);

export { conAutocomplete };