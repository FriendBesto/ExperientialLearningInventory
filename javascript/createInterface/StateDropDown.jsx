var StateDropDown = React.createClass({
    getInitialState: function(){
        return ({hasError: false});
    },
    setError: function(status){
        this.setState({hasError: status});
    },
    render: function() {
        var fgClasses = classNames({
                        'form-group': true,
                        'has-error': this.state.hasError
                    });

        var states = this.props.states;

        if(this.props.formStyle === undefined || this.props.formStyle === 'vertical'){
            var output = (
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-md-push-3">
                        <div className={fgClasses} id="state">
                            <label htmlFor="state" className="control-label">State</label>
                            <select id="state" name="state" className="form-control">
                                {this.props.states.map(function (data) {          
                                    return (
                                            <StateList key={data.abbr} ref="state"
                                                       sAbbr={data.abbr}
                                                       stateName={data.full_name}
                                                       active={data.active} />
                                        );
                                    })}
                            </select>
                        </div>
                    </div>
                </div>
            );
        }

        if(this.props.formStyle === 'horizontal'){
            var output = (
                <div class="form-group">
                    <label htmlFor="state" className="col-lg-3 control-label">State</label>
                    <div className="col-lg-8">
                        <select id="state" name="state" className="form-control">
                            {Object.keys(states).map(function(key) {
                                return <option key={key} value={key}>{states[key]}</option>;
                            })}
                        </select>
                    </div>
                </div>
            );
        }

        return output;
    }
});


var StateList = React.createClass({
    // Disables/Enables the state in the dropdown
  render: function() {  
    if (this.props.active == 1){
        var optionSelect = <option value={this.props.sAbbr}>{this.props.stateName}</option>
    } else {
        var optionSelect = <option value={this.props.sAbbr} disabled>{this.props.stateName}</option>
    }
    return (   
        optionSelect
    );
  }
});
