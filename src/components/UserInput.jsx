const UserInput = ({ handleInvestmentChange, investment }) => {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="Initial Investment">Initial Investment</label>
                <input type="number" value={investment.initialInvestment} onChange={() => handleInvestmentChange('initialInvestment', event.target.value)}/>
            </p>
            <p>
                <label htmlFor="Annual Investment">Annual Investment</label>
                <input type="number" value={investment.annualInvestment} onChange={() => handleInvestmentChange('annualInvestment', event.target.value)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="Expected Return">Expected Return</label>
                <input type="number" value={investment.expectedReturn} onChange={() => handleInvestmentChange('expectedReturn', event.target.value)} />
            </p>
            <p>
                <label htmlFor="Duration">Duration</label>
                <input type="number" value={investment.duration} onChange={() => handleInvestmentChange('duration', event.target.value)} />
            </p>
        </div>
    </section>
}

export default UserInput