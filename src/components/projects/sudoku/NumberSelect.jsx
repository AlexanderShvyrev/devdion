import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NumberSquare from './NumberSquare';

export default class NumberSelect extends Component {
    createNumbers = () => {
        return this.props.numbers.map(function (row,idx) {
            return <NumberSquare
                key={idx}
                id={row.id}
                value={row.value}
                handleSelect={this.props.handleSelect}
                selectedNumber={this.props.selectedNumber}
            />
        }, this)
    }
    render() {
        return (
            <table className="numbers">
                <tbody>
                    <tr>

                        {this.createNumbers()}
                    </tr>
                </tbody>
            </table>
        );
    }
}

NumberSelect.propTypes = {
    handleSelect: PropTypes.func,
    selectedNumber: PropTypes.number
}