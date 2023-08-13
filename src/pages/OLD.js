import React from 'react';
import Collapsible from 'react-collapsible';

export default function OLD() {
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
    </>
    )
}