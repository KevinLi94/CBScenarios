import React from 'react';
import Collapsible from 'react-collapsible';

export default function DRIP() {
    return ( 
    <>
    <Collapsible trigger="SCENARIO E 1">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Calcium</td>
        <td>0.86</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Albumin</td>
        <td>14</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Adj.Calcium</td>
        <td>1.35</td>
    </tr>
    </table>
    
    <Collapsible trigger="View Additional Resullts">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Calcium Prev</td>
        <td>1.99</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Calcium Post</td>
        <td>1.88</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>K</td>
        <td>{'>10'}</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Albumin Pre</td>
        <td>33</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Trop Pre</td>
        <td>90</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Trop</td>
        <td>96</td>
    </tr>
    <tr>
        <td>04-05-2023</td>
        <td>Trop Post</td>
        <td>253</td>
    </tr>
    </table>
    </Collapsible>
    <Collapsible trigger="Clinical Details">
        Monitoring
    </Collapsible>
    </Collapsible>
    <Collapsible trigger="SCENARIO E 2">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>NA</th>
        <th>K</th>
        <th>Urea</th>
        <th>Creatinine</th>
    </tr>
    <tr>
        <td>21-11-2022</td>
        <td>145</td>
        <td>4.3</td>
        <td>4.6</td>
        <td>37</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>139</td>
        <td>4.9</td>
        <td>3.8</td>
        <td>31</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>127</td>
        <td>2.9</td>
        <td>2.8</td>
        <td>20</td>
    </tr>
    </table>
    
    <Collapsible trigger="View Additional Resullts">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
   
    <tr>
        <td>10-03-2022</td>
        <td>Mg</td>
        <td>0.8</td>
    </tr>
    <tr>
        <td>06-05-2022</td>
        <td>Mg</td>
        <td>0.8</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>Mg</td>
        <td>0.39</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>Glucose</td>
        <td>{'>83.2'}</td>
    </tr>
    </table>
    </Collapsible>
    
    <Collapsible trigger="Clinical Details">
        Monitoring
    </Collapsible>
    </Collapsible>
    <Collapsible trigger="SCENARIO E 3">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>NA</th>
        <th>K</th>
        <th>Urea</th>
        <th>Creatinine</th>
    </tr>
    <tr>
        <td>21-11-2022</td>
        <td>145</td>
        <td>4.3</td>
        <td>4.6</td>
        <td>37</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>130</td>
        <td>4.0</td>
        <td>3.0</td>
        <td>35</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>91</td>
        <td>2.3</td>
        <td>{'<1.8'}</td>
        <td>19</td>
    </tr>
    </table>
    
    <Collapsible trigger="View Additional Resullts">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
   
    <tr>
        <td>10-03-2022</td>
        <td>Mg</td>
        <td>0.8</td>
    </tr>
    <tr>
        <td>06-05-2022</td>
        <td>Mg</td>
        <td>0.8</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>Mg</td>
        <td>0.39</td>
    </tr>
    <tr>
        <td>09-07-2023</td>
        <td>Glucose</td>
        <td>{'>83.2'}</td>
    </tr>
    </table>
    </Collapsible>
    
    <Collapsible trigger="Clinical Details">
        Inpatient; Dehydration
    </Collapsible>
    </Collapsible>
    </>
    )
}