import React from 'react';
import Collapsible from 'react-collapsible';
export default function EDTA() {
    return( 
    <>
    <Collapsible trigger="SCENARIO E 1">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>Calcium</td>
        <td>0.91</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>Albumin</td>
        <td>36</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>Adj.Calcium</td>
        <td>1.08</td>
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
        <td>06-12-2022</td>
        <td>Calcium</td>
        <td>2.38</td>
    </tr>
    <tr>
        <td>06-07-2023</td>
        <td>K</td>
        <td>NA; Haemolysed</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>K</td>
        <td>NA; Haemolysed</td>
    </tr>
    <tr>
        <td>06-07-2023</td>
        <td>ALP</td>
        <td>156</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>ALP</td>
        <td>132</td>
    </tr>
    <tr>
        <td>06-07-2023</td>
        <td>Urea</td>
        <td>4.1</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>Urea</td>
        <td>20.1</td>
    </tr>
    <tr>
        <td>06-07-2023</td>
        <td>Creatinine</td>
        <td>35</td>
    </tr>
    <tr>
        <td>07-07-2023</td>
        <td>Creatinine</td>
        <td>265</td>
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
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>ALP</td>
        <td>{"<"}10</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>ALT</td>
        <td>53</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>Bilirubin</td>
        <td>5</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>Albumin</td>
        <td>41</td>
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
        <td>14-11-2021</td>
        <td>ALP</td>
        <td>113</td>
    </tr>
    <tr>
        <td>14-11-2021</td>
        <td>ALT</td>
        <td>75</td>
    </tr>
    <tr>
        <td>14-11-2021</td>
        <td>Bilirubin</td>
        <td>5</td>
    </tr>
    <tr>
        <td>14-11-2021</td>
        <td>Albumin</td>
        <td>41</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>K</td>
        <td>{">10"}</td>
    </tr>
    <tr>
        <td>16-11-2021</td>
        <td>Urea</td>
        <td>4.9</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>Urea</td>
        <td>5.1</td>
    </tr>
    <tr>
        <td>16-11-2021</td>
        <td>Creatinine</td>
        <td>74</td>
    </tr>
    <tr>
        <td>10-07-2023</td>
        <td>Creatinine</td>
        <td>80</td>
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
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>05-05-2023</td>
        <td>NA</td>
        <td>139</td>
    </tr>
    <tr>
        <td>05-05-2023</td>
        <td>K</td>
        <td>6.1</td>
    </tr>
    <tr>
        <td>05-05-2023</td>
        <td>Urea</td>
        <td>4.6</td>
    </tr>
    <tr>
        <td>05-05-2023</td>
        <td>Creatinine</td>
        <td>116</td>
    </tr>
    </table>
    
    <Collapsible trigger="View Additional Resullts">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>NA</th>
        <th>K</th>
        <th>Crea</th>
        <th>Urea</th>
    </tr>
    <tr>
        <td>03-06-2022</td>
        <td>141</td>
        <td>4.7</td>
        <td>3.0</td>
        <td>108</td>
    </tr>
    <tr>
        <td>08-08-2022</td>
        <td>140</td>
        <td>4.8</td>
        <td>5.1</td>
        <td>126</td>
    </tr>
    <tr>
        <td>05-09-2022</td>
        <td>140</td>
        <td>4.9</td>
        <td>4.4</td>
        <td>137</td>
    </tr>
    <tr>
        <td>14-09-2022</td>
        <td>140</td>
        <td>5.8</td>
        <td>4.1</td>
        <td>123</td>
    </tr>
    <tr>
        <td>12-02-2023</td>
        <td>139</td>
        <td>5.5</td>
        <td>3.9</td>
        <td>114</td>
    </tr>
    <tr>
        <td>29-04-2023</td>
        <td>140</td>
        <td>4.8</td>
        <td>4.4</td>
        <td>105</td>
    </tr>
    </table>
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Ca</th>
        <th>Glucose</th>
        <th>Mg</th>
        <th>Alp</th>
    </tr>
    <tr>
        <td>29-04-2023</td>
        <td>2.33</td>
        <td>NA</td>
        <td>NA</td>
        <td>129</td>
    </tr>
    <tr>
        <td>05-05-2023</td>
        <td>2.28</td>
        <td>4.8</td>
        <td>0.59</td>
        <td>115</td>
    </tr>
    </table>
    </Collapsible>
    
    <Collapsible trigger="Clinical Details">
        Safe Prescribing; GP
    </Collapsible>
    </Collapsible>
</>
);
}



