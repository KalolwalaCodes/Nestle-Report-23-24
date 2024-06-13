import React from 'react';

const StaticExcelData = () => {
    const dataToFeedInExcel = [
        ['Operating Profit Margin (%) (Profit From Operations / Sale of Products)', '22.0', '20.0'],
        ['Net Profit Margin (%) (Profit After Tax / Sale of Products)', '16.2', '14.2'],
        ['Return on Net Worth (%) (Profit After Tax / Average Equity)', '108.5', '108.5'],
        ['Current Ratio (Current Assets / Current liabilities)', '0.9', '1.1'],
        ['Inventory Turnover Ratio (Sale of Products / Average Inventories)', '9.7', '9.5'],
        ['Debtors Turnover Ratio (Sale of Products / Average Trade Receivables)', '78.9', '93.8']
    ];

    return (
        <div className='table-container-main justify-center'>
            <h1 className='greenish-heading-main'>Key financial ratios</h1>
            <h3>As per the provisions of SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015, the key financial ratios are given below:</h3>
            <div className="flex gap-3">
                <div className='w-1/2'>Particulars</div>
                <div className='w-2/4'>2023-24</div>
                <div className='w-2/4'>2022</div>
            </div>
            {
                dataToFeedInExcel.map((data, index) => (
                    <div className="flex gap-3" key={index}>
                        <div className='w-1/2'>{data[0]}</div>
                        <div className='w-2/4'>{data[1]}</div>
                        <div className='w-2/4'>{data[2]}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default StaticExcelData;
