import React from 'react';
import {Link} from 'react-router-dom';


class CurrencySidebar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currencies : this.props.currencies
        }

    }

    componentWillReceiveProps(nextProps){
        this.setState({
            currencies : nextProps.currencies
        });
    }

    render(){
        return(
            <div className="currencies col-xs-12 col-sm-12 col-md-3 col-lg-2 ">
                {this.state.currencies.length ? this.state.currencies.map(function(currency){
                    return (
                        <li key={currency.id}>
                            <Link to={'/currency/'+currency.id}
                                  className={this.props.location.pathname === '/currency/'+currency.id ? "active" : ''} >
                                {currency.name}
                            </Link>
                        </li>
                    )
                }.bind(this)) : <div>Loading...</div>}
            </div>
        );
    }
}

export default CurrencySidebar;