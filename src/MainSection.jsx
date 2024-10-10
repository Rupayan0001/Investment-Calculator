import { React, useRef, useState, useEffect } from 'react'
import Chart from 'chart.js/auto';


const MainSection = () => {
    const [old, setOld] = useState(false)
    const [array, newArray] = useState([])
    const initial_investment = useRef()
    const annual_investment = useRef()
    const roi = useRef()
    const duration = useRef()
    const chartRef = useRef()
    // let arr = []

    function handleClick() {
        let arr = [];
        const iValue = parseFloat(initial_investment.current.value);
        const aInvestment = parseFloat(annual_investment.current.value);
        const ROI = parseFloat(roi.current.value);
        const Duration = parseInt(duration.current.value);

        if (iValue && aInvestment && ROI && Duration) {
            let totalInvestment = iValue;
            let inv = iValue;
            let totalInterest = 0;
            let investmentValue = 0;
            // let totalInterest = 0;
            for (let i = 1; i <= Duration; i++) {
                let obj = {};
                obj.year = i;
                obj.invested = inv.toFixed(2);
                obj.totalInvestment = totalInvestment.toFixed(2);
                let interest = totalInvestment * (ROI / 100);
                obj.interest = interest.toFixed(2);
                totalInterest += interest;
                obj.totalInterest = totalInterest.toFixed(2);
                investmentValue = totalInvestment + totalInterest;
                obj.investmentValue = investmentValue.toFixed(2);
                arr.push(obj)
                inv = aInvestment;
                totalInvestment += aInvestment;

            }
            console.log(arr);
            setOld(true);
            newArray(arr);

            initial_investment.current.value = "";
            annual_investment.current.value = "";
            roi.current.value = "";
            duration.current.value = "";
        } else {
            alert("Please fill all the fields");
        }
    }

    // useEffect(() => {
    //     if (old && array.length > 0 && chartRef.current) {
    //         const investedAmountData = array.map(item => item.invested);
    //         const totalInterestData = array.map(item => item.totalInterest);

    //         const ctx = chartRef.current.getContext('2d');
    //         new Chart(ctx, {
    //             type: 'pie',
    //             data: {
    //                 labels: ['Invested Amount', 'Total Interest'],
    //                 datasets: [{
    //                     label: 'Investment Breakdown',
    //                     data: [investedAmountData, totalInterestData],
    //                     backgroundColor: [
    //                         'rgba(255, 99, 132, 0.5)',
    //                         'rgba(54, 162, 235, 0.5)'
    //                     ],
    //                     borderColor: [
    //                         'rgba(255, 99, 132, 1)',
    //                         'rgba(54, 162, 235, 1)'
    //                     ],
    //                     borderWidth: 1
    //                 }]
    //             },
    //             options: {
    //                 responsive: true,
    //                 maintainAspectRatio: false
    //             }
    //         });
    //     }
    // }, [old, array])

    return (
        <>
            <div className="center">
                <div className="content">
                    <div className="first">
                        <div className="first_initial">
                            <label htmlFor="initial_investment">Initial investment</label>
                            <input type="number" ref={initial_investment} placeholder='Initial investment' className='initial_investment' />

                        </div>
                        <div className="first_annual">
                            <label htmlFor="annual_investment">Annual investment</label>
                            <input type="number" ref={annual_investment} placeholder='Annual investment' className='annual_investment' />

                        </div>
                    </div>
                    <div className="first">
                        <div className="first_initial">
                            <label htmlFor="roi">Return on Investment</label>
                            <input type="number" ref={roi} placeholder='Return on Investment' className='roi' />

                        </div>
                        <div className="first_annual">
                            <label htmlFor="duration">Duration (Years)</label>
                            <input type="number" ref={duration} placeholder='Duration' className='duration' />

                        </div>
                    </div>
                    <div className="but">
                        <button className="calculate" onClick={handleClick}>Calculate</button>
                    </div>
                </div>
            </div>

            {old && <div className="center">
                <div className="info">
                    <div className="year">
                        <h2>Year</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.year}</p>)}
                        </div>
                    </div>
                    <div className="invested_amount">
                        <h2>Invested Amount</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.invested}</p>)}
                        </div>
                    </div>
                    <div className="total_invested">
                        <h2>Total Investment</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.totalInvestment}</p>)}
                        </div>
                    </div>
                    <div className="interest">
                        <h2>Interest</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.interest}</p>)}
                        </div>
                    </div>
                    <div className="total_interest">
                        <h2>Total Interest</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.totalInterest}</p>)}
                        </div>
                    </div>
                    <div className="investment_Value">
                        <h2>Investment Value</h2>
                        <div className="rest">
                            {old && array.map((e, i) => <p key={i}>{e.investmentValue}</p>)}
                        </div>
                    </div>
                </div>
            </div>}
            {/* <canvas ref={chartRef} width="40px" height="40px"></canvas> */}
        </>
    )
}

export default MainSection
