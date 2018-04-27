import React from 'react';

class Currencies extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currency: ''
        };
        this.api_url = 'https://api.coinmarketcap.com/v1/ticker/';

    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.location !== prevProps.location) {
            this.getCurrency(this.api_url + this.props.match.params.id + '/');
        }
    }

    componentDidMount(){
        this.getCurrency(this.api_url + this.props.match.params.id + '/')
    }

    getCurrency(url){
        $.ajax({
            type : 'GET',
            url : url,
            dataType: "json",
            crossDomain: true,
            success : function(response){
                this.setState({
                    currency : response[0]
                })
            }.bind(this)
        })
    }

    render(){
        return(
            <div className="currency col-xs-12 col-sm-12 col-md-9 col-lg-10">
                {
                    this.state.currency ?
                        <div>
                            <h1 className="display-2">
                                {this.state.currency.name}
                            </h1>

                            <dl className="row">
                                <dt className="col-sm-3">Symbol</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.symbol}
                                </dd>
                                <dt className="col-sm-3">Rank</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.rank}
                                </dd>

                                <dt className="col-sm-3">Price USD</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.price_usd}
                                </dd>
                                <dt className="col-sm-3">Price BTC</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.price_btc}
                                </dd>
                                <dt className="col-sm-3">24H Volume USD</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency['24h_volume_usd']}
                                </dd>
                                <dt className="col-sm-3">Market Cap USD</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.market_cap_usd}
                                </dd>
                                <dt className="col-sm-3">Available Supply</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.available_supply}
                                </dd>
                                <dt className="col-sm-3">Total Supply</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.total_supply}
                                </dd>
                                <dt className="col-sm-3">Max Supply</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.max_supply}
                                </dd>
                                <dt className="col-sm-3">Percentage Change 1H</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.percent_change_1h}
                                </dd>
                                <dt className="col-sm-3">Percentage Change 24H</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.percent_change_24h}
                                </dd>
                                <dt className="col-sm-3">Percentage Change 7D</dt>
                                <dd className="col-sm-9">
                                    {this.state.currency.percent_change_7d}
                                </dd>
                            </dl>
                        </div>
                    :
                        <div>Loading Currency</div>
                }
            </div>
        );
    }
}

export default Currencies;